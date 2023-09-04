import CoverImage from './cover-image'
import PostTitle from './post-title-overlay'

export default function PostHeader({
  title,
  coverImage,
}) {
  return (
    <>

      <div className="relative">

        <div className="mb-8 md:mb-6 sm:mx-0 shadow-small border-solid border-4 border-t-8 border-primary rounded-tr-[6rem] overflow-hidden animate-fade animate-once animate-ease-in animate-delay-[300ms] animate-duration-[1100ms]">
          <CoverImage title={title} coverImage={coverImage} />
        </div>

        <div className="absolute bottom-0 left-0 z-10 px-5 pt-3 bg-white bg-opacity-80 border-t-4 border-secondary ml-1 mr-1 mb-1 animate-fade animate-once animate-ease-in animate-delay-[1400ms] animate-duration-[1800ms]">
          <PostTitle>{title}</PostTitle>
        </div>

      </div>
      
    </>
  )
}
