import React from 'react'
import gun from '../../assets/gun1.jpeg'
function Wishlist() {
  return (
    <div className=" py-6">
    {/* Desktop Responsive Start */}
    <div className="hidden sm:flex flex-col justify-start items-start">
        <div className="pl-4 lg:px-10 2xl:px-10 flex flex-row justify-center items-end space-x-4 mb-2">
            <h1 className="text-4xl font-semibold leading-9 text-gray-800">Favourites</h1>
            <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
        </div>
        <table className="w-full mt-5 whitespace-nowrap">
                <tr className='mb-5 border-[2px] py-10 border-black bg-slate-400 rounded-t-lg'>
                    <th className="text-base  leading-4 py-10  text-black font-bold">YOUR PRODUCT</th>
                    <th className="text-base  leading-4 py-10  text-black font-bold">DESCRIPTION</th>
                    <th className="text-base  leading-4 py-10  text-black font-bold">PRICE</th>
                    <th className="text-base  leading-4 py-10  text-black font-bold">MORE OPTIONS</th>
                </tr>

            <tr className="border-2 border-black   ">
                    <th>
                        <img className="my-10 pl-4 lg:pl-10 2xl:pl-20" src={gun} alt="shoe" />
                    </th>

                    <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                        <p className='font-bold text-center text-2xl '>$90</p>
                    </th>
                    <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                        <button  className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-lg mt-4 px-5 py-2.5 text-center ">
                            Add to cart
                        </button>
                    </th>
                    <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                        <button className="text-white bg-gradient-to-br from-red-300 to-orange-400 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-lg mt-4 px-5 py-2.5 text-center ">
                            <p className='ml-4'>Remove Item</p>
                        </button>
                    </th>
                </tr><tr className="border-2 border-black   ">
                    <th>
                        <img className="my-10 pl-4 lg:pl-10 2xl:pl-20" src="https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png" alt="shoe" />
                    </th>

                    <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                        <p className='font-bold text-center text-2xl '>$90</p>
                    </th>
                    <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                        <button  className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-lg mt-4 px-5 py-2.5 text-center ">
                            Add to cart
                        </button>
                    </th>
                    <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                        <button className="text-white bg-gradient-to-br from-red-300 to-orange-400 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-lg mt-4 px-5 py-2.5 text-center ">
                            <p className='ml-4'>Remove Item</p>
                        </button>
                    </th>
                </tr><tr className="border-2 border-black   ">
                    <th>
                        <img className="my-10 pl-4 lg:pl-10 2xl:pl-20" src="https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png" alt="shoe" />
                    </th>

                    <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                        <p className='font-bold text-center text-2xl '>$90</p>
                    </th>
                    <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                        <button  className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-lg mt-4 px-5 py-2.5 text-center ">
                            Add to cart
                        </button>
                    </th>
                    <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                        <button className="text-white bg-gradient-to-br from-red-300 to-orange-400 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-lg mt-4 px-5 py-2.5 text-center ">
                            <p className='ml-4'>Remove Item</p>
                        </button>
                    </th>
                </tr>

        </table>
    </div>
    {/* Desktop Responsive End */}
    {/* Mobile Responsive Start */}
    <div className=" flex justify-center items-center">
        <div className="sm:hidden flex flex-col justify-start items-start ">
            <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                <p className="text-4xl font-semibold leading-9 text-gray-800">Favourites</p>
                <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
            </div>
            <div className="border-gray-200 border-b pb-10">
                <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                    <div>
                        <img src="https://i.ibb.co/bHgJDpd/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-2.png" alt="shoe" />
                    </div>
                </div>
                <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
                    <div>
                        <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                    </div>
                    <div>
                        <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                    </div>
                </div>
                <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
                    <div>
                        <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                            {" "}
                            View details
                        </a>
                    </div>
                    <div>
                        <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                            <p>Remove Item</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-gray-200 border-b pb-10">
                <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                    <div>
                        <img src="https://i.ibb.co/6y62DnT/daniel-storek-JM-q-KEd1-GMI-unsplash-1-1.png" alt="shoes" />
                    </div>
                </div>
                <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
                    <div>
                        <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                    </div>
                    <div>
                        <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                    </div>
                </div>
                <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
                    <div>
                        <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                            {" "}
                            View details
                        </a>
                    </div>
                    <div>
                        <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                            <p>Remove Item</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-gray-200 border-b pb-10">
                <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                    <div>
                        <img src="https://i.ibb.co/LR5LyDw/charles-deluvio-1-nx1-QR5d-TE-unsplash-1-1.png" alt="glasses" />
                    </div>
                </div>
                <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
                    <div>
                        <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                    </div>
                    <div>
                        <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                    </div>
                </div>
                <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
                    <div>
                        <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                            {" "}
                            View details
                        </a>
                    </div>
                    <div>
                        <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                            <p>Remove Item</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-gray-200 border-b pb-10">
                <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                    <div>
                        <img src="https://i.ibb.co/XzvpLZz/rocknwool-8-Lsy75-Lq-GVc-unsplash-1-4.png" alt="girl" />
                    </div>
                </div>
                <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
                    <div>
                        <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                    </div>
                    <div>
                        <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                    </div>
                </div>
                <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
                    <div>
                        <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                            {" "}
                            View details
                        </a>
                    </div>
                    <div>
                        <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                            <p>Remove Item</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Mobile Responsive End */}
</div>
  )
}

export default Wishlist