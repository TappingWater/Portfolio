import Header from "@/components/Header";
import "./globals.css";
import { Merriweather, Raleway, Roboto_Condensed } from "@next/font/google";

// Load optimized fonts for self hosting to avoid CLS.
const mont = Raleway({
  subsets: ["latin"],
  variable: "--font-text",
  style: ["italic", "normal"],
  weight: ["100", "300", "400", "500", "700"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Tailwind styling
  const fontStyling = `${mont.variable} ${libre.variable} ${roboto.variable}`;
  const bodyStyling =
    "bg-gray-900 min-h-screen max-h-full pt-[100px] text-white pb-2 font-text";

  // Render layout
  return (
    <html lang="en">
      <head />
      <body className={fontStyling}>
        <Header></Header>
        <div className={bodyStyling}>{children}</div>
      </body>
    </html>
  );
}
