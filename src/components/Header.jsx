import React from 'react'

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
            <div className='flex items-center gap-10' >
                <img src={logoWhite} className='w-20 md:w-[115px] lg:w-[150px] object-cover' alt="" />

                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon} />
                ))}
            </div>
            <FaUser className='text-white w-6 h-6 cursor-pointer' />
        </div>
    );
}

export default Header;