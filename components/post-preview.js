import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <section className="flex flex-col w-full md:w-96  ">
      <div className="mb-5 max-h-64 md:h-64 md:w-96  flex items-center justify-center">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>

      <div className="max-h-64 h-64 flex flex-row items-end justify-between">
        <div className="self-start">
          <h3 className="text-4xl mb-3 leading-snug font-bold">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-sm text-gray-400 mb-4">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4 text-gray-600">
            {excerpt}
          </p>
        </div>
        <div className="bg-stars" />
      </div>
    </section>
  );
}
