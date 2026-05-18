@echo off
title Blender AI MCP Server - HTTP Mode
color 0A
echo ======================================================
echo Blender AI MCP Server - Easy Start
echo ======================================================
echo.
echo This window starts the MCP bridge at:
echo http://127.0.0.1:8000/mcp
echo.
echo BEFORE running this:
echo 1. Open Blender.
echo 2. Install and enable blender_ai_mcp_ADDON_INSTALL_IN_BLENDER.zip.
echo 3. Leave Blender open.
echo 4. Make sure Docker Desktop is open/running.
echo.
pause

docker --version >nul 2>&1
if errorlevel 1 (
  echo.
  echo ERROR: Docker was not found.
  echo Install Docker Desktop first, then run this file again.
  echo https://www.docker.com/products/docker-desktop/
  echo.
  pause
  exit /b 1
)

echo.
echo Starting Blender AI MCP server...
echo Keep this black window open while using Blender AI MCP.
echo.

docker run --rm -p 8000:8000 ^
  -v "%TEMP%:/tmp" ^
  -e BLENDER_AI_TMP_INTERNAL_DIR=/tmp ^
  -e BLENDER_AI_TMP_EXTERNAL_DIR=/tmp ^
  -e ROUTER_ENABLED=true ^
  -e MCP_SURFACE_PROFILE=llm-guided ^
  -e MCP_TRANSPORT_MODE=streamable ^
  -e MCP_HTTP_HOST=0.0.0.0 ^
  -e MCP_HTTP_PORT=8000 ^
  -e MCP_STREAMABLE_HTTP_PATH=/mcp ^
  -e MCP_PROMPTS_AS_TOOLS_ENABLED=false ^
  -e BLENDER_RPC_HOST=host.docker.internal ^
  -e PYTHONUNBUFFERED=1 ^
  ghcr.io/patrykiti/blender-ai-mcp:latest

echo.
echo Server stopped.
pause
