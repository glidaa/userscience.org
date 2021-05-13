import { useState, useEffect, useRef } from "react";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderLinks() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();
  const hamburger = useRef();
  console.log(router);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !isOpen ||
        node.current.contains(event.target) ||
        hamburger.current.contains(event.target)
      ) {
        return;
      }

      toggleOpen();
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
      <div className="flex flex-no-shrink items-stretch h-12">
        <button
          onClick={toggleOpen}
          ref={hamburger}
          className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
        >
          <svg
            className="fill-current text-gray"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        ref={node}
        className={cn(
          "lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow",
          {
            hidden: !isOpen,
          }
        )}
      >
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <Link as={`/start`} href="/start">
            <a
              className={cn(
                "border-l-2 lg:border-l-0 lg:border-t-2 border-transparent flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-blue-700 no-underline flex items-center  hover:text-blue-900 hover:bg-blue-200",
                {
                  "border-blue-700": router?.asPath === "/start",
                }
              )}
            >
              Start Here
            </a>
          </Link>
          <Link as={`/about`} href="/about">
            <a
              className={cn(
                "border-l-2 lg:border-l-0 lg:border-t-2 border-transparent flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-blue-700 no-underline flex items-center  hover:text-blue-900 hover:bg-blue-200",
                {
                  "border-blue-700": router?.asPath === "/about",
                }
              )}
            >
              About
            </a>
          </Link>

          <Link as={`/contact`} href="/contact">
            <a
              className={cn(
                "border-l-2 lg:border-l-0 lg:border-t-2 border-transparent flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-blue-700 no-underline flex items-center  hover:text-blue-900 hover:bg-blue-200",
                {
                  "border-blue-700 ": router?.asPath === "/contact",
                }
              )}
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
