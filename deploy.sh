#!/usr/bin/env bash
# Деплой agrobusiness.az — забирает последнюю версию из git и перечитывает nginx.
# Запуск на сервере:  bash /var/www/agroforum/deploy.sh
set -euo pipefail

REPO_DIR="/var/www/agroforum"
BRANCH="main"

echo "==> Обновляю $REPO_DIR из git ($BRANCH)"
cd "$REPO_DIR"

# жёстко приводим рабочую копию к состоянию origin/main
git fetch --prune origin
git reset --hard "origin/$BRANCH"

echo "==> Проверяю конфиг nginx"
nginx -t

echo "==> Перечитываю nginx"
systemctl reload nginx

echo "==> Готово. Текущий коммит:"
git --no-pager log -1 --oneline
