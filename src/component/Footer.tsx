import Link from "next/link"

type Props = {}

export default function Footer(props: Props) {
  return <footer className="bg-gray-900">
    <div className="text-white flex flex-row gap-4 items-center justify-center">
      <div>EducaBitcoin®</div>
      <Link className="hover:underline" href="/es/legal">Aviso legal | Política de cookies | Política de privacidad</Link>
    </div>
  </footer>
}
