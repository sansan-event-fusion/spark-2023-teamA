import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PlainLink } from '@/components/atoms/Link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>Fill HOME</p>
      <PlainLink path='http://localhost:3001/rentalHouse' innerText='泊まるお部屋をお探しの方はこちら'/>
      <a href='http://localhost:3001/admin/rentalHouse'>大家・管理会社の方はこちら</a>    
    </main>
  )
}
