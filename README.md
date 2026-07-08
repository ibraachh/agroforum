# International Agro Business Forum — веб-сайт

Лендинг в стиле официального портала (как president.az), но в фирменной агро-зелёной палитре из логотипа.

## Запуск
```bash
cd site
python3 -m http.server 4188
# открыть http://localhost:4188
```
Сайт полностью статический — можно залить на любой хостинг (папка `site/`).

## Структура
```
site/
  index.html            — вся страница
  assets/css/style.css  — стили
  assets/js/main.js     — слайдер, меню, галерея-лайтбокс, табы, анимации
  assets/img/2023/      — фото 2023 (оптимизированные, img1..img10)
  assets/img/2024/      — фото 2024 (img1..img8)
  assets/img/logo/      — логотип
```
Оригинальные тяжёлые фото лежат в `photos/` (в корне) — не используются сайтом.

## Разделы
- Hero-слайдер (2026 / 2024 / 2023)
- Forum haqqında (о форуме)
- Forumlar (карточки 2023, 2024, 2026)
- Детальные блоки 2023 и 2024 (цифры + новости в стиле president.az)
- Panellər (все панели и спикеры 2023/2024)
- Spikerlər (почётные гости, табы по годам)
- Qalereya (masonry + лайтбокс)
- Tərəfdaşlar, CTA, футер

## Продажа билетов — birbilet.az
Билеты продаются через **birbilet.az** (логотип-партнёр в шапке блока продаж и в футере).
Нейминг: выбрано **«Bilet al»** (купить билет), а не «Qeydiyyat» — т.к. продажа платная.

Ссылка сейчас-заглушка `https://birbilet.az` (`target="_blank"`). Заменить на прямую ссылку
события, когда появится, в 3 местах `index.html`:
- Кнопка в шапке (`.masthead__cta` → «Bilet al»)
- Секция `#cta` — главная кнопка «Bilet al» + чип «Rəsmi bilet tərəfdaşı» с логотипом
- Футер — блок `.footer__ticket`
Логотип: `assets/img/logo/birbilet-logo.png`

## Логотипы партнёров (секция «Təşkilatçılar və tərəfdaşlar»)
Реальные логотипы лежат в `assets/img/partners/` + `assets/img/logo/birbilet-logo.png`:
- ministry.png — Kənd Təsərrüfatı Nazirliyi
- kobia.png — KOBİA
- innovation.png — İnnovasiya və Rəqəmsal İnkişaf Agentliyi
- tdt.svg — Türk Dövlətləri Təşkilatı
- birbilet — birbilet.az (rəsmi bilet tərəfdaşı)

Чтобы добавить ещё партнёра — скопируй карточку `.partner` в `index.html`, положи логотип
в `assets/img/partners/`. Роль подписывается тегом `.partner__role` (для билетного — `is-ticket`).
Прежние организаторы KOBSKA и Agro TV Azərbaycan сейчас не в этой сетке (нет логотипов) —
пришли их лого, добавлю.

## Куда добавить данные за 2026
Порядок везде: **2026 → 2024 → 2023** (слайдер, карточки `#editions`, детальные секции).
2026 стоит с текстом-заглушкой (lorem) и старыми фото. Заменить при получении инфы:
- Слайд 2026 — первый `.slide` в `index.html`
- Карточка 2026 — блок `edition__year is-next` в `#editions`
- **Детальная секция `#f2026`** — уже создана (lorem + фото прошлых лет в `.photostrip`).
  Заменить lorem-параграфы, цифры в ribbon и фото на реальные, когда будут.
- CTA-секция `#cta` (продажа билетов через birbilet.az)

## Логотип и кнопки (правки)
- Логотип шапки: `assets/img/logo/logo-trim.png` — авто-обрезан по контенту (скрипт Pillow),
  высота задаётся в CSS `.brand__logo` (сейчас 60px). Чтобы крупнее — увеличь height.
- Кнопка в шапке — «Qeydiyyat» (без иконки).
- Блок продажи в `#cta` — «ticket-box»: чип «Rəsmi bilet tərəfdaşı» + лого birbilet.az + кнопка «Bilet al».
