# 黄历网站 - 本地服务器启动脚本
# 使用此脚本可以在本地网络中访问黄历网站

Write-Host "正在启动黄历网站服务器..." -ForegroundColor Green
Write-Host ""

# 获取本机 IP 地址
$ipAddress = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254.*"} | Select-Object -First 1).IPAddress

$port = 8080

Write-Host "服务器信息：" -ForegroundColor Yellow
Write-Host "本地访问地址：http://localhost:$port" -ForegroundColor Cyan
Write-Host "手机访问地址：http://${ipAddress}:$port" -ForegroundColor Cyan
Write-Host ""
Write-Host "提示：" -ForegroundColor Yellow
Write-Host "1. 确保手机和电脑连接到同一个 WiFi 网络" -ForegroundColor White
Write-Host "2. 在手机浏览器中输入上面的手机访问地址" -ForegroundColor White
Write-Host "3. 按 Ctrl+C 可以停止服务器" -ForegroundColor White
Write-Host ""
Write-Host "正在启动服务器..." -ForegroundColor Green
Write-Host ""

# 创建 HTTP 监听器
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$port/")

try {
    $listener.Start()
    Write-Host "✓ 服务器已启动！" -ForegroundColor Green
    Write-Host ""
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # 获取请求的文件路径
        $path = $request.Url.LocalPath
        if ($path -eq "/") {
            $path = "/index.html"
        }
        
        $filePath = Join-Path $PSScriptRoot $path.TrimStart('/')
        
        Write-Host "$(Get-Date -Format 'HH:mm:ss') - 请求: $path" -ForegroundColor Gray
        
        if (Test-Path $filePath) {
            # 读取文件内容
            $content = [System.IO.File]::ReadAllBytes($filePath)
            
            # 设置 Content-Type
            $extension = [System.IO.Path]::GetExtension($filePath)
            switch ($extension) {
                ".html" { $response.ContentType = "text/html; charset=utf-8" }
                ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                ".json" { $response.ContentType = "application/json; charset=utf-8" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".jpeg" { $response.ContentType = "image/jpeg" }
                ".gif"  { $response.ContentType = "image/gif" }
                ".svg"  { $response.ContentType = "image/svg+xml" }
                default { $response.ContentType = "application/octet-stream" }
            }
            
            $response.StatusCode = 200
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            # 404 Not Found
            $response.StatusCode = 404
            $html = "<html><body><h1>404 - File Not Found</h1><p>$path</p></body></html>"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($html)
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        
        $response.Close()
    }
} catch {
    Write-Host "错误: $_" -ForegroundColor Red
} finally {
    $listener.Stop()
    Write-Host ""
    Write-Host "服务器已停止" -ForegroundColor Yellow
}
