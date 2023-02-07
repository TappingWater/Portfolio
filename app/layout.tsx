import './globals.css'

export default function RootLayout({children, title}: {
  children: React.ReactNode,
  title: string
}) {
  return (
    <html lang="en">
      <head title={title}/>
      <body>
        {children}
      </body>
    </html>
  )
}
