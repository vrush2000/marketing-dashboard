import React from 'react'
import { RiArrowUpLine } from 'react-icons/ri'

function Activity() {
    return (

        <div className='w-2/5'>
            <div className="flex flex-col rounded-xl  h-[615px] w-full  bg-[#1C243F] p-5 gap-4 shadow-xl">
                <div >
                    <p className='text-xl font-semibold text-white'>Activity Overview</p>
                    <p className='text-md font-light text-white flex items-center mt-2'><span><RiArrowUpLine className='fill-green-400 mr-2' /></span> 16% this month</p>
                </div>

                <div className='p-2' >
                    <div className="border-l-2 border-[#2E4B85]">
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex py-2 text-white rounded mb-5 md:mb-10 flex-col space-y-5">
                            <div className="w-6 h-6  border-2 border-orange-400 bg-gray-800  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2"></div>
                            <div className="flex flex-col">
                                <h3 className="text-base font-normal -mt-5 capitalize">nick mark<span
                                    className="font-light mx-1">mentioned</span>sara smith
                                    <span className="font-light mx-1">in new post</span> </h3>
                                <small className="text-gray-400 font-normal text-xs uppercase">11 JUL 8:10 PM</small>
                            </div>
                        </div>

                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex py-2 text-white rounded mb-5 md:mb-10 flex-col space-y-5">
                            <div className="w-6 h-6  border-2 border-orange-400 bg-gray-800  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2"></div>
                            <div className="flex flex-col">
                                <h3 className="text-base font-light -mt-5 capitalize">the<span
                                    className="font-normal mx-1">post name</span>was removed by
                                    <span className="font-normal-1">nick mark</span> </h3>
                                <small className="text-gray-400 font-normal text-xs uppercase">11 JUL 9:10 PM</small>
                            </div>
                        </div>

                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex py-2 text-white rounded mb-5 md:mb-10 flex-col space-y-5">
                            <div className="w-6 h-6  border-2 border-orange-400 bg-gray-800  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2"></div>
                            <div className="flex flex-col">
                                <h3 className="text-base font-normal -mt-5 capitalize">patrick sulivan<span
                                    className="font-light mx-1">published a new post</span></h3>
                                <small className="text-gray-400 font-normal text-xs uppercase">12 JUL 10:10 PM</small>
                            </div>
                        </div>

                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex py-2 text-white rounded mb-5 md:mb-10 flex-col space-y-5">
                            <div className="w-6 h-6  border-2 border-orange-400 bg-gray-800  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2"></div>
                            <div className="flex flex-col">
                                <>
                                    <h3 className="text-base font-normal -mt-5 capitalize">240+ users <span
                                        className="font-light mx-1">have subscribed to Newsletter #1</span></h3>
                                    <small className="text-gray-400 font-normal text-xs uppercase">18 JUL 19:10 PM</small>
                                </>
                            </div>
                        </div>

                        <div className="hidden md:block transform transition cursor-pointer hover:-translate-y-2 ml-10 relative py-2 text-white rounded mb-5 md:mb-10 flex flex-col space-y-5">
                            <div className="w-6 h-6  border-2 border-orange-400 bg-gray-800  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2"></div>
                            <div className="flex flex-col">
                                <>
                                    <h3 className="text-base font-light -mt-5 capitalize">the<span
                                        className="font-normal mx-1">post name</span>was suspanded by
                                        <span className="font-normal-1">nick mark</span> </h3>
                                    <small className="text-gray-400 font-normal text-xs uppercase">11 JUL 9:10 PM</small>
                                </>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity