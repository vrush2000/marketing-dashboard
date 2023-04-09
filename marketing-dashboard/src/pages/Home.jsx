
import React from 'react'
import Activity from '../components/Activity';
import CardTotal from '../components/CardTotal';
import EarningsCard from '../components/EarningsCard';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import ProfitCard from '../components/ProfitCard';
import SideBar from '../components/SideBar';
import TotalProfitCard from '../components/TotalProfitCard';

function Home() {
    return (
        <div className="flex ">
            <SideBar />
            <div className="h-screen flex-1 ml-20 lg:ml-64 ">
                <Header />
                <div className='p-8' >
                    <h1 className="text-3xl font-semibold text-white">Marketing Dashboard</h1>
                    <div className="text-md py-2 flex items-center flex-wrap">
                        <ul className="flex items-center">
                            <li className="inline-flex items-center">
                                <p className="text-gray-400">
                                    Home
                                </p>
                                <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
                            </li>
                            <li className="inline-flex items-center">
                                <p className="text-[#0BB885]">
                                    Dashboard
                                </p>
                            </li>
                        </ul>
                    </div>
                    <CardTotal />
                    <div className='flex justify-between gap-4 mt-5'>
                        <div className='md:w-3/5 w-4/5'>
                            <div className=' flex items-start gap-2'>
                                <EarningsCard />
                                <OrderCard />
                                <ProfitCard />
                            </div>
                            <TotalProfitCard />
                        </div>
                        <Activity />
                    </div>
                </div>
                <footer className="p-8 -mt-10 text-sm font-normal text-gray-400">
                    Privacy Policy <span className='mx-5'>Term of Use</span>
                </footer>
            </div>
        </div>
    );
}

export default Home