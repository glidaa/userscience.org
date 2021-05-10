import Link from "next/link";

export default function FooterLinks() {
  return (
    <nav className="pt-10 relative select-none bg-grey lg:flex lg:items-stretch w-full">
      <div className="">
        <div className="flex-wrap lg:flex lg:items-stretch lg:justify-start ml-auto">
          <Link as={`/privacy`} href="/privacy">
            <a className="border-l-2 lg:border-l-0 lg:border-t-2 border-transparent flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-blue-700 no-underline flex items-center  hover:text-blue-900 hover:bg-blue-200">
              Privacy
            </a>
          </Link>

          <Link as={`/terms`} href="/terms">
            <a className="border-l-2 lg:border-l-0 lg:border-t-2 border-transparent flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-blue-700 no-underline flex items-center  hover:text-blue-900 hover:bg-blue-200">
              Terms
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
