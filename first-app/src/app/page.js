import Link  from 'next/link'
import MainHeader from '../components/main-header/main-header'

export default function Home() {
  return (
    <main>
     <MainHeader/>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p>
        <Link href='/meals'>Meals page</Link>
      </p>
      <p>
        <Link href='/meals/share'>share meals page</Link>
      </p>
      <p>
        <Link href='/community'>community page</Link>
      </p>
    </main>
  );
}
