import React, {useState} from 'react'

// Importing Components
import HeaderItem from './HeaderItem.jsx'

// Import logos
import logoWhite from './../assets/images/DisneyLogoWhite.png'

// Import Icons
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'
import {
    HiPlus,
    HiDotsVertical
} from 'react-icons/hi'
import { FaUser } from "react-icons/fa"

function Header() {

    // Constant state for dropdown menu
    const [toggle, setToggle] = useState(false);

    // Creating a constant menu list for icons
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCHLIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5' >
            <div className='flex items-center gap-15' >
                <img src={logoWhite} className='w-20 md:w-[115px] lg:w-[150px] object-cover' alt="" />

                {/* Desktop Menu */}
                <div className='hidden md:flex gap-10'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className='md:hidden flex gap-8 pt-4'>

                    {/* Show 3 icons */}
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}

                    {/* More icon */}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />

                        {/* dropdown menu */}
                        {toggle ? 
                            <div className='absolute mt-3 bg-[#12121299] pt-5 pb-1 pl-6 pr-5 border border-gray-700 rounded-lg'>
                                {menu.map((item, index) => index > 2 && (
                                    <HeaderItem name={item.name} Icon={item.icon} />
                                ))}
                            </div>
                        : null}
                    </div>
                </div>

            </div>
            <FaUser className='text-white w-5 h-5 cursor-pointer' />
        </div>
    );
}

export default Header;