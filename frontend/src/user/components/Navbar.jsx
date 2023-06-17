import React from 'react'
import logo from '../../assets/wolfblack.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="z-50 w-full  bg-slate-50 border-b-[3px] border-[#b5e4eed2] dark:bg-gray-800 dark:border-gray-700 ">
      <div className="px-8 py-4 lg:px-5 lg:pl-3">
        <div className="flex items-center max-w-[97%] mx-auto justify-between">

          {/* ---------------------------------------------------------------------------------------------- */
            /*                                             Logo                                            */
            /* ---------------------------------------------------------------------------------------------- */}

          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>

            {/*  -------------------------------------------- logo -------------------------------------------- */}

            <img
              src={logo}
              className="h-8 mr-5"
              alt="FlowBite Logo"
            />
            <NavLink
              to="/"
              className="cursor-pointer"
            >
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Gaming Interface
              </span>
            </NavLink>

          </div>

          {/* ---------------------------------------------------------------------------------------------- */
            /*                                             Profile                                            */
            /* ---------------------------------------------------------------------------------------------- */}


          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar