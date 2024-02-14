import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CustnxtApp",
  description: "Customer app to create board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="m-0 justify-center"><Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/employee">Employee</Link></nav>
        {children}
      </body>
    </html>
  );
}
