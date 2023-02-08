'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import './globals.css'
import { usePathname } from "next/navigation";

export default function RootLayout({children}: {
  children: React.ReactNode,
}) {
  const path = usePathname();

  return (
    <html lang="en">
      <head/>
      <body>
        {path != "/studio" &&<Header></Header>}
        <div className='bg-gray-900 h-screen h-100vh'>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  )
}
