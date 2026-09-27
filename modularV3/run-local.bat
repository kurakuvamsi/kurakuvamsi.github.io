@echo off
setlocal
cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
)

if not exist "dist\moduhome-angular\browser\index.html" (
  echo Building the app...
  call npm run build
)

echo Starting local server and opening the site...
call npm run serve:dist
