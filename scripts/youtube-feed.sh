#!/usr/bin/env bash
# Забирает последние видео YouTube-канала форума в site/assets/data/youtube.json.
# Сайт подмешивает их в ленту «Forum anları» (Reels); если видео нет или файл
# не найден — показываются локальные ролики из assets/video/reels.
#
# На сервере запускается cron'ом раз в 30 минут (см. README, раздел YouTube).
# Ключ API не нужен — используется публичный RSS-фид канала.
set -euo pipefail

CHANNEL_ID="UCjyY7hzq0x1bCNde1yjIOjw"   # youtube.com/@InternationalAgroBusinessForum
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/site/assets/data/youtube.json"
TMP_XML="$OUT.xml.tmp"
TMP_JSON="$OUT.tmp"

mkdir -p "$(dirname "$OUT")"
trap 'rm -f "$TMP_XML" "$TMP_JSON"' EXIT

# пустой канал отдаёт 404 — тогда пишем пустой список, сайт покажет локальные ролики
if ! curl -fsSL --max-time 20 \
     "https://www.youtube.com/feeds/videos.xml?channel_id=$CHANNEL_ID" -o "$TMP_XML"; then
  printf '{"channel":"%s","videos":[]}\n' "$CHANNEL_ID" > "$TMP_JSON"
else
  python3 - "$TMP_XML" "$TMP_JSON" "$CHANNEL_ID" <<'PY'
import json, sys, xml.etree.ElementTree as ET

src, dst, channel = sys.argv[1:4]
ns = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}
videos = []
for e in ET.parse(src).getroot().findall("a:entry", ns):
    vid = e.findtext("yt:videoId", default="", namespaces=ns)
    if not vid:
        continue
    link = e.find("a:link", ns)
    href = link.get("href", "") if link is not None else ""
    videos.append({
        "id": vid,
        "title": e.findtext("a:title", default="", namespaces=ns),
        "published": e.findtext("a:published", default="", namespaces=ns),
        "short": "/shorts/" in href,
    })
with open(dst, "w", encoding="utf-8") as f:
    json.dump({"channel": channel, "videos": videos}, f, ensure_ascii=False)
PY
fi

chmod 644 "$TMP_JSON"
mv -f "$TMP_JSON" "$OUT"
