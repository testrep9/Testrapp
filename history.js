// Firebase config (replace with yours)
const firebaseConfig = {
  apiKey: "AIzaSyDtCfsMkc_Z_9ZeF0TEHTDFBzLlkU-egSc",
  authDomain: "tradevanta-a3e0d.firebaseapp.com",
  projectId: "tradevanta-a3e0d",
  storageBucket: "tradevanta-a3e0d.appspot.com",
  messagingSenderId: "441098922985",
  appId: "1:441098922985:web:163878a0ef5b2054f8b978"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const listContainer = document.getElementById('transaction-list');

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function createTransactionItem({ type, amount, status, timestamp }) {
  const div = document.createElement('div');
  div.className = 'transaction-item';

  const titleClass = type.toLowerCase(); // deposit or withdraw
  const statusClass = status.toLowerCase(); // success or failed

  div.innerHTML = `
    <div class="avatar">a</div>
    <div class="transaction-info">
      <div class="transaction-title ${titleClass}">${type}</div>
      <div class="transaction-date">${formatDate(timestamp)}</div>
    </div>
    <div class="transaction-status">
      <div class="amount">₹${amount}</div>
      <div class="status ${statusClass}">${status}</div>
    </div>
    <div class="chevron">›</div>
  `;

  return div;
}

// ✅ Fetch and render from 'withdrawals' collection instead of 'transactions'
async function loadTransactions() {
  try {
    const snapshot = await db.collection('withdrawals').orderBy('timestamp', 'desc').get();
    snapshot.forEach(doc => {
      const tx = doc.data();
      const txItem = createTransactionItem(tx);
      listContainer.appendChild(txItem);
    });
  } catch (error) {
    console.error('Error loading transactions:', error);
  }
}

loadTransactions();
