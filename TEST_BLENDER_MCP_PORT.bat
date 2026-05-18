@echo off
title Test Blender AI MCP Server Port
color 0B
echo Testing whether the MCP HTTP server is reachable...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command "try { $r = Invoke-WebRequest -Uri 'http://127.0.0.1:8000/mcp' -Method GET -TimeoutSec 5; Write-Host 'Server responded. Status:' $r.StatusCode } catch { Write-Host 'Could not reach http://127.0.0.1:8000/mcp'; Write-Host 'This is normal if 1_START_MCP_SERVER_DOCKER_HTTP.bat is not running.'; Write-Host $_.Exception.Message }"
echo.
pause
