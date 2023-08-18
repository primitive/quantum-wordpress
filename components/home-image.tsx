import cn from 'classnames'
import Image from "next/image"
import Link from 'next/link'

interface Props {
  title: string
  coverImage: {
    node: {
      sourceUrl: string
    }
  }
  slug?: string
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn('shadow-small', {
        'border-solid border-4 border-b-8 border-t-8 border-primary rounded-tr-[6rem] rounded-bl-[6rem]  hover:shadow-medium transition-shadow duration-200 animate-fade animate-ease-in': slug,
      })}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
