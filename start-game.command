#!/bin/bash
cd -- "$(dirname -- "$0")"
if command -v python3 >/dev/null 2>&1; then
  python3 ./start_game.py
else
  printf '\n请先安装 Python 3：https://www.python.org/downloads/\n'
fi
printf '\n按回车关闭窗口。'
read -r
