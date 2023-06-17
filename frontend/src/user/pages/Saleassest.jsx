import React from 'react'
import {Link} from 'react-router-dom'
import gameimage from '../../assets/game.jpeg'

function Saleassest() {
  return (
    <div className=" flex flex-col ">

      {/* Header */}

      <header className="bg-slate-300 rounded-lg mb-2 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">

        <div className="flex items-center justify-center">
          <h2 className="font-semibold text-center text-4xl text-slate-900">Sale  </h2>

        </div>

        <form className="group relative">
          <svg
            width={20}
            height={20}
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects..."
          />
        </form>
      </header>

      {/* Bottom part */}
      <div className=" max-w-2xl px-4 py-6 sm:px-6 bg-slate-200 sm:py-7 border-2  border-r-2 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Your Assest
        </h2>
        <div className="mt-6 flex flex-row gap-4 flex-wrap sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          <div className="single-product flex flex-col border-2  rounded-md border-slate-500  bg-gray-100 gap-3 shadow-md hover:shadow-xl  duration-300 px-6 py-4  min-w-[20rem] max-w-[20rem]">
            <div className="flex justify-center">
              <img
                className="w-72 h-48 rounded-lg object-contain hover:scale-110 duration-500"
                src={gameimage}
                alt='Image coming soon ..'
              />
            </div>
            <Link
              to=''
              state=''
              className="hover:text-rose-500 duration-300 flex justify-between items-center"
            >
              <h2 className="text-stone-950 font-semibold text-xl capitalize">
                game title
              </h2>
            </Link>
            <p className="text-sm text-gray-600">
              Brand: <span className="font-semibold capitalize">Free fire</span>
            </p>
            <p className="text-sm text-gray-600">
              Price:<input
                  type="number"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter the Price"
                />
            </p>
            <div className="flex justify-between items-center">
              <Link
                to=''
                state=''
                className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
              >
                <button className="text-sky-400 p-3 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
                  More Info
                </button>
              </Link>
              <button
                onClick={() => console.log("ksk")}
                className="bg-sky-400 text-sky-50 p-3 hover:bg-sky-50 hover:text-sky-400 duration-300 border border-sky-400  rounded-md"
              >
                Sale Product
              </button>
            </div>
          </div>



          {/* More products... */}
        </div>
      </div>

    </div>

  )
}

export default Saleassest