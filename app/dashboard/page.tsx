'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CiShoppingTag } from 'react-icons/ci';

import { Heading } from '@/components/Heading';
import { Table, Tbody, Td, Tr } from '@/components/Table';
import {
  fetchCategories,
  fetchSources,
  fetchTransactions,
} from '@/firebase/firestore/getData';
import { toCurrency } from '@/utils/currency';

export default function Dashboard() {
  const [sources, setSources] = useState<any>([]);
  const [transactions, setTransactions] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    fetchSources().then((data) => {
      setSources(data);
    });

    fetchCategories().then((data) => {
      setCategories(data);
    });

    fetchTransactions().then((data) => {
      setTransactions(data);
    });
  }, []);

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
    return sources.find((source) => source.id === sourceId)?.name;
  };

  const getSourceLogo = (sourceId: string) => {
    return sources.find((source) => source.id === sourceId)?.logoUrl;
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
              New transaction
            </Link>
          </div>

          <Table>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>
                    {getSourceLogo(transaction.sourceId) && (
                      <Image
                        width={32}
                        height={32}
                        alt={getSourceName(transaction.sourceId)}
                        src={getSourceLogo(transaction.sourceId)}
                      />
                    )}
                  </Td>
                  <Td>
                    <span>{getSourceName(transaction.sourceId)}</span>
                  </Td>
                  <Td
                    className={`${
                      transaction.type === 'expense'
                        ? 'text-red-700'
                        : 'text-green-700'
                    }`}
                  >
                    {transaction.type === 'expense' ? '-' : ''}
                    {toCurrency(transaction.amount)}
                  </Td>
                  <Td>
                    {dayjs(transaction.date.toDate()).format('DD/MM/YYYY')}
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
                </Tr>
              ))}
            </Tbody>
          </Table>
        </section>
      </div>
    </main>
  );
}
