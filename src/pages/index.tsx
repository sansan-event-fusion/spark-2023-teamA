import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { PlainLink } from '@/components/atoms/Link';
import { Routing } from "@/hooks/routing";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>Fill HOME</p>
      <PlainLink path={Routing.rentalHouses.buildRoute().path} innerText='泊まるお部屋をお探しの方はこちら'/>
      <Link href={Routing.adminRentalHouses.buildRoute().path}>大家・管理会社の方はこちら</Link>    
    </main>
  )
}
