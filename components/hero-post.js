import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-8 md:mb-16 flex flex-col items-center">
      <div className="max-w-lg 2xl:max-w-screen-sm  ">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={400}
          width={800}
        />
      </div>
      <div className="self-start">
      <h3 className="text-4xl mb-3 leading-snug font-bold">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-sm text-gray-400 mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 text-gray-600">{excerpt}</p>
      </div>
      </div>
    </section>
  )
}
