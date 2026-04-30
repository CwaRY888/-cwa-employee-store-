# 📘 Firebase 版本使用說明

Firebase 雲端版本可讓多位員工同時登入、下單,資料即時同步!

---

## 🚀 快速啟動 (3 步驟)

### 第 1 步:設定 Firebase (10 分鐘)

請參考 **🔥 Firebase 設定指南.md** 完成以下步驟:

1. 註冊 Firebase 帳號
2. 建立專案「CWA員工福利站」
3. 啟用 Firestore 資料庫
4. 複製 Firebase 配置
5. 貼到 `firebase-config.js` 檔案中

### 第 2 步:本地測試

1. 開啟 `🐟 CWA代購福利站 (Firebase版).html`
2. 檢查瀏覽器控制台 (F12)
3. 應該看到:
   ```
   ✅ Firebase 初始化完成
   ✅ Firebase 連接正常
   ✅ 已自動載入 44 個預設商品
   ✅ 已自動載入 15 位預設客戶
   ```

4. 選擇身份登入
5. 開始使用!

### 第 3 步:部署上線

兩種方式任選:

#### 方案 A: Firebase Hosting (推薦)

```bash
# 安裝 Firebase CLI
npm install -g firebase-tools

# 登入
firebase login

# 初始化
cd /path/to/代購系統
firebase init hosting

# 部署
firebase deploy
```

完成後取得網址: `https://你的專案.web.app`

#### 方案 B: Vercel

1. 前往 https://vercel.com
2. 註冊並連接 GitHub
3. 上傳專案資料夾
4. 點擊 Deploy
5. 取得網址: `https://你的專案.vercel.app`

---

## ✨ Firebase 版本特色

### 與原版的差異

| 功能 | 原版 (LocalStorage) | Firebase 版 |
|------|-------------------|------------|
| 資料儲存 | 瀏覽器本地 | 雲端資料庫 |
| 多人使用 | ❌ 資料不同步 | ✅ 即時同步 |
| 跨裝置 | ❌ 各自獨立 | ✅ 共用資料 |
| 資料備份 | ⚠️ 需手動 | ✅ 自動備份 |
| 部署方式 | 本地檔案 | 雲端網址 |

### 即時同步功能

- ✅ **員工下單** → 團主立即看到新訂單
- ✅ **團主更新商品** → 所有人立即看到
- ✅ **多人同時下單** → 不會衝突
- ✅ **跨裝置使用** → 手機、電腦資料一致

---

## 📱 員工使用方式

### 1. 開啟網址

員工只需要:
```
https://你的專案.web.app  (或 .vercel.app)
```

### 2. 選擇名字登入

- 點選自己的名字
- 輸入密碼 (預設為電話號碼)
- 開始購物

### 3. 購物下單

1. 瀏覽商品 → 加入購物車
2. 填寫資料 → 送出訂單
3. 完成!

### 4. 手機使用

iPhone/Android 可「加入主畫面」,像 App 一樣使用:

- **Safari (iPhone)**: 點「分享」→「加入主畫面」
- **Chrome (Android)**: 點「⋮」→「加到主畫面」

---

## 👑 管理員功能

### 登入

1. 點擊「🔑 團主」
2. 輸入密碼: `456`
3. 登入

### 查看訂單

- 所有員工的訂單即時顯示
- 可篩選、搜尋、匯出
- 自動彙總採購清單

### 管理商品

- 新增/編輯商品
- 匯入報價單 Excel
- 更新後所有人立即看到

### 管理客戶

- 新增/編輯員工資料
- 批次匯入
- 設定密碼

---

## 🔧 進階功能

### 查看 Firebase 資料

1. 登入 Firebase Console
2. 點擊「Firestore Database」
3. 查看三個集合:
   - `products` - 商品資料
   - `customers` - 客戶資料
   - `orders` - 訂單資料

### 手動備份

雖然 Firebase 自動備份,但也可手動匯出:

1. Firebase Console → Firestore Database
2. 點擊「匯出資料」
3. 選擇集合
4. 下載備份檔案

### 從 LocalStorage 遷移

如果你之前用過本地版本:

1. 開啟舊版 HTML
2. 按 F12 開啟控制台
3. 執行:
   ```javascript
   migrateFromLocalStorage()
   ```
4. 資料會自動轉移到 Firebase

---

## ⚠️ 注意事項

### 網路需求

- Firebase 版需要網路連接
- 離線時無法使用
- 建議使用穩定網路

### 資料安全

- 目前規則允許所有人讀寫 (適合內部使用)
- 如需更嚴格的安全設定,請參考 Firebase 安全規則文件

### 費用

- 一般公司用量在免費額度內
- Firebase 免費方案包含:
  - 每日讀取: 50,000 次
  - 每日寫入: 20,000 次
  - 儲存空間: 1 GB

### 瀏覽器支援

- Chrome (推薦)
- Safari
- Firefox
- Edge
- 需支援 ES6+ 和 async/await

---

## ❓ 常見問題

### Q: 為什麼看不到 Firebase 訊息?

A: 檢查:
1. `firebase-config.js` 是否填寫正確
2. F12 控制台是否有錯誤
3. 網路連接是否正常

### Q: 資料沒有同步?

A: 可能原因:
1. Firebase 配置錯誤
2. Firestore 規則未發布
3. 網路問題

解決方式: F12 檢查錯誤訊息

### Q: 可以用原版和 Firebase 版嗎?

A: 可以! 兩個版本檔案不衝突:
- `🐟 CWA代購福利站.html` - 本地版
- `🐟 CWA代購福利站 (Firebase版).html` - 雲端版

### Q: 訂單太多會影響效能嗎?

A: 不會,Firestore 可處理大量資料:
- 支援數萬筆訂單
- 查詢速度不受影響
- 自動索引優化

### Q: 如何修改管理員密碼?

A: 在 HTML 中搜尋 `ADMIN_PW_CURRENT`,修改該值。

### Q: 可以限制只有特定人員能登入嗎?

A: 可以! 需要修改 Firestore 安全規則,或在登入邏輯中加入白名單驗證。

---

## 📞 需要協助?

遇到問題時:

1. **檢查控制台** (F12) 查看錯誤訊息
2. **確認配置** 檢查 `firebase-config.js`
3. **測試連接** 執行 `checkFirebaseConnection()`
4. **查看文件** 參考 🔥 Firebase 設定指南.md

---

## 🎉 部署完成後

### 分享網址給員工

```
各位同事好！

員工福利站已上線:
👉 https://你的專案.web.app

使用方式:
1. 開啟網址
2. 選擇你的名字登入
3. 開始購物!

手機可以加入主畫面,更方便使用 📱
```

### 管理員日常作業

- 定期檢查新訂單
- 更新商品價格
- 匯出採購清單
- 備份重要資料

---

**祝您使用順利！** 🎊
