@echo off
echo Installing Angular 21 dependencies...
npm install
if errorlevel 1 (
  echo.
  echo npm install failed. Check your Node.js and internet connection.
  pause
  exit /b 1
)
echo.
echo Starting ANOMS Angular website...
npm start
