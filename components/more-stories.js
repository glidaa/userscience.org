import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mx-16 mb-8 text-4xl md:text-5xl text-gray-700 tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="lg:mx-16 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:gap-x-16 lg:gap-x-16 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
