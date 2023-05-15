'use client';

import { createContext, useContext } from 'react';

import useAccounts from '@/hooks/useAccounts';
import useCategories from '@/hooks/useCategories';
import useSources from '@/hooks/useSources';
import {
  Account,
  Category,
  GroupedCategory,
  Source,
  Transaction,
} from '@/types/firestore/api.types';
import useTransactions from '@/hooks/useTransactions';

type State = {
  accounts: Account[];
  categories: Category[];
  groupedCategories: GroupedCategory[];
  parentCategories: Category[];
  sources: Source[];
  transactions: Transaction[];

  refetchCategories: () => Promise<void>;
  refetchSources: () => Promise<void>;
  refetchAccounts: () => Promise<void>;
};

const FirestoreCountContext = createContext<State | undefined>(undefined);

interface FirestoreProviderProps {
  children: React.ReactNode;
}

export function FirestoreProvider({ children }: FirestoreProviderProps) {
  const { accounts, refetch: refetchAccounts } = useAccounts();
  const {
    categories,
    groupedCategories,
    parentCategories,
    refetch: refetchCategories,
  } = useCategories();
  const { sources, refetch: refetchSources } = useSources();
  const { transactions } = useTransactions();

  return (
    <FirestoreCountContext.Provider
      value={{
        accounts,
        categories,
        groupedCategories,
        parentCategories,
        sources,
        transactions,
        refetchCategories,
        refetchSources,
        refetchAccounts,
      }}
    >
      {children}
    </FirestoreCountContext.Provider>
  );
}

export function useFirestore() {
  const context = useContext(FirestoreCountContext);

  if (context === undefined) {
    throw new Error('useFirestore must be used within a FirestoreProvider');
  }

  return context;
}

export function useHydratedTransaction(id: string) {
  const { transactions } = useFirestore();

  const transaction = transactions.find((transaction) => transaction.id === id);

  return { transaction }
}
