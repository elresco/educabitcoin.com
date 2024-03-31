import "~/styles/globals.css"

import Link from "next/link"

export const metadata: Metadata = {
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

import { Inter } from "next/font/google"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function Layout(props: { children: React.ReactNode }) {
  return <body className={`font-sans ${inter.variable}`}>
    <div className="min-h-screen bg-gray-50">
      <header className="flex py-2 px-8 items-center justify-end gap-4">
      </header>
      <main className="p-8">{props.children}</main>
      <footer>
      </footer>
    </div>
  </body>
}
