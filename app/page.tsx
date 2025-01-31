import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Let&apos;s explore some countries</h1>
      <br></br>
      <Link href='/countries'>Countries</Link>
    </main>
  );
}
