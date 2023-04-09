import React from 'react'

function SideBar() {
    const Menus = [
        { title: "Home", src: "home" },
        { title: "Report", src: "reports" },
        { title: "Notifications", src: "notifications" },
        { title: "Settings ", src: "settings" },
        { title: "Log out", src: "logout" },
    ];

    return (
        <div className="fixed flex h-[calc(100vh+200px)] ">
            <div className='lg:w-64 w-20 bg-[#171E37] p-5 ' >
                <div className="flex gap-x-4 items-center">
                    <img src={require('../assets/logo.png')} alt='logo' />
                    <h1 className='text-white font-medium text-xl hidden lg:block' >
                        Inter-act
                    </h1>
                </div>
                <ul className="pt-12">
                    {Menus.map((Menu, index) => (
                        <li key={index} className='flex rounded-md p-2 py-4  text-gray-300 text-md items-center gap-x-4 hover:bg-[#1F2849]'>
                            <img src={require(`../assets/${Menu.src}.png`)} alt='' />
                            {Menu.title === 'Notifications' ? <span className='origin-left hidden lg:block'>
                                {Menu.title} <span className='ml-10 rounded-md bg-green-200 px-2 font-semibold text-xs text-black'>1</span>
                            </span>
                                :
                                <span className='origin-left duration-200 hidden lg:block'>
                                    {Menu.title}
                                </span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideBar