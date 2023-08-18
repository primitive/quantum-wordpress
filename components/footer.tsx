import Container from './container'
import { GITHUB_REPO, FOOTER_BTN_TEXT, FOOTER_BTN_LINK, FOOTER_BTN2_TEXT, FOOTER_BTN2_LINK } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t-4 border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl font-bold font-serif tracking-tighter leading-tight text-center text-success lg:text-left mb-10 lg:mb-0 lg:pr-4">
              Created with Next.js.
            </h3>
            <p className="text-2xl lg:text-3xl font-bold tracking-tighter leading-tight text-center text-success lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              Created with Next.js.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`${FOOTER_BTN_LINK}`}
              className="mx-3 bg-amber-600 hover:bg-amber-500 hover:text-accent-2 border border-accent-2 text-white font-bold tracking-wide py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              {FOOTER_BTN_TEXT}
            </a>
            <a
              href={`${FOOTER_BTN2_LINK}`}
              className="mx-3 font-bold text-amber-800 hover:text-amber-700 hover:underline"
              target="_blank"
            >
              {FOOTER_BTN2_TEXT}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
