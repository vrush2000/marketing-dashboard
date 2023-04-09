import React from 'react'

function Header() {
    const Users = {
        name: 'User',
        status: 'online',
    }
    return (
        <div className='flex justify-end items-center gap-2 p-3 px-12 border-b border-gray-400'>
            <div className='relative'>
                <img src={require('../assets/avatar.png')} className='w-8 h-8 bg-[#bdbcbc] rounded-full' alt='' />
                <div className={`absolute right-0 top-0 ${Users.status === 'online' ? 'bg-green-300' : 'bg-red-400'} rounded-full w-2 h-2`}></div>
            </div>
            <p className='text-white'>Hello, {Users.name}!</p>
        </div>
    )
}

export default Header