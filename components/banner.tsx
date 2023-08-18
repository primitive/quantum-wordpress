import Container from './container'
import Image from 'next/image'
import githubIcon from "../public/img/github-white.svg"
import cn from 'classnames'
import { SITE_BANNER_TEXT, SITE_BANNER_LINK, SITE_BANNER_LINK_TEXT } from '../lib/constants'

export default function Banner({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-primary font-sans text-yellow-50': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is a page preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-primary duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              {`${SITE_BANNER_TEXT}`}{' '}
              <a
                href={`${SITE_BANNER_LINK}`}
                className="underline hover:text-primary duration-200 transition-colors"
              >
                {`${SITE_BANNER_LINK_TEXT}`}
              </a>
              .
              <Image
                priority
                src={githubIcon}
                alt="Star on GitHub"
                title="Star on GitHub"
                className="w-5 float-right"
              />
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
