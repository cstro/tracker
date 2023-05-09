import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
} from 'firebase/firestore';

import config from '../config';

const db = getFirestore(config);

const transactionsRef = collection(db, 'transactions');
const sourcesRef = collection(db, 'sources');
const categoriesRef = collection(db, 'categories');
const accountsRef = collection(db, 'accounts');

export async function fetchTransactions() {
  const q = query(transactionsRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
}

export async function fetchCategories() {
  const q = query(categoriesRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
}

export async function fetchSources() {
  const q = query(sourcesRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
}

export async function fetchAccounts() {
  const q = query(accountsRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
}

export default async function getDocument(collection: string, id: string) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
