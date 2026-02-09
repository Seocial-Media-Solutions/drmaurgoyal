import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHaYMT_jYnLqrPnKyUnI4ES8VzmMw_3Vg",
  authDomain: "mayurchildcarecenter.firebaseapp.com",
  projectId: "mayurchildcarecenter",
  storageBucket: "mayurchildcarecenter.firebasestorage.app",
  messagingSenderId: "118324665230",
  appId: "1:118324665230:web:c58231174106937808e2df",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

let db;
let analytics;

if (typeof window !== 'undefined') {
  // Client-side initialization with persistence
  try {
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
      }),
    });
  } catch (e) {
    // Fallback if already initialized differently or error
    db = getFirestore(app);
  }

  // Initialize analytics
  if (typeof window !== 'undefined') {
    try {
      analytics = getAnalytics(app);
    } catch (e) { /* ignore */ }
  }
} else {
  // Server-side initialization (no persistence)
  db = getFirestore(app);
}

export { app, db, analytics };