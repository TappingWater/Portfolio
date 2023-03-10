import Header from "@/components/Header";
import "./globals.css";
import { Merriweather, Nunito, Roboto_Condensed } from "@next/font/google";
import Footer from "@/components/Footer";

// Load optimized fonts for self hosting to avoid CLS.
const mont = Nunito({
  subsets: ["latin"],
  variable: "--font-text",
  style: ["italic", "normal"],
  weight: ["200", "300", "400", "500", "700"],
});
const libre = Merriweather({
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
  const fontStyling = `${mont.variable} ${libre.variable} ${roboto.variable}`;
  const bodyStyling =
    "bg-gray-900 min-h-screen max-h-full m-0 w-[100%] pt-[100px] text-white pb-2 font-text";

  // Render layout
  return (
    <html lang="en">
      <head />
      <body className={fontStyling}>
        <Header></Header>
        <main className={bodyStyling}>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
