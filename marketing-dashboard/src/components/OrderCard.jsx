import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
    optionsBar,
    dataBar,
} from '../data/chart'

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function OrderCard() {
  return (
    
    <div className="flex flex-col rounded-xl w-1/5 h-52 bg-[#1C243F] p-5 gap-4 shadow-xl">
    <div>
        <p className='text-md font-semibold text-white'>Orders</p>
        <p className='text-2xl font-bold text-orange-400'>189k</p>
    </div>
    <div className='flex flex-col h-full justify-center items-center'>
        <div className='w-full h-full mt-5'>
            <Bar options={optionsBar} data={dataBar} />
        </div>
    </div>
</div>
  )
}

export default OrderCard