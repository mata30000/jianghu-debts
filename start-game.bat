@echo off
chcp 65001 >nul
cd /d "%~dp0"
where py >nul 2>nul
if not errorlevel 1 (
  py -3 "%~dp0start_game.py"
  pause
  exit /b
)
where python >nul 2>nul
if not errorlevel 1 (
  python "%~dp0start_game.py"
  pause
  exit /b
)
echo 请先安装 Python 3：https://www.python.org/downloads/
echo 安装时勾选 Add Python to PATH，然后再次双击本文件。
pause
