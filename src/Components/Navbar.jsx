import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user, loading } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);


  const handleLogout = () => {
    logOut().then(()=>{
      toast.success("Logout Successful")
      // testing
      //setLoading(false)
    });
  };

  useEffect(() => {
    if (user && user.photoURL) {
      setPhoto(user.photoURL);
    } else {
      setPhoto("https://i.ibb.co/S6FCDcL/image.png");
    }
  }, [loading]);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        
        {/* hamburger menu */}

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to={"/update"}>Update Profile</Link>
                </li>
                <li>
                  <Link to={"/user"}>User Profile</Link>
                </li>
              </>
            )}
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* hamburger menu */}

        {/* logo */}

        <Link to={"/"} className="text-xl text-blue-500 font-bold">
          Realisto
        </Link>

        {/* logo */}
      </div>

      {/* Navbar Middle */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2 rounded-lg border-blue-400 text-blue-400 hover:bg-blue-700 hover:text-white"
                  : "hover:bg-blue-700 hover:text-white"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-2 rounded-lg border-blue-400 text-blue-400 hover:bg-blue-700 hover:text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }
                  to={"/update"}
                >
                  Update Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-2 rounded-lg border-blue-400 text-blue-400 hover:bg-blue-700 hover:text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }
                  to={"/user"}
                >
                  User Profile
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2 rounded-lg border-blue-400 text-blue-400 hover:bg-blue-700 hover:text-white"
                  : "hover:bg-blue-700 hover:text-white"
              }
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar Middle */}

      {/* Navbar End */}

      <div className="navbar-end gap-4">
        {user && (
          <div
            className="tooltip tooltip-bottom avatar btn-circle"
            data-tip={user.displayName}
          >
            <div className="w-10 rounded-full">
              <img
                alt="User profile"
                src={photo}
              />
            </div>
          </div>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-blue-500 hover:bg-blue-700 text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/login"}
            className="btn bg-blue-500 hover:bg-blue-700 text-white"
          >
            Login
          </Link>
        )}
      </div>

      {/* Navbar End */}
    </div>
  );
};

export default Navbar;
