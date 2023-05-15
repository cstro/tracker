import { Category, Source, Transaction } from './api.types';

export type AddSourceAction = { type: 'add_source'; payload: Source };

export type AddTransactionAction = {
  type: 'add_transaction';
  payload: Transaction;
};

export type CategoriesLoaded = {
  type: 'categories_loaded';
  payload: Category[];
};

export type SourcesLoaded = { type: 'sources_loaded'; payload: Source[] };

export type TransactionsLoaded = {
  type: 'transactions_loaded';
  payload: Transaction[];
};

export type Action =
  | AddSourceAction
  | AddTransactionAction
  | CategoriesLoaded
  | SourcesLoaded
  | TransactionsLoaded;
