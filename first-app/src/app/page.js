import Link from 'next/link'

export default function Home() {
  return (
    <main>
     NextJS home page
     <p>
        <Link href='/about'>About us</Link>
     </p>
    </main>
  )
}
