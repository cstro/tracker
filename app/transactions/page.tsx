'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CiShoppingTag } from 'react-icons/ci';

import { Table, Tbody, Td, Tr } from '@/components/Table';
import { useFirestore } from '@/context/FirestoreContext';
import { toCurrency } from '@/utils/currency';

export default function Transactions() {
  const { categories, sources, transactions } = useFirestore();

  const getCategoryNames = (
    categoryId: string,
    names: string[] = []
  ): string[] => {
    const category = categories.find((category) => category.id === categoryId);

    if (!category) {
      return names;
    }

    const updatedNames = [category.name, ...names];

    if (category.parentId) {
      return getCategoryNames(category.parentId, updatedNames);
    }

    return updatedNames;
  };

  const getSourceName = (sourceId: string) => {
    return sources.find((source) => source.id === sourceId)?.name ?? '';
  };

  return (
    <main>
      <div>
        <section>
          <div className="mb-4">
            <Link
              className="text-blue-500 underline"
              href="/transactions/create"
            >
              Add Purchase
            </Link>

            <Link
              className="text-blue-500 underline"
              href="/transactions/create"
            >
              Add Payment
            </Link>

            <Link
              className="text-blue-500 underline"
              href="/transactions/create"
            >
              Add Transfer
            </Link>
          </div>

          {transactions.map((transaction) => (
            <div key={transaction.id} className="py-1 border-b">
              <div className='flex justify-between mb-0.5'>
                <Link className="font-semibold" href={`/transactions/${transaction.id}`}>
                  {getSourceName(transaction.sourceId)}
                </Link>
                <div className="text-sm">{toCurrency(transaction.amount)}</div>
              </div>
              <div className="font-light text-xs text-slate-700 mb-2">
                {dayjs(transaction.date.toDate()).format('HH:mm')} | {transaction.type}
              </div>
            </div>
          ))}


          {/* <Table>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>
                    <Link href={`/transactions/${transaction.id}`}>
                      {getSourceName(transaction.sourceId)}
                    </Link>
                  </Td>
                  <Td>
                    <div className="space-x-2">
                      {getCategoryNames(transaction.categoryId).map((name) => (
                        <div
                          key={name}
                          className="inline-flex flex-row items-center space-x-1 bg-orange-100 text-orange-700 px-2 py-1 rounded-md"
                        >
                          <CiShoppingTag />
                          <span className="text-xs">{name}</span>
                        </div>
                      ))}
                    </div>
                  </Td>
                  <Td>
                    {dayjs(transaction.date.toDate()).format('DD/MM/YYYY HH:mm')}
                  </Td>
                  <Td
                    className={`${
                      transaction.type === 'expense'
                        ? 'text-red-700'
                        : 'text-green-700'
                    }`}
                  >
                    <>
                      {transaction.type === 'expense' ? '-' : '+'}
                      {toCurrency(transaction.amount)}
                    </>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table> */}
        </section>
      </div>
    </main>
  );
}
