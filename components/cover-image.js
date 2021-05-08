import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug, height, width }) {
  console.log("images", src)
  const image = (<>
    {src&&
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md object-contain transition-shadow duration-200': slug,
        'max-h-64': height===278
      })}
      layout="intrinsic"
      width={width}
      height={height}
    />}</>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
