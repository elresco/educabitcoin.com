import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-center gap-12 px-4 pt-0 pb-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          EducaBitcoin
        </h1>
        <div className="flex flex-row gap-2 justify-center items-center">
          <Link className="text-3xl p-12 rounded-lg bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-white hover:text-orange-500" href="/es">🇪🇸🇲🇽 ESPAÑOL</Link>
          <Link className="text-3xl p-12 rounded-lg bg-blue-500 text-white font-bold border-2 border-blue-500 hover:bg-white hover:text-blue-500" href="/en">🇬🇧🇺🇸 ENGLISH</Link>
        </div>
      </div>
    </main>
  )
}
