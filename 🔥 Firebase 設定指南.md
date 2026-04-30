# 🔥 Firebase 設定指南

讓系統上線，所有員工共用資料！

---

## 📋 第一步：註冊 Firebase（5分鐘）

### 1. 前往 Firebase 官網
```
https://firebase.google.com
```

### 2. 點擊「開始使用」
- 使用 Google 帳號登入
- 建立新專案

### 3. 建立專案
```
專案名稱：CWA員工福利站
位置：Taiwan
```

### 4. 啟用 Firestore 資料庫
1. 左側選單 → 「Firestore Database」
2. 點擊「建立資料庫」
3. 選擇「測試模式」（測試用）
4. 位置選擇：`asia-east1 (Taiwan)`
5. 完成！

### 5. 取得 Firebase 配置
1. 點擊專案設定（齒輪圖示）
2. 往下捲到「您的應用程式」
3. 點擊 `</>`（Web 圖示）
4. 註冊應用程式：`CWA員工福利站`
5. 複製 `firebaseConfig` 內容

---

## 📝 第二步：填入配置（2分鐘）

### 開啟 `firebase-config.js` 檔案
將剛才複製的配置貼上：

```javascript
// Firebase 配置
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",              // ← 貼上您的
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "YOUR_APP_ID"
};
```

**⚠️ 重要：請保存好這個配置！**

---

## 🔒 第三步：設定安全規則（3分鐘）

### 在 Firebase Console 設定資料庫規則

1. 進入「Firestore Database」
2. 點擊「規則」頁籤
3. 貼上以下規則：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 允許所有讀寫（內部系統用）
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

4. 點擊「發布」

**⚠️ 注意：這是簡化版規則，適合公司內部使用**

---

## 📱 第四步：測試系統（5分鐘）

### 本地測試
1. 開啟 `🐟 CWA代購福利站 (Firebase版).html`
2. 用兩個不同瀏覽器登入
3. 在瀏覽器 A 新增訂單
4. 看瀏覽器 B 是否即時更新

### 檢查資料
1. 回到 Firebase Console
2. 點擊「Firestore Database」
3. 應該看到資料：
   - `products` 集合（商品）
   - `customers` 集合（客戶）
   - `orders` 集合（訂單）

---

## 🚀 第五步：部署上線（15分鐘）

### 方案A：使用 Firebase Hosting（推薦）

#### 1. 安裝 Firebase CLI
```bash
npm install -g firebase-tools
```

#### 2. 登入 Firebase
```bash
firebase login
```

#### 3. 初始化專案
```bash
cd /path/to/代購系統
firebase init hosting
```

選擇：
- 選擇剛才建立的專案
- Public directory: `.`（當前目錄）
- Single-page app: `No`
- 不要覆蓋 index.html

#### 4. 部署
```bash
firebase deploy
```

#### 5. 取得網址
部署完成後會顯示：
```
Hosting URL: https://你的專案.web.app
```

---

### 方案B：使用 Vercel（也很簡單）

#### 1. 註冊 Vercel
```
https://vercel.com
```

#### 2. 連接 GitHub
- 將專案上傳到 GitHub
- 在 Vercel 匯入 GitHub 專案

#### 3. 部署
- 點擊「Deploy」
- 等待部署完成
- 取得網址

---

## ✅ 完成！分享給員工

### 取得網址後：
```
https://你的專案.web.app
或
https://你的專案.vercel.app
```

### 分享方式：
1. 📱 傳送網址給員工
2. 📲 可加入手機主畫面（像 App 一樣）
3. 💻 也可用電腦瀏覽

### 員工使用：
1. 開啟網址
2. 選擇名字登入
3. 開始購物！

### 管理員使用：
1. 以「團主」登入
2. 可看到所有訂單
3. 匯出採購清單

---

## 🔧 進階設定（選用）

### 自訂網域
如果有公司網域：
1. Firebase Console → Hosting
2. 點擊「新增自訂網域」
3. 依指示設定 DNS

### 備份資料
Firebase 自動備份，也可手動匯出：
1. Firestore Database
2. 匯出資料
3. 下載備份

### 查看使用量
1. Firebase Console
2. 使用量頁籤
3. 查看流量和儲存

---

## ❓ 常見問題

### Q: 需要付費嗎？
A: 免費！一般公司用量不會超過免費額度。

### Q: 資料安全嗎？
A: 是的，Firebase 是 Google 提供的服務，有完整的安全機制。

### Q: 可以看到員工下單記錄嗎？
A: 可以！管理員登入後可看到所有訂單。

### Q: 手機可以用嗎？
A: 可以！系統支援手機瀏覽器，也可加入主畫面。

### Q: 如果要改回 LocalStorage 版本？
A: 保留原本的 HTML 檔案即可，兩個版本可並存。

---

## 📞 需要協助？

如遇到問題：
1. 檢查 Firebase 配置是否正確
2. 檢查瀏覽器 Console 是否有錯誤
3. 確認 Firestore 規則已發布

---

**祝您部署順利！** 🎉
