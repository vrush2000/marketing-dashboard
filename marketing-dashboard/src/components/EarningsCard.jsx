import React, { useState } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { Doughnut } from "react-chartjs-2";
import { optionsDoughnut } from '../data/chart'
import { RiArrowDownSLine } from 'react-icons/ri'

function EarningsCard() {

    const [dataChart1, setDataChart1] = useState([251, 109]);
    const [dataChart2, setDataChart2] = useState([176, 184]);
    const [defaultSelectText, setDefaultSelectText] = useState('This Week')
    const [showOptionList, setShowOptionList] = useState(false)

    const dataDoughnut = {
        labels: ['Total Sales', 'Total Order'],
        datasets: [
            {
                data: dataChart1,
                backgroundColor: ["#0BB885", "#212a48"],
                borderColor: ["#1C243F"],
                borderRadius: 25,
            },
            {
                data: dataChart2,
                backgroundColor: ["#FF814A", "#212a48"],
                borderColor: ["#1C243F"],
                borderRadius: 25,
            }
        ]
    };

    const options = [
        { name: 'Last Week' },
        { name: '2 Weeks Ago' },
        { name: 'Last Month' }
    ]

    const handleListDisplay = (e) => {
        e.preventDefault()
        setShowOptionList(true)
    };

    const handleOptionClick = e => {
        if (e.target.getAttribute("data-name") === 'Last Week') {
            setDataChart1([251, 109])
            setDataChart2([176, 184])
        } else if (e.target.getAttribute("data-name") === '2 Weeks Ago') {
            setDataChart1([165, 195])
            setDataChart2([147, 213])
        } else if (e.target.getAttribute("data-name") === 'Last Month') {
            setDataChart1([300, 60])
            setDataChart2([200, 160])
        }
        setDefaultSelectText(e.target.getAttribute("data-name"))
        setShowOptionList(false)
    };

    return (
        <div className="flex flex-col rounded-xl w-3/5 h-52 bg-[#1C243F] p-5 shadow-xl">
            <div className='flex justify-between items-center'>
                <p className='text-md font-semibold text-white'>Earnings</p>

                <div className="text-[#5C6CA5] inline-block relative w-32 text-center text-sm">
                    <button type="button" className='flex items-center gap-2'
                        onClick={handleListDisplay}
                    >
                        {defaultSelectText} <span><RiArrowDownSLine /></span>
                    </button>
                    {showOptionList && (
                        <ul className="absolute w-32 bg-[#2E4B85] rounded-md">
                            {
                                options.map(option => (
                                    <li key={option.name} className="text-left text-white text-sm bg-[#2E4B85] rounded-md hover:bg-[#3a5995] p-1"
                                        onClick={handleOptionClick}
                                        data-name={option.name}
                                    >
                                        {option.name}
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>

            </div>
            <div className='flex items-center justify-center gap-2 lg:gap-10'>
                <div className='w-44 h-44 p-5 mt-2 md:mt-0 -m-2'>
                    <Doughnut data={dataDoughnut} options={optionsDoughnut} />
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <GoPrimitiveDot className='fill-green-400' />
                        <div>
                            <p className='text-sm font-normal text-white'>Total Sales</p>
                            <p className='text-sm font-semibold text-gray-500'>{dataChart1[0]}K</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-5'>
                        <GoPrimitiveDot className='fill-orange-400' />
                        <div>
                            <p className='text-sm font-normal text-white'>Total Orders</p>
                            <p className='text-sm font-semibold text-gray-500'>{dataChart2[0]}K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EarningsCard