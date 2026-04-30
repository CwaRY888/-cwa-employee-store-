# 🌐 GitHub Pages 部署指南

最簡單的部署方式！完全免費，不用設定 Firebase。

---

## 🎯 推薦方案

### 📌 用本地版 + GitHub Pages

**優點**:
- ✅ 零設定，不用註冊 Firebase
- ✅ 3 分鐘就能上線
- ✅ 完全免費
- ✅ 有線上網址，員工直接開啟

**限制**:
- ⚠️ 每個人的資料是獨立的（用瀏覽器 LocalStorage）
- ⚠️ 不會即時同步

**適合**:
- 讓員工各自下單
- 團主再統一收集訂單

---

## 🚀 部署步驟（3 分鐘）

### 方法一：GitHub Desktop（最簡單）

#### 1. 下載 GitHub Desktop

前往下載: https://desktop.github.com/

#### 2. 註冊/登入 GitHub

- 已有帳號：直接登入
- 沒有帳號：註冊一個（免費）

#### 3. 上傳專案

1. 開啟 GitHub Desktop
2. 點選 **"Create a New Repository"**
3. 填寫:
   - **Name**: `cwa-employee-store`
   - **Local Path**: 選擇代購系統資料夾
   - ✅ 勾選 "Publish this repository to GitHub"
4. 點 **"Create Repository"**
5. 點 **"Publish repository"**
   - ⚠️ 如果是公司內部使用，可勾選 **"Keep this code private"**（需付費）
   - ✅ 公開也沒關係，別人看得到網頁但資料各自獨立

#### 4. 啟用 GitHub Pages

1. 前往 GitHub 網站: https://github.com
2. 找到剛上傳的 `cwa-employee-store` 專案
3. 點 **"Settings"**（設定）
4. 左側選單點 **"Pages"**
5. **Source** 選擇: `main` 分支
6. 點 **"Save"**
7. 等待 1-2 分鐘

#### 5. 取得網址

完成後會顯示:
```
Your site is live at https://你的帳號.github.io/cwa-employee-store/
```

**複製這個網址，分享給員工！**

---

### 方法二：網頁上傳（不用安裝軟體）

#### 1. 登入 GitHub

前往: https://github.com

#### 2. 建立新專案

1. 點右上角 **"+"** → **"New repository"**
2. 填寫:
   - **Repository name**: `cwa-employee-store`
   - **Public** 或 **Private**（私有需付費）
3. 點 **"Create repository"**

#### 3. 上傳檔案

1. 點 **"uploading an existing file"**
2. 將整個資料夾拖進去（或選擇檔案）
3. 等待上傳完成
4. 點 **"Commit changes"**

#### 4. 啟用 GitHub Pages

（同方法一的步驟 4）

---

## ✅ 完成！

`index.html` 已經設定好自動跳轉，不需要修改。

員工只需開啟:
```
https://你的帳號.github.io/cwa-employee-store/
```

就會自動跳轉到主系統！

---

## 📱 分享給員工

### 通知範本

```
各位同事好！

🎉 CWA員工福利站已上線！

📱 網址: https://你的帳號.github.io/cwa-employee-store/

使用方式:
1. 開啟網址
2. 選擇你的名字登入
3. 開始購物！

💡 小技巧:
- 手機可以「加入主畫面」，像 App 一樣使用
- 資料會自動儲存在你的瀏覽器

有問題歡迎詢問 😊
```

---

## 🔄 更新系統

如果要修改商品或功能：

### 使用 GitHub Desktop:

1. 修改檔案
2. 開啟 GitHub Desktop
3. 看到修改的檔案
4. 填寫 Commit message（例如: "更新商品價格"）
5. 點 **"Commit to main"**
6. 點 **"Push origin"**
7. 等 1-2 分鐘，網站就更新了！

### 使用網頁:

1. 前往 GitHub 專案頁面
2. 點要修改的檔案
3. 點鉛筆圖示 ✏️ 編輯
4. 修改後點 **"Commit changes"**
5. 等 1-2 分鐘，網站就更新了！

---

## ⚠️ 注意事項

### 資料儲存方式

**重要**: GitHub Pages 版本使用瀏覽器 LocalStorage

- ✅ 每個員工的資料獨立儲存
- ✅ 不會互相影響
- ⚠️ 清除瀏覽器快取會遺失資料
- ⚠️ 不同瀏覽器資料不互通

**建議員工**:
- 固定用同一個瀏覽器
- 定期備份資料（匯出訂單）

### 團主收集訂單

方式 1: **Excel 匯出**
- 員工各自匯出訂單 Excel
- 傳給團主統整

方式 2: **截圖**
- 員工截圖購物車
- 傳給團主

方式 3: **代客下單**
- 團主以「團主」登入
- 使用「代客下單」功能
- 一次幫所有人下單

---

## 🆚 GitHub Pages vs Firebase

### GitHub Pages（推薦新手）

✅ **優點**:
- 3 分鐘上線
- 不用設定資料庫
- 完全免費
- 有線上網址

⚠️ **限制**:
- 資料不同步（各自獨立）
- 不會即時更新

### Firebase 雲端版（進階用戶）

✅ **優點**:
- 多人即時同步
- 雲端備份
- 資料共用

⚠️ **需要**:
- 註冊 Firebase
- 設定資料庫
- 填寫配置檔案

---

## 💡 推薦流程

### 第一階段：快速上線

1. ✅ 用 GitHub Pages 部署本地版
2. ✅ 員工開始使用
3. ✅ 收集回饋

### 第二階段：評估需求

觀察使用情況:
- 員工人數多嗎？（10+ 人）
- 需要即時統計嗎？
- 資料收集麻煩嗎？

### 第三階段：升級（選用）

如果需要更強大的功能:
- 💡 升級到 Firebase 雲端版
- 參考 **🔥 Firebase 設定指南.md**

---

## ❓ 常見問題

### Q: 網址可以自訂嗎？

A: 預設網址是 `你的帳號.github.io/專案名稱`

如果想要更短的網址:
- 可以購買網域名稱（例如: cwa-store.com）
- 在 GitHub Pages 設定自訂網域

### Q: 可以改成私有嗎？

A: 
- GitHub 私有 repo 需付費（$4/月）
- 但即使 repo 公開，別人也看不到員工的訂單資料
- 因為資料儲存在各自的瀏覽器中

### Q: 如果員工清除瀏覽器資料怎麼辦？

A: 
- 訂單資料會遺失
- 建議員工定期匯出訂單
- 或升級到 Firebase 雲端版（自動備份）

### Q: 可以看到所有員工的訂單嗎？

A: 
- GitHub Pages 版本: ❌ 不行，資料各自獨立
- Firebase 雲端版: ✅ 可以，所有訂單集中管理

### Q: 手機可以用嗎？

A: ✅ 可以！
- 系統支援手機瀏覽器
- 可以加入主畫面，像 App 一樣使用

### Q: 上傳失敗怎麼辦？

A: 常見原因:
1. 檔案太大 → GitHub 單檔限制 100MB
2. 檔案名稱有特殊符號 → 改成英文
3. 網路不穩 → 重新上傳

---

## 🎓 延伸學習

### 想學更多？

**GitHub 基礎**:
- GitHub 官方教學: https://guides.github.com/
- 中文教學: https://gitbook.tw/

**進階部署**:
- 想要即時同步 → 看 **🔥 Firebase 設定指南.md**
- 想要自訂網域 → 看 GitHub Pages 文件

---

## 📞 需要協助？

### 檢查清單

部署前:
- [ ] 已註冊 GitHub 帳號
- [ ] 已下載 GitHub Desktop（或用網頁上傳）
- [ ] 已準備好代購系統資料夾

部署後:
- [ ] 已啟用 GitHub Pages
- [ ] 已取得網址
- [ ] 已測試網址可開啟
- [ ] 已通知員工

遇到問題:
- [ ] 檢查 GitHub Pages 設定
- [ ] 確認檔案已上傳完整
- [ ] 清除瀏覽器快取重試

---

## 🎉 快速總結

### 3 步驟上線

```
1. 上傳到 GitHub (拖拉檔案)
   ↓
2. 啟用 GitHub Pages (Settings → Pages)
   ↓
3. 分享網址給員工
```

### 就這麼簡單！

**不用設定資料庫**
**不用填寫配置**
**不用安裝軟體**

只要 3 分鐘，系統就上線了！🚀

---

**準備好了嗎？開始部署吧！** ✨

<function_calls>
<invoke name="Read">
<parameter name="file_path">/Volumes/YU_X10 pro/VS Code用_公司/CWA/員工福利站/代購系統/index.html