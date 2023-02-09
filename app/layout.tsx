import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  

  return (
    <html lang="en">
      <head />
      <body>
        <Header></Header>
        <div className="bg-gray-900 min-h-screen max-h-full pt-[100px] text-white pb-2">
          {children}
        </div>
      </body>
    </html>
  );
}
