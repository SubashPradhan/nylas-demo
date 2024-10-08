import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-blue p-4 shadow-md flex justify-between items-center py-8">
      <div className="text-blue-500 font-bold text-2xl px-2 md:px-6 md:text-3xl">
        <Link href="/">Nylas Demo</Link>
      </div>

      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden cursor-pointer"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </div>

      <nav className="hidden md:block">
        <ul className="md:flex space-x-8 text-gray-600 text-xl font-semibold">
          <li>
            <a
              href="https://www.nylas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="https://developer.nylas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Developer Docs
            </a>
          </li>
          <li>
            <a
              href="https://support.nylas.com/hc/en-us"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Contact Support
            </a>
          </li>
        </ul>
      </nav>

      <nav className="hidden md:block">
        <ul className="md:flex space-x-4 text-white px-6 text-lg">
          <li>
            <a
              href="https://dashboard-v3.nylas.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100 hover:border-blue-500 border-2 border-transparent hover:bg-white"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="https://dashboard-v3.nylas.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 hover:border-blue-500 border-2 border-transparent"
            >
              Signup
            </a>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <nav className="absolute top-20 left-0 bottom-0 right-0 bg-blue-500 justify-center z-10 h-full">
          <ul className="flex flex-col text-gray-50 text-2xl items-center space-y-8 py-12">
            <li>
              <a
                href="https://www.nylas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="https://developer.nylas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Developer Docs
              </a>
            </li>
            <li>
              <a
                href="https://support.nylas.com/hc/en-us"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Contact Support
              </a>
            </li>
            <li className="p-2">
              <a
                href="https://dashboard-v3.nylas.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded hover:border-gray-50 border-2 border-transparent"
              >
                Login
              </a>
            </li>
            <li className="p-2">
              <a
                href="https://dashboard-v3.nylas.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 text-blue-500 px-4 py-2 rounded hover:bg-white hover:text-green-500 hover:border-gray-500 border-2 border-transparent"
              >
                Signup
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
