import Link from 'next/link'
import Header from '@/components/header.js'

export default function Home() {
  return (
    <main>
     <Header/>
     <p>
        <Link href='/about'>About us</Link>
     </p>
    </main>
  )
}
