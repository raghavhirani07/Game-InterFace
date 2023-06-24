import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../Api/Axiosapi.js'
import useAuth from '../../Auth/useAuth.js'

function AllGame() {
  const { auth } = useAuth();
  const email = auth.email
  const [gamedetail,setgamedetail]= useState([]);
  useEffect(() => {
    try {
      const result = axios.post("/game/usergame",
        {email:email},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      ).then((response) => {
          const ids =  response.data[0].game_full_detail
          console.log(ids);
          setgamedetail(ids)

      })
      console.log(gamedetail);
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <section>
      <header className="bg-slate-300 rounded-lg mb-2 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">

        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-slate-900">Your Games </h2>
          <Link
            to="new"
            className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
          >
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className="mr-2"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            Add Game
          </Link>
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



      <ul className="bg-slate-100 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 flex flex-row  flex-wrap  justify-self-start  gap-4 text-sm leading-6">

        <li x-for="project in projects " className='min-w-[16rem] min-h-[16rem] max-w-[20rem] '  >
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <Link to="#!">
              <img
                className="rounded-t-lg max-w-max "
                src="https://dummyimage.com/300X200"
                alt=""
              />
            </Link>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Game Name
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Game description like type etc ..
              </p>
            </div>
          </div>

        </li>
        <li x-for="project in projects " className='min-w-[16rem] min-h-[16rem] max-w-[20rem]'>
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <Link to="#!">
              <img
                className="rounded-t-lg max-w-[100%]"
                src="https://dummyimage.com/300X200"
                alt=""
              />
            </Link>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Game Name
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Game description like type etc ..
              </p>
            </div>
          </div>

        </li>
        <li x-for="project in projects" className='min-w-[16rem] min-h-[16rem] max-w-[20rem]'>
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <Link to="#!">
              <img
                className="rounded-t-lg max-w-[100%]"
                src="https://dummyimage.com/300X200"
                alt=""
              />
            </Link>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Game Name
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Game description like type etc ..
              </p>
            </div>
          </div>

        </li>
        <li x-for="project in projects " className='min-w-[16rem] min-h-[16rem] max-w-[20rem]'>
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <Link to="#!">
              <img
                className="rounded-t-lg max-w-[100%]"
                src="https://dummyimage.com/300X200"
                alt=""
              />
            </Link>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Game Name
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Game description like type etc ..
              </p>
            </div>
          </div>

        </li>

        {/* For new Project add  */}

        <li className="flex min-w-[16rem] min-h-[16rem ] bg-white">
          <Link
            to="new"
            className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md  border-dashed border-slate-300 border-4 text-sm leading-6 text-slate-900 font-medium py-3"
          >
            <svg
              className="group-hover:text-blue-500 mb-1 text-slate-400"
              width={20}
              height={20}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New project
          </Link>
        </li>



      </ul>
    </section>

  )
}

export default AllGame