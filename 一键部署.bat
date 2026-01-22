@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   黄历网站 - 一键部署工具
echo ========================================
echo.
echo 请选择部署方式：
echo.
echo 1. Vercel 部署（推荐 - 全球访问，速度快）
echo 2. Netlify 部署（推荐 - 简单易用）
echo 3. 本地网络部署（仅限同一 WiFi）
echo 4. 查看部署指南
echo 5. 退出
echo.
set /p choice=请输入选项 (1-5): 

if "%choice%"=="1" (
    echo.
    echo 正在启动 Vercel 部署...
    powershell -ExecutionPolicy Bypass -File "%~dp0deploy-vercel.ps1"
    goto end
)

if "%choice%"=="2" (
    echo.
    echo 正在启动 Netlify 部署...
    powershell -ExecutionPolicy Bypass -File "%~dp0deploy-netlify.ps1"
    goto end
)

if "%choice%"=="3" (
    echo.
    echo 正在启动本地服务器...
    call "%~dp0启动服务器.bat"
    goto end
)

if "%choice%"=="4" (
    echo.
    echo 正在打开部署指南...
    start "" "%~dp0部署指南.md"
    goto end
)

if "%choice%"=="5" (
    exit
)

echo.
echo [×] 无效的选项，请重新运行
echo.
pause

:end
