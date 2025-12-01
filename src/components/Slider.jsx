import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const screenWidth = window.innerWidth;

function Slider() {

    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef();

    const getTrendingMovies = () => {
        GlobalApi.getTrendingMovies()
        .then(resp => {
            console.log("Trending movies: ", resp.data.results);
            setMovieList(resp.data.results);
        })
        .catch(err => {
            console.error("Error fetching trending movies: ", err);
        })
    }

    useEffect(() => {
        getTrendingMovies();
    }, []) // Empty dependency array ensures this runs once on mount

    // Slider Functionality
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 185;
    }
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 185;
    }

  return (
    <div>

        {/* Slider Arrows */}
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[50px] absolute mx-20 mt-[155px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[50px] absolute mx-30 mt-[155px] right-0 cursor-pointer' onClick={() => sliderRight(elementRef.current)} />
        </div>

        {/* Trending Movies Image Slider */}
        <div className='flex overflow-x-auto no-scrollbar w-full px-16 py-4 scroll-smooth' ref={elementRef}>
            {movieList.map((item, index) => (
                <img src={IMAGE_BASE_URL + item.backdrop_path}
                className='shrink-0 w-full md:h-[310px] object-cover object-top mr-5 last:mr-0 rounded-md hover:border-4 border-gray-400 transition-all duration-100 ease-in' />
            ))}
        </div>
    </div>
  )
}

export default Slider