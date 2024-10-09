import { handleMailboxConnect } from "@/services/handleMailboxConnect";
import Link from "next/link";

const LoginRequired: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-lg tracking-wide">
          <h1 className="text-xl font-semibold text-white mb-4">
            This page requires user to login.
          </h1>
          <p className="text-white mb-6">
            Please login to test our demo application.
          </p>
          <div className="flex justify-between space-x-4">
            <button
              className="bg-yellow-500 font-bold text-white px-6 py-3 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 w-full"
              onClick={handleMailboxConnect}
            >
              Connect Mailbox
            </button>

            <Link href="/" className="bg-yellow-500 font-bold text-white px-6 py-3 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 w-full text-center">
                Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRequired;
