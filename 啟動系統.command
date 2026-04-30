#!/bin/bash
# CWA代購福利站 - 啟動腳本

# 切換到腳本所在目錄
cd "$(dirname "$0")"

# 啟動簡易 HTTP 伺服器
echo "🐟 CWA代購福利站"
echo "================================"
echo "正在啟動系統..."
echo ""

# 使用 Python 啟動 HTTP 伺服器
python3 -m http.server 8000 > /dev/null 2>&1 &
SERVER_PID=$!

echo "✅ 伺服器已啟動！"
echo "📍 網址: http://localhost:8000"
echo ""

# 等待伺服器啟動
sleep 2

# 自動開啟瀏覽器
echo "🌐 正在開啟瀏覽器..."
open "http://localhost:8000/"

echo ""
echo "================================"
echo "💡 使用說明:"
echo "   - 系統已在瀏覽器中開啟"
echo "   - 按 Ctrl+C 可停止伺服器"
echo "================================"
echo ""

# 等待使用者關閉
wait $SERVER_PID
