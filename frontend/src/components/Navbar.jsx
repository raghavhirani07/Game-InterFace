import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import LogOut from "../assets/food-menu-3-svgrepo-com.svg";
import logo from "../assets/wolf.svg"


const Navbar = () => {

  const [ loginModal, setLoginmodal ] = useState(false);
  const logout = () => {
    console.log("Hello");
  }
  return (
    <header className="text-gray-900  flex flex-row flex-nowrap  justify-center  body-font ">
      <div className="container   flex flex-wrap justify-between mt-2 max-md:flex-col max-md:justify-start max-w-[90%] rounded-lg  mb-4 min-h-[10vh] bg-gradient-to-r from-[#00C7F2] from-8.9%   to-[#C200F2] to-85.89%  flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex ml-6  title-font font-medium items-center text-gray-900  md:mb-0"
        >
          <img src={logo} alt="Svg" className="h-10" />

          <span className="ml-3 text-xl font-bold text-white hover:no-underline no-underline">
            Game InterFace
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className="mr-5 text-white text-xl font-semibold hover:text-gray-900 hover:no-underline"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="mr-5 text-white text-xl font-semibold hover:text-gray-900 hover:no-underline"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="mr-5 hover:text-gray-900 text-white font-semibold text-xl hover:no-underline"
          >
            About us
          </Link>
        </nav>

        {/* User  */}

        {/* <div>
            <Link
              to="/user"
              className="mr-5 inline-flex items-center  bg-black text-white font-semibold text-lg hover:no-underline py-1 px-3 focus:outline-none  rounded p-2 md:mt-0"
            >
              Users
            </Link>
            <button
              className="inline-flex items-center bg-black border-0 text-white font-semibold text-lg mr-4 py-1 px-3 focus:outline-none  rounded    p-2 md:mt-0"
              onClick={logout}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div> */}

        {/* Admin */}
        {/* <>
            <Link
              to="/admin"
              className="mr-5 inline-flex items-center  bg-black text-white font-semibold text-lg hover:no-underline py-1 px-3 focus:outline-none  rounded p-2 md:mt-0"
            >
              Admin
            </Link>
            <button
              className="inline-flex items-center bg-black border-0 text-white font-semibold text-lg mr-4 py-1 px-3 focus:outline-none  rounded    p-2 md:mt-0"
              onClick={logout}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </> */}
        <div>
          <Link
            className="inline-flex items-center ml-2  bg-black border-0 text-white font-semibold text-lg mr-4 py-2 px-4 focus:outline-none  rounded    p-2 md:mt-0"
            to="/signup"
          >
            Signup
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>

          <button
            className="inline-flex items-center ml-2  bg-black border-0 text-white font-semibold text-lg mr-4 py-2 px-4 focus:outline-none  rounded    p-2 md:mt-0"
            onClick={() => setLoginmodal(true)}
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        {loginModal ? <Modal setLoginmodal={setLoginmodal} /> : ""}

      </div>
    </header>
  );
};

export default Navbar;
