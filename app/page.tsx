import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href="/transaction/create">Create transaction</Link>
    </main>
  );
}
