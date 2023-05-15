import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from 'firebase/firestore';

import {
  Account,
  Category,
  Source,
  Transaction,
} from '@/types/firestore/api.types';

import config from '../config';

const db = getFirestore(config);

const transactionsRef = collection(db, 'transactions');
const sourcesRef = collection(db, 'sources');
const categoriesRef = collection(db, 'categories');
const accountsRef = collection(db, 'accounts');

export async function fetchTransactions() {
  const q = query(transactionsRef, orderBy('date', 'desc'));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Transaction;
  });
}

export async function fetchCategories() {
  const q = query(categoriesRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Category;
  });
}

export async function fetchSources() {
  const q = query(sourcesRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Source;
  });
}

export async function fetchAccounts() {
  const q = query(accountsRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Account;
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
