import { useAuth } from "@/context/authContext";
import { handleUserLogout } from "@/services/userLogoutServices";
import { useRouter } from "next/router";

interface UserMenuProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  userInitial: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ setShowMenu, userInitial }) => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await handleUserLogout()
    if (response?.ok){
      router.push("/");
    }
    else {
      console.error("Unable to logout user")
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-30 z-40"
        onClick={closeMenu}
      ></div>

      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-end p-4">
          <button
            className="text-gray-500 hover:text-gray-700 text-xl"
            onClick={closeMenu}
          >
            &#10005;
          </button>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold text-green-500 bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
            {userInitial}
          </div>
        </div>

        <div className="text-center mt-4">
          <span className="font-semibold text-gray-800 truncate">
            {user?.email}
          </span>
        </div>

        <hr className="my-4" />

        <div className="px-6">
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.nylas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://developer.nylas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Developer Docs
              </a>
            </li>
            <li>
              <a
                href="https://support.nylas.com/hc/en-us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Contact Support
              </a>
            </li>
            <li>
              <button
                className="w-full text-left text-gray-700 hover:text-red-500 transition-colors"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
