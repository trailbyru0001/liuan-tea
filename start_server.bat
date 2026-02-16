@echo off
title 六安瓜片溯源平台服务器
echo ==========================================
echo       六安瓜片区块链溯源平台启动脚本
echo ==========================================
echo.

:: 检测是否安装了 Python
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo [提示] 未检测到 Python 环境。
    echo [操作] 将直接使用浏览器打开 index.html 文件...
    start index.html
) else (
    echo [提示] Python 环境已就绪。
    echo [操作] 正在启动本地服务器 (端口 8000)...
    echo [操作] 浏览器将自动打开 http://localhost:8000
    echo.
    echo 请保持此黑色窗口开启，关闭窗口将停止服务。
    echo.
    
    :: 先打开浏览器，再启动服务器
    start http://localhost:8000
    python -m http.server 8000
)

pause