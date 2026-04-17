@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ========================================
echo   Wedding Congrats Page - Local Server
echo ========================================
echo.
echo   Open in browser:  http://localhost:8000
echo.
echo   Press Ctrl+C to stop the server
echo ========================================
echo.
start "" "http://localhost:8000"
python -m http.server 8000
