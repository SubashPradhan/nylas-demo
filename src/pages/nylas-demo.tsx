import Footer from "@/components/Footer";
import LoginRequired from "@/components/LoginRequired";
import NavBar from "@/components/Navbar";
import Wave from "@/components/Wave";
import { useAuth } from "@/context/authContext";
import Link from "next/link";

const NylasDemo: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <>
      <NavBar />
      {!user?.grant_id ? (
        <LoginRequired />
      ) : (
        <div className="relative min-h-[50vh] flex flex-col items-center justify-center bg-blue-500 p-4 tracking-wide">
          <h1 className="text-3xl font-bold text-white">
            Which API would you like to demo today.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg mt-10">
            <button className="bg-yellow-500 font-bold text-white p-4 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 w-full">
              <Link href="/email">Email</Link>
            </button>

            <div className="relative group">
              <button
                disabled
                className="bg-gray-300 text-gray-600 p-4 rounded-md font-bold w-full cursor-not-allowed"
              >
                Calendar
              </button>

              <span className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Coming Soon
              </span>
            </div>

            <div className="relative group">
              <button
                disabled
                className="bg-gray-300 text-gray-600 p-4 rounded-md font-bold w-full cursor-not-allowed"
              >
                Contacts
              </button>
              <span className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Coming Soon
              </span>
            </div>
          </div>
          <Wave />
        </div>
      )}
      <Footer />
    </>
  );
};

export default NylasDemo;
