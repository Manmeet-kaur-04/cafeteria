import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a token in localStorage to determine if the user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Update the state
    setIsLoggedIn(false);

    // Redirect to login page
    navigate("/");
  };

  return (
    <header className="w-screen p-0 shadow sticky top-0 bg-white">
      <nav className="bg-slate-200 border-gray-200 px-4 lg:px-6 py-2.5 w-screen">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://jcboseust.ac.in/assets/uploads/media/0f94ecef8a92dbe26238b9f171725e7f.jpg"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2"></div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-black"
                    } border-b border-gray-100 hover:bg-white lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Show Logout button only if the user is logged in */}
              {isLoggedIn && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-2 pr-4 pl-3 border-none text-black hover:text-orange-700 bg-slate-200 lg:p-0"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
