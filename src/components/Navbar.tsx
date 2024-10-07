import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <header className="bg-blue p-4 shadow-md flex justify-between items-center py-6">
      <div className="text-blue-500 font-bold text-2xl px-6">
      <Link href="/">Nylas Demo</Link>
      </div>

      <nav>
        <ul className="hidden md:flex space-x-8 text-grey-200 text-lg">
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

      <nav>
        <ul className="flex space-x-4 text-white px-6 text-lg">
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
    </header>
  );
};

export default NavBar;
