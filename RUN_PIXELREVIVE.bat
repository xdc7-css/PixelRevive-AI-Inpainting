@echo off
title PixelRevive - AI-Driven Image Restoration & Inpainting
cd /d "%~dp0"

echo ===============================================================================
echo            PIXELREVIVE -- AI IMAGE RESTORATION ^& INPAINTING
echo            University of Basrah ^| Department of Computer Engineering
echo            Graduation Project (2026-2027)
echo ===============================================================================
echo.

:: Configure portable storage on Drive X to protect Drive C capacity
set "BASE_DRIVE=%~d0"
if exist "X:\" (
    set "STORAGE_DIR=X:"
) else (
    set "STORAGE_DIR=%BASE_DRIVE%"
)

set "TEMP=%STORAGE_DIR%\temp"
set "TMP=%STORAGE_DIR%\temp"
set "TORCH_HOME=%STORAGE_DIR%\torch_cache"
set "HF_HOME=%STORAGE_DIR%\hf_cache"
set "XDG_CACHE_HOME=%STORAGE_DIR%\models"
set "PIP_CACHE_DIR=%STORAGE_DIR%\pip_cache"

if not exist "%STORAGE_DIR%\temp" mkdir "%STORAGE_DIR%\temp"
if not exist "%STORAGE_DIR%\models" mkdir "%STORAGE_DIR%\models"
if not exist "%STORAGE_DIR%\torch_cache" mkdir "%STORAGE_DIR%\torch_cache"
if not exist "%STORAGE_DIR%\hf_cache" mkdir "%STORAGE_DIR%\hf_cache"

:: Detect Python Virtual Environment
set "VENV_PATH="
if exist "%~dp0venv\Scripts\activate.bat" (
    set "VENV_PATH=%~dp0venv"
) else if exist "%~dp0..\venv\Scripts\activate.bat" (
    set "VENV_PATH=%~dp0..\venv"
) else if exist "X:\image project\venv\Scripts\activate.bat" (
    set "VENV_PATH=X:\image project\venv"
)

if "%VENV_PATH%"=="" (
    echo [ERROR] Virtual environment could not be found!
    echo Please make sure the 'venv' directory exists.
    pause
    exit /b 1
)

echo [OK] Using virtual environment: %VENV_PATH%
call "%VENV_PATH%\Scripts\activate.bat"

:: Check PyTorch and CUDA status
echo [INFO] Verifying PyTorch and GPU acceleration...
python -c "import torch; print(f'[CUDA Status] Device: {torch.cuda.get_device_name(0)}' if torch.cuda.is_available() else '[CUDA Status] Running on CPU mode')" 2>nul

echo.
echo [STARTING] Launching PixelRevive at http://127.0.0.1:8080
echo Model: LaMa (Large Mask Inpainting)
echo Model Cache: %STORAGE_DIR%\models
echo Opening interface in default web browser...
echo Press Ctrl+C in this terminal window to stop the server.
echo ===============================================================================
echo.

"%VENV_PATH%\Scripts\iopaint.exe" start --model=lama --device=cuda --host=127.0.0.1 --port=8080 --model-dir="%STORAGE_DIR%\models" --inbrowser

if errorlevel 1 (
    echo.
    echo [WARNING] CUDA initialization failed or GPU is busy.
    echo Attempting fallback with CPU acceleration...
    "%VENV_PATH%\Scripts\iopaint.exe" start --model=lama --device=cpu --host=127.0.0.1 --port=8080 --model-dir="%STORAGE_DIR%\models" --inbrowser
)

pause
