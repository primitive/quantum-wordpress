import Avatar from './avatar'
import Date from './date'
import Categories from './categories'

export default function PostMeta({
  date,
  author,
  categories,
}) {
  return (
    <>
      <div className="max-w-2xl mt-6 mx-auto">
        <div className="block mb-6 mx-auto items-center">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-md text-center">
          Posted <Date dateString={date} /> <br />
          <Categories categories={categories} />
        </div>
      </div>
      
    </>
  )
}
