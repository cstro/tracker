import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

import config from '../config';
import { Account } from '@/types/firestore/api.types';

const db = getFirestore(config);

const categoriesRef = collection(db, 'categories');
const transactionsRef = collection(db, 'transactions');
const sourcesRef = collection(db, 'sources');
const accountsRef = collection(db, 'accounts');

export default async function addData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export interface CreateCategoryPayload {
  name: string;
  parentId?: string;
}

export async function createCategory(data: CreateCategoryPayload) {
  const docRef = await addDoc(categoriesRef, data);

  return docRef;
}

export interface CreateSourcePayload {
  name: string;
}

export async function createSource(data: CreateSourcePayload) {
  const docRef = await addDoc(sourcesRef, data);

  return docRef;
}

export interface CreateAccountPayload extends Omit<Account, 'id'> {}

export async function createAccount(data: CreateAccountPayload) {
  const docRef = await addDoc(accountsRef, data);

  return docRef;
}

export interface CreateTransactionPayload {
  amount: number;
  type: 'income' | 'expense';
  categoryId: string;
  sourceId: string;
  accountId: string;
  date: Timestamp;
}

export async function createTransaction(data: CreateTransactionPayload) {
  const docRef = await addDoc(transactionsRef, data);

  return docRef;
}
