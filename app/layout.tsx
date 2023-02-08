import Footer from '@/components/footer'
import Header from '@/components/header'
import './globals.css'

export default function RootLayout({children}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head/>
      <body>
        <Header></Header>
        <div className='bg-gray-900 h-screen h-100vh'>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  )
}
