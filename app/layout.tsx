import { Inter } from 'next/font/google';
import Link from 'next/link';

import { AuthContextProvider } from '@/context/AuthContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <header>
            <nav className="bg-gray-800 mb-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <ul className="flex flex-row items-center space-x-8 text-white text-sm">
                    <li>
                      <Link className="hover:underline" href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/categories">
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/accounts">
                        Accounts
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/sources">
                        Sources
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
