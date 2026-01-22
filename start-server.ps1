$port = 3000
$ipAddress = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254.*"} | Select-Object -First 1).IPAddress

Write-Host "Server Starting..." -ForegroundColor Green
Write-Host "Local URL: http://localhost:$port" -ForegroundColor Cyan
Write-Host "Mobile URL: http://${ipAddress}:$port" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$port/")

try {
    $listener.Start()
    Write-Host "Server is running!" -ForegroundColor Green
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        
        $filePath = Join-Path $PSScriptRoot $path.TrimStart('/')
        
        if (Test-Path $filePath) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $extension = [System.IO.Path]::GetExtension($filePath)
            
            switch ($extension) {
                ".html" { $response.ContentType = "text/html; charset=utf-8" }
                ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                default { $response.ContentType = "application/octet-stream" }
            }
            
            $response.StatusCode = 200
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $html = "<h1>404 Not Found</h1>"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($html)
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        
        $response.Close()
    }
} finally {
    $listener.Stop()
}
