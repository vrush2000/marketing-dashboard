import React from 'react'
import { Bar } from "react-chartjs-2";
import { dataBarTotal, optionsBarTotal } from '../data/chart'
import { GoPrimitiveDot } from 'react-icons/go'

function TotalProfitCard() {
    return (
        <div className='flex justify-between rounded-xl w-full mt-5 h-96 bg-[#1C243F] gap-4 shadow-xl'>
            <div className='w-4/6 p-5'>
                <div className='flex items-center justify-between'>
                    <p className='text-sm font-bold text-white'>Total Profit</p>
                    <div className='flex items-center justify-end gap-4'>
                        <div className='flex items-center gap-1'>
                            <GoPrimitiveDot className='fill-green-400' />
                            <div>
                                <p className='text-sm font-normal text-gray-500'>Earning</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <GoPrimitiveDot className='fill-orange-400' />
                            <span>
                                <p className='text-sm font-normal text-gray-500'>Expense</p>
                            </span>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                    <div className='w-full h-58'>
                        <Bar options={optionsBarTotal} data={dataBarTotal} />
                    </div>
                </div>
            </div>
            <div className='w-2/6 flex flex-col gap-4 border-l-2 border-[#2E4B85] p-5 ml-2'>
                <div className=' flex items-center justify-center'>
                    <select className='border-2 p-1 px-2 rounded-md border-[#0BB885]  text-[#0BB885] bg-[#1C243F]'>
                        <option value="lastWeek" className=' text-[#0BB885] text-base shadow rounded-md w-32 hover:bg-[#3a5995] p-1 px-2'>2023</option>
                        <option value="weeksAgo" className=' text-[#0BB885] text-base shadow rounded-md w-32 hover:bg-[#3a5995] p-1 px-2'>2022</option>
                        <option value="lastMont" className=' text-[#0BB885] text-base shadow rounded-md w-32 hover:bg-[#3a5995] p-1 px-2'>2021</option>
                    </select>
                </div>
                <div className='mt-10'>
                    <h1 className='lg:text-5xl md:text-2xl text-4xl text-center text-white font-bold'>$842.98</h1>
                    <p className='lg:text-[12px] sm:text-[9px] text-[8px] mt-4 text-center font-semibold text-gray-500'>Latest Month Balance $426.20k</p>
                    <img src={require('../assets/wave.png')} alt='wave' className='mt-8 mx-auto' />
                    <div className='flex justify-center mt-8'>
                        <button className='bg-[#0BB885] rounded-md text-sm sm:text-base p-1 mt-4 text-white w-24 mx-auto'>View Report</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalProfitCard