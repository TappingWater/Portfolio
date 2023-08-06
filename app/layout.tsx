import Header from "@/components/Header";
import "./globals.css";
import { Nunito, Roboto_Condensed, Roboto_Slab } from "@next/font/google";
import Footer from "@/components/Footer";
import Head from "./head";

// Load optimized fonts for self hosting to avoid CLS.
const mont = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-text",
  style: ["normal"],
  weight: ["300", "400", "700"],
});
const libre = Nunito({
  subsets: ["latin"],
  variable: "--font-heading",
  style: ["italic", "normal"],
  weight: ["300","400", "700"],
});
const roboto = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-subText",
  style: ["normal"],
  weight: ["300", "400", "700"],
});

// Metadata
export const metadata = {
  title: 'Chanaka Perera',
  description: 'Chanaka Perera, Software Engineer, Portfolio, Personal Site, Personal Blog, Home'
};

//  Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Tailwind styling
  const bodyStyling =
    "bg-gray-900 min-h-screen max-h-full m-0 w-[100%] pt-[100px] text-white pb-2 font-text";

  // Render layout
  return (
    <html lang="en">
      <Head />
      <body className={`${mont.variable} ${libre.variable} ${roboto.variable}`}>
        <Header></Header>
        <main className={bodyStyling}>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
