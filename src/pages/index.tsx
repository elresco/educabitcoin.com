import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>EducaBitcoin</title>
        <meta name="description" content="EducaBitcoin" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            EducaBitcoin
          </h1>
          
          <div className="flex gap-2">
            <a className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-white hover:text-orange-500" href="https://educabitcoin.com">Bitcoin Blog</a>
            <a className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-white hover:text-orange-500" href="https://educabitcoin.com/books">Bitcoin Books</a>
            <a className="px-4 py-2 rounded-lg bg-green-500 text-white font-bold border-2 border-green-500 hover:bg-white hover:text-green-500" href="https://btcpay.educabitcoin.com">BTC Pay Server</a>
          </div>
        </div>
      </main>
    </>
  );
}
