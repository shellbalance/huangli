@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   黄历网站 - 本地服务器
echo ========================================
echo.
echo 正在检测可用的服务器...
echo.

REM 检查 Python
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [√] 找到 Python
    echo.
    echo 启动服务器...
    echo.
    for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
        set IP=%%a
        goto :found_ip
    )
    :found_ip
    echo 本地访问: http://localhost:8000
    echo 手机访问: http://%IP::=%:8000
    echo.
    echo 提示: 按 Ctrl+C 停止服务器
    echo.
    python -m http.server 8000
    goto :end
)

REM 检查 Node.js
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo [√] 找到 Node.js
    echo.
    echo 启动服务器...
    echo.
    npx -y serve -l 8000
    goto :end
)

REM 都没有找到
echo [×] 未找到 Python 或 Node.js
echo.
echo 请选择以下方案之一:
echo.
echo 1. 安装 Python: https://www.python.org/downloads/
echo 2. 安装 Node.js: https://nodejs.org
echo 3. 使用在线部署: 查看 README.md 文件
echo.
pause

:end
