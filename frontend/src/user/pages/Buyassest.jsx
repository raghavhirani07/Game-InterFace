import React, { useEffect, useState } from 'react'
import useAuth from '../../Auth/useAuth';
import axios from '../../Api/Axiosapi.js';

function Buyassest() {
  const [ saleproduct, setsaleproduct ] = useState([]);
  const { auth } = useAuth()
  const email = auth.email
  const [ error, seterror ] = useState(false);
  const [ errormessage, seterrormessage ] = useState("")
  useEffect(() => {
    try {
      const result = axios.post("/game/showstore",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      ).then((response) => {
        const ids = response.data
        console.log(ids);
        setsaleproduct(ids)
      })
      console.log(saleproduct)
      seterror(false)

    } catch (err) {
      seterror(true)
      if (!err?.response) {
        seterrormessage("Server Not response")
      } else if (err.response?.status === 409) {
        seterrormessage(err.response?.data.errormessage)
      }
    }
  }, [])

  const component = saleproduct.map((res, i) => {
    // console.log(res._id);
    return (
      <li x-for="project in projects " className='min-w-[16rem] min-h-[16rem] max-w-[20rem] ' key={i} >
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <center> <img
            className="rounded-t-lg max-w-max pt-2 mx-2 "
            src="https://dummyimage.com/300X200"
            alt=""
          />
          </center>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {res.game_id.game_name}
            </h5>
            <div className='mt-4'>
              <span className=" text-base text-black mr-3 ">
                Game Category :
              </span>
              <span className='text-sm text-neutral-500 '>
                {res.game_id.game_category}
              </span>
            </div>
            <div className='mt-4'>
              <span className=" text-base text-black mr-3 ">
                Assest Name :
              </span>
              <span className='text-sm text-neutral-500 '>
                {res.assest_id.assest_name}
              </span>
            </div>
            <div className='mt-4'>
              <span className=" text-base text-black mr-3 ">
                Assest Type :
              </span>
              <span className='text-sm text-neutral-500 '>
                {res.assest_id.assest_type}
              </span>
            </div>
            <div className='mt-4'>
              <span className=" text-base text-black mr-3 ">
                Saler :
              </span>
              <span className='text-sm text-neutral-500 '>
                {res.user_id.name}
              </span>
            </div>
            <center>
              <button

                className="hover:bg-blue-400 group mt-4 flex items-center rounded-md bg-blue-500 text-white  font-medium px-6 py-2 text-lg shadow-sm"
                onClick={() => buyproduct(email, res._id)}
              >
                Buy
              </button>
            </center>
          </div>
        </div>

      </li>
    )
  })

  const buyproduct = (email, sale_id) => {
    try {
      axios.post("/game/buyproduct",
        { email, sale_id },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      ).then((res) => {
        console.log(res);
        seterror(false)
      })
    } catch (err) {
      seterror(true)
      if (!err?.response) {
        seterrormessage("Server Not response")
      } else if (err.response?.status === 409) {
        seterrormessage(err.response?.data.errormessage)
      }
    }
  }



  return (

    <div className=" flex flex-col ">

      {/* Header */}
      <header className="bg-red-200 rounded-lg mb-2 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">

        <div className="flex items-center justify-center">
          <h2 className="font-semibold text-center text-4xl text-slate-900">Cart  </h2>

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

      {error ? <h1 className='bg-red-300 text-xl '>{errormessage}  </h1> : ""}

      {/* Bottom part */}
      <ul className="bg-slate-100 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 flex flex-row  flex-wrap  justify-self-start  gap-4 text-sm leading-6">

        {component}



      </ul>

    </div>
  )
}

export default Buyassest