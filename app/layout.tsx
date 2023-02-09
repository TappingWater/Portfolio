'use client'

import Header from '@/components/Header'
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
        <div className='bg-gray-900 h-screen h-100vh pt-[100px] text-white'>{children}</div> 
      </body>
    </html>
  )
}
