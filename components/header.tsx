import Link from 'next/link'
import { SITE_NAME } from "../lib/constants";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-display font-bold leading-tight mb-20 mt-8">
      <Link href="/" className="mpen">
        {SITE_NAME}
      </Link>
    </h2>
  )
}
