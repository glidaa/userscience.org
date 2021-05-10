export default function Intro() {
  return (
    <section className="bg-accent-1 shadow flex-col md:flex-row flex items-center md:justify-between ">
      <div className="px-5 container mx-16 py-5 2xl:max-w-screen-xl 2xl:mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          User <span className="text-blue-600">science</span>
        </h1>
        <h4 className="float-right max-w-3xl text-center md:text-right text-lg mt-5 md:pl-8">
          User Science is a philosophy, applied as a framework, with accepted
          laws, and an empirical method of acquiring knowledge of users
          scientifically.
        </h4>
      </div>
    </section>
  );
}
