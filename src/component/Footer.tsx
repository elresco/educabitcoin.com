import Link from "next/link"

export default function Footer() {
  return <footer className="flex flex-col items-center justify-center bg-gray-900 text-white p-4 pb-10">
    <p className="mb-4">Sigueme en X donde hablo sobre como BTC va a transformar la forma de entender empresas</p>
    <div className="cursor-pointer flex justify-center items-center">
      <Link className="text-2xl p-8 rounded-lg bg-gray-50 text-black font-bold border-2 border-gray-50 hover:text-white hover:bg-black" href="https://x.com/therescode">Seguir en X</Link>
    </div>
    <hr className="mx-2 my-8 max-w-3xl" />
    <div className="flex flex-row gap-4 items-center justify-center">
      <div>EducaBitcoin®</div>
      <Link className="hover:underline" href="/es/legal">Aviso legal | Política de cookies | Política de privacidad</Link>
    </div>
  </footer>
}
