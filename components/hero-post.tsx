import Avatar from './avatar'
import Date from './date'
// import CoverImage from './cover-image'
import CoverImage from './home-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {

  if (excerpt) {
    excerpt = excerpt.replace(process.env.NEXT_PUBLIC_WORDPRESS_URL, "");
  }

  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div className='animate-fade-left animate-once animate-duration[800ms] rounded-xl border-solid border-2 border-t-8 border-primary p-4 bg-lighter shadow-md hover:shadow-2xl transition duration-300 ease-out'>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight font-serif font-bold">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg font-display text-primary">
            <Date dateString={date} />
          </div>
        </div>
        <div className='animate-fade-up animate-once animate-duration-[800ms] animate-delay-[600ms]'>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  )
}
