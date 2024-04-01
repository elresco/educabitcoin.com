import "~/styles/globals.css"
import { env } from "~/env"
import Footer from "~/component/Footer"

import Link from "next/link"
import { Inter } from "next/font/google"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_DOMAIN),
  title: "EducaBitcoin",
  description: "EducaBitcoin",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  twitter: {
    images: ["/img/educabitcoin-logo.jpg"],
  },
  openGraph: {
    images: ["/img/educabitcoin-logo.jpg"],
  }
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function Layout(props: { children: React.ReactNode }) {
  return <html>
    <body className={`font-sans ${inter.variable}`}>
      <div className="min-h-screen bg-gray-50">
        <header className="flex py-2 px-8 items-center justify-end gap-4">
        </header>
        <main className="p-8">{props.children}</main>
        <Footer />
      </div>
    </body>
  </html>
}
