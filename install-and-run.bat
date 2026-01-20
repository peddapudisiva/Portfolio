@echo off
cd /d "%~dp0"
call npm install
if %errorlevel% neq 0 (
    echo Installation failed! Error code: %errorlevel%
    pause
    exit /b %errorlevel%
)
echo.
echo Dependencies installed successfully!
echo.
echo Starting development server...
call npm run dev
