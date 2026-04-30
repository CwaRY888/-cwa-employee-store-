// Firebase 整合腳本
// 用於將 LocalStorage 改為 Firestore

// ============================================
// Firebase 初始化
// ============================================

// 初始化 Firebase（在 HTML 中 firebaseConfig 之後調用）
function initFirebase() {
  try {
    // 初始化 Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    console.log('✅ Firebase 已初始化');
    return db;
  } catch (error) {
    console.error('❌ Firebase 初始化失敗:', error);
    alert('Firebase 連接失敗，請檢查配置！');
    return null;
  }
}

// ============================================
// Firestore 資料操作（替代 LocalStorage）
// ============================================

// 儲存商品資料
async function saveProductsToFirestore(products) {
  const db = firebase.firestore();
  const batch = db.batch();

  try {
    // 清空現有商品
    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();
    snapshot.docs.forEach(doc => batch.delete(doc.ref));

    // 新增商品
    products.forEach(product => {
      const docRef = productsRef.doc(String(product.id));
      batch.set(docRef, product);
    });

    await batch.commit();
    console.log(`✅ 已儲存 ${products.length} 個商品到 Firestore`);
  } catch (error) {
    console.error('❌ 儲存商品失敗:', error);
  }
}

// 讀取商品資料
async function loadProductsFromFirestore() {
  const db = firebase.firestore();

  try {
    const snapshot = await db.collection('products').get();
    const products = [];

    snapshot.forEach(doc => {
      products.push(doc.data());
    });

    console.log(`✅ 從 Firestore 載入 ${products.length} 個商品`);
    return products;
  } catch (error) {
    console.error('❌ 讀取商品失敗:', error);
    return [];
  }
}

// 儲存客戶資料
async function saveCustomersToFirestore(customers) {
  const db = firebase.firestore();
  const batch = db.batch();

  try {
    // 清空現有客戶
    const customersRef = db.collection('customers');
    const snapshot = await customersRef.get();
    snapshot.docs.forEach(doc => batch.delete(doc.ref));

    // 新增客戶
    customers.forEach(customer => {
      const docRef = customersRef.doc(String(customer.id));
      batch.set(docRef, customer);
    });

    await batch.commit();
    console.log(`✅ 已儲存 ${customers.length} 位客戶到 Firestore`);
  } catch (error) {
    console.error('❌ 儲存客戶失敗:', error);
  }
}

// 讀取客戶資料
async function loadCustomersFromFirestore() {
  const db = firebase.firestore();

  try {
    const snapshot = await db.collection('customers').get();
    const customers = [];

    snapshot.forEach(doc => {
      customers.push(doc.data());
    });

    console.log(`✅ 從 Firestore 載入 ${customers.length} 位客戶`);
    return customers;
  } catch (error) {
    console.error('❌ 讀取客戶失敗:', error);
    return [];
  }
}

// 儲存訂單資料
async function saveOrderToFirestore(order) {
  const db = firebase.firestore();

  try {
    await db.collection('orders').doc(String(order.id)).set(order);
    console.log(`✅ 訂單 ${order.id} 已儲存到 Firestore`);
  } catch (error) {
    console.error('❌ 儲存訂單失敗:', error);
  }
}

// 讀取所有訂單
async function loadOrdersFromFirestore() {
  const db = firebase.firestore();

  try {
    const snapshot = await db.collection('orders').orderBy('createdAt', 'desc').get();
    const orders = [];

    snapshot.forEach(doc => {
      orders.push(doc.data());
    });

    console.log(`✅ 從 Firestore 載入 ${orders.length} 筆訂單`);
    return orders;
  } catch (error) {
    console.error('❌ 讀取訂單失敗:', error);
    return [];
  }
}

// ============================================
// 即時同步（監聽資料變化）
// ============================================

// 監聽訂單變化
function listenToOrders(callback) {
  const db = firebase.firestore();

  return db.collection('orders')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const orders = [];
      snapshot.forEach(doc => {
        orders.push(doc.data());
      });

      console.log(`🔄 訂單已更新：${orders.length} 筆`);
      callback(orders);
    }, error => {
      console.error('❌ 監聽訂單失敗:', error);
    });
}

// 監聽商品變化
function listenToProducts(callback) {
  const db = firebase.firestore();

  return db.collection('products')
    .onSnapshot(snapshot => {
      const products = [];
      snapshot.forEach(doc => {
        products.push(doc.data());
      });

      console.log(`🔄 商品已更新：${products.length} 個`);
      callback(products);
    }, error => {
      console.error('❌ 監聽商品失敗:', error);
    });
}

// ============================================
// 工具函數
// ============================================

// 從 LocalStorage 遷移到 Firestore
async function migrateFromLocalStorage() {
  try {
    console.log('🔄 開始遷移資料...');

    // 讀取 LocalStorage 資料
    const localProducts = JSON.parse(localStorage.getItem('cwa-products') || '[]');
    const localCustomers = JSON.parse(localStorage.getItem('cwa-customers') || '[]');
    const localOrders = JSON.parse(localStorage.getItem('cwa-orders') || '[]');

    // 儲存到 Firestore
    if (localProducts.length > 0) {
      await saveProductsToFirestore(localProducts);
    }

    if (localCustomers.length > 0) {
      await saveCustomersToFirestore(localCustomers);
    }

    if (localOrders.length > 0) {
      const db = firebase.firestore();
      const batch = db.batch();
      localOrders.forEach(order => {
        const docRef = db.collection('orders').doc(String(order.id));
        batch.set(docRef, order);
      });
      await batch.commit();
      console.log(`✅ 已遷移 ${localOrders.length} 筆訂單`);
    }

    console.log('✅ 資料遷移完成！');
    alert('資料已成功遷移到雲端資料庫！');
  } catch (error) {
    console.error('❌ 資料遷移失敗:', error);
    alert('資料遷移失敗：' + error.message);
  }
}

// 檢查 Firebase 連接狀態
async function checkFirebaseConnection() {
  const db = firebase.firestore();

  try {
    await db.collection('_test').doc('connection').set({
      timestamp: new Date(),
      test: true
    });
    await db.collection('_test').doc('connection').delete();

    console.log('✅ Firebase 連接正常');
    return true;
  } catch (error) {
    console.error('❌ Firebase 連接失敗:', error);
    return false;
  }
}

// ============================================
// 使用說明
// ============================================

/*
使用方式：

1. 在 HTML 中引入 Firebase SDK 和此腳本：
   <script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-firestore-compat.js"></script>
   <script src="firebase-config.js"></script>
   <script src="firebase-integration.js"></script>

2. 初始化 Firebase：
   const db = initFirebase();

3. 替換原本的 LocalStorage 操作：

   原本：localStorage.setItem('cwa-products', JSON.stringify(products));
   改為：await saveProductsToFirestore(products);

   原本：const products = JSON.parse(localStorage.getItem('cwa-products') || '[]');
   改為：const products = await loadProductsFromFirestore();

4. 啟用即時同步（選用）：
   listenToOrders(orders => {
     // 訂單更新時自動執行
     renderOrders(orders);
   });

5. 首次使用時遷移資料：
   await migrateFromLocalStorage();
*/
