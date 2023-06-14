import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaDatabase, FaCartPlus } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts/useCarts";
import UseAdmin from "../../../Hooks/UseAdmin";
import UseInstructor from "../../../Hooks/UseInstuctor";
import { useState } from "react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCarts();
  const [isAdmin] = UseAdmin();
  const [isInstructor] = UseInstructor();
  const [darkMode, setDarkMode] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Dark Mode');

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navOptions = (
    <div className="lg:flex items-center me-10">
      <li className="text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg">
        <Link to="/instuctors">Instructors</Link>
      </li>
      <li className="text-lg">
        <Link to="/classes">Classes</Link>
      </li>

      {isAdmin ? (
        <li className="text-lg">
          <Link to="/dashboard">
            <button className="btn btn-sm">Admin Dashboard</button>
          </Link>
        </li>
      ) : isInstructor ? (
        <li className="text-lg">
          <Link to="/dashboard">
            <button className="btn btn-sm">Instructor Dashboard</button>
          </Link>
        </li>
      ) : (
        <>
          <li className="text-lg">
            <Link to="/dashboard/MySelectedClass">
              <button className="btn btn-sm">
                <FaCartPlus />
                <div className="badge badge-outline">+{cart?.length || 0}</div>
              </button>
            </Link>
          </li>
        </>
      )}

      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="text-white bg-red-500 btn btn-sm"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <li className="text-white bg-red-500 btn btn-sm">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </div>
  );
  return (
    <div>
      <div className={`navbar bg-base-100 h-12 text-black ${darkMode ? 'dark' : ''}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case footer-title text-xl"
          >
            FLAVORCAMP
          </Link>
        </div>

        <div className="navbar-end py-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>

          <img
            className="rounded-full mr-20"
            src={user?.photoURL}
            alt="Profile Picture"
            style={{ width: "60px", height: "60px" }}
          />

<button className="btn btn-sm" onClick={() => {
  setDarkMode(!darkMode);
  setButtonLabel(currentLabel => currentLabel === 'Dark Mode' ? 'Light Mode' : 'Dark Mode');
}}>
  {buttonLabel}
</button>

        </div>
      </div>
    </div>
  );
};

export default Header;
