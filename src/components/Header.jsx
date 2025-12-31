import React, { useState, useRef, useEffect } from 'react'
import { FaUser } from "react-icons/fa"

function Header({ setSearchQuery }) {

  const [searchText, setSearchText] = useState('');
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef(null);

  // Close dropdown menu on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (toggleRef.current && !toggleRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setSearchQuery(value);
  };

  return (
    <div className='flex items-center justify-between gap-6 md:gap-10 p-5 md:px-15 md:py-6'>
      
      {/* Logo / Title */}
      <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide'>
        MoviesHub
      </h2>

      {/* Search + User */}
      <div className='flex items-center gap-6'>
        <input 
          type="text"
          placeholder='Search Movies...'
          value={searchText}
          onChange={handleSearchChange}
          className='bg-[#1a1d29] text-white px-4 py-2 rounded-md outline-none w-[200px] md:w-[400px]'
        />

        <FaUser className='text-white w-5 h-5 cursor-pointer' />
      </div>

    </div>
  );
}

export default Header;
