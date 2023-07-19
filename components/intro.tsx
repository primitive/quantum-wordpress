import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight text-shadow-custom md:pr-8">
        Blog.it
      </h1>
      <h4 className="font-sans text-center text-shadow-custom md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog created with{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-300 font-display transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-300 font-display transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
  )
}
