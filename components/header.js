import Link from 'next/link'

export default function Header() {
  // return (
  //   <h2 className="bg-accent-1 shadow text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
  //    <div className="container mx-auto p-5"> <Link href="/">
  //       <a className="hover:underline">User <span className="text-blue-600">Science</span></a>
  //     </Link></div>
  //   </h2>
  // )
  return (
    <section className="bg-accent-1 shadow flex-col md:flex-row flex items-center md:justify-between ">
      <div className="px-5 container mx-16 py-5  2xl:max-w-screen-xl 2xl:mx-auto"><h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
      <Link href="/">
       <a className="hover:underline">User <span className="text-blue-600">science</span></a>
      </Link>
      </h1>
      <h4 className="text-center md:text-right text-lg mt-5 md:pl-8">
      A blog about user science
             </h4>
             </div>
    </section>
  )
}
