import { Timestamp } from 'firebase/firestore';

export interface Account {
  id: string;
  name: string;
  provider: string;
  balance: number;
}

export interface Category {
  id: string;
  parentId?: string;
  name: string;
}

export interface GroupedCategory extends Category {
  children: Category[];
}

export interface Source {
  id: string;
  name: string;
  logoUrl?: string;
}

type TransactionType = 'income' | 'expense' | 'transfer';

export interface Transaction {
  id: string;
  amount: number;
  date: Timestamp;
  type: TransactionType;
  sourceId: string;
  categoryId: string;
  accountId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}


export interface HydratedTransaction {
  id: string;
  amount: number;
  date: Timestamp;
  type: TransactionType;
  source: Source;
  category: Category;
  account: Account;
}
