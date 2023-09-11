import Link from 'next/link'
import { SITE_NAME } from "../lib/constants";

export default function Header() {
  return (
    <h2 className="text-6xl md:text-8xl font-display font-bold leading-tight text-shadow-custom md:pr-8 mb-10 mt-8">
      <Link href="/" className="mpen">
        {SITE_NAME}
      </Link>
    </h2>
  )
}
