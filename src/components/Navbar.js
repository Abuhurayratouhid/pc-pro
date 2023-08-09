import { useState } from "react";

// import { useAppDispatch, useAppSelector } from "../redux/hook";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";
// import { setUser } from "../redux/feature/user/userSlice";
// import { toast } from "react-toastify";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = null;

  //   const { user } = useAppSelector((state) => state.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   const dispatch = useAppDispatch();

  //   const handleLogout = () => {
  //     console.log("log out");
  //     signOut(auth).then(() => {
  //       // Sign-out successful.
  //       dispatch(setUser(null));
  //       toast.success("Successfully Logout");
  //     });
  //   };
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link className="text-2xl font-bold " href="/">
              PC-pro
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex space-x-4  uppercase">
              <Link href="/">Home</Link>
              <Link href="/">Products</Link>
              <Link href="/">pc builder</Link>
              <Link href="/wishList">wishList</Link>
              {user?.email ? (
                <p onClick={handleLogout} className="cursor-pointer">
                  Logout
                </p>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400   hover:border-white"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3  text-center uppercase space-y-1 sm:px-3 flex flex-col">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/books" onClick={toggleMenu}>
              Books
            </Link>
            <Link href="/addBook" onClick={toggleMenu}>
              Add book
            </Link>
            <Link href="/wishList" onClick={toggleMenu}>
              wishList
            </Link>
            {user?.email ? (
              <p onClick={handleLogout} className="cursor-pointer">
                Logout
              </p>
            ) : (
              <Link href="/login" onClick={toggleMenu}>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
