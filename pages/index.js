import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Internet for the day</h1>
      <Link href="/videoPlayer">
        <a>The internet awaits...</a>
      </Link>
    </>
  );
}
