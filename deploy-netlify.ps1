# 黄历网站 - Netlify 自动部署脚本
# 使用说明：在 PowerShell 中运行此脚本

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   黄历网站 - Netlify 部署工具" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Node.js 是否已安装
Write-Host "正在检查环境..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "[✓] Node.js 已安装: $nodeVersion" -ForegroundColor Green
    }
}
catch {
    Write-Host "[×] 未找到 Node.js" -ForegroundColor Red
    Write-Host ""
    Write-Host "请先安装 Node.js:" -ForegroundColor Yellow
    Write-Host "1. 访问 https://nodejs.org" -ForegroundColor White
    Write-Host "2. 下载并安装 LTS 版本" -ForegroundColor White
    Write-Host "3. 重新运行此脚本" -ForegroundColor White
    Write-Host ""
    pause
    exit
}

Write-Host ""

# 检查 Netlify CLI 是否已安装
Write-Host "正在检查 Netlify CLI..." -ForegroundColor Yellow
try {
    $netlifyVersion = netlify --version 2>$null
    if ($netlifyVersion) {
        Write-Host "[✓] Netlify CLI 已安装: $netlifyVersion" -ForegroundColor Green
    }
}
catch {
    Write-Host "[!] Netlify CLI 未安装，正在安装..." -ForegroundColor Yellow
    npm install -g netlify-cli
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[✓] Netlify CLI 安装成功" -ForegroundColor Green
    }
    else {
        Write-Host "[×] Netlify CLI 安装失败" -ForegroundColor Red
        Write-Host "请手动运行: npm install -g netlify-cli" -ForegroundColor Yellow
        pause
        exit
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   开始部署" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 提示用户登录
Write-Host "步骤 1: 登录 Netlify" -ForegroundColor Yellow
Write-Host "提示: 如果已登录，可以跳过此步骤" -ForegroundColor Gray
Write-Host ""
$login = Read-Host "是否需要登录 Netlify? (y/n)"

if ($login -eq "y" -or $login -eq "Y") {
    netlify login
    Write-Host ""
}

# 部署
Write-Host "步骤 2: 部署网站" -ForegroundColor Yellow
Write-Host "提示: 使用 Netlify Drop 方式部署（无需配置）" -ForegroundColor Gray
Write-Host ""

# 切换到项目目录
Set-Location $PSScriptRoot

# 执行部署
Write-Host "正在部署..." -ForegroundColor Green
netlify deploy --prod --dir .

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "   部署成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "你的网站已成功部署到 Netlify！" -ForegroundColor White
    Write-Host "访问链接已显示在上方 ↑" -ForegroundColor White
    Write-Host ""
    Write-Host "提示:" -ForegroundColor Yellow
    Write-Host "- 在手机浏览器中打开上方的链接即可访问" -ForegroundColor White
    Write-Host "- 每次修改代码后，重新运行此脚本即可更新" -ForegroundColor White
    Write-Host "- 可以在 Netlify 控制台管理你的项目: https://app.netlify.com" -ForegroundColor White
    Write-Host ""
}
else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "   部署失败" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "请检查错误信息并重试" -ForegroundColor Yellow
    Write-Host ""
}

pause
