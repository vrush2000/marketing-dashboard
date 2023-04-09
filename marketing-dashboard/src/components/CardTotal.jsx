import React from 'react'

function CardTotal() {
    const Totals = [
        { title: 'Total Cost', total: '$31,868', img: 'elips' },
        { title: 'Total Sales', total: '$66,053', img: 'trophy' },
        { title: 'This Week', total: '$35,000,00', img: 'calendar' },
        { title: 'Revenue', total: '$63,00K', img: 'piechart' },
        { title: '$1250', total: 'Last payment', img: 'wallet' },
    ]

    return (
        <div className='flex items-center justify-between gap-4 mt-5'>
            {Totals.map((e) => {
                return (
                    <div key={e.title} className={`flex items-center justify-around rounded-xl w-full h-24 ${e.title === 'Total Cost' ? 'bg-[#0BB885]' : 'bg-[#1C243F]'} p-4 md:p-6 sm:p-4 shadow-xl`}>
                        <img src={require(`../assets/${e.img}.png`)} className='w-10 h-10 md:w-14 md:h-14 sm:w-12 sm:h-12' alt='' />
                        <div >
                            <p className='md:text-base text-xs md:font-semibold font-semibold text-white'>{e.title}</p>
                            <p className={`md:text-base text-xs md:font-semibold font-normal  ${e.title === 'Total Cost' ? 'text-white' : 'text-gray-500'}`}>{e.total}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardTotal