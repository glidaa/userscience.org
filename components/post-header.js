import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <div className="mx-8 md:mx-16 ">
        <PostTitle>{title}</PostTitle>
        {coverImage && (
          <div className="mb-8 md:mb-16 flex flex-col items-center justify-center">
            <CoverImage
              title={title}
              src={coverImage}
              height={400}
              width={800}
            />
          </div>
        )}
        {date && (
          <div className="w-full mt-4 text-sm text-gray-400 mb-4">
            <DateFormatter dateString={date} />
          </div>
        )}
      </div>
    </>
  );
}
