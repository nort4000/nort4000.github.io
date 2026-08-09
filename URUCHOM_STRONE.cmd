@echo off
chcp 65001 >nul
title NortIT - lokalny podglad
cd /d "%~dp0"

set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "NEXT_EXE=%CD%\node_modules\next\dist\bin\next"

if not exist "%NODE_EXE%" (
  echo.
  echo Nie znaleziono srodowiska Node.js dostarczonego przez Codex.
  echo Napisz w rozmowie z Codex: "uruchom mi strone lokalnie".
  echo.
  pause
  exit /b 1
)

if not exist "%NEXT_EXE%" (
  echo.
  echo Nie znaleziono plikow projektu. Napisz w rozmowie z Codex,
  echo aby ponownie przygotowal zaleznosci.
  echo.
  pause
  exit /b 1
)

echo.
echo NortIT uruchamia sie pod adresem:
echo http://localhost:3000
echo.
echo Nie zamykaj tego okna podczas ogladania strony.
echo Aby zatrzymac strone, nacisnij Ctrl+C.
echo.

start "" /b powershell.exe -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 4; Start-Process 'http://localhost:3000'"
"%NODE_EXE%" "%NEXT_EXE%" dev -p 3000

pause
