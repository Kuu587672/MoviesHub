import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import Loader from './Loader'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"


function Slider() {

    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    // show loading screen while fetching data
    const getTrendingMovies = async () => {
        try {
            setLoading(true);
            const resp = await GlobalApi.getTrendingMovies();
            setMovieList(resp.data.results);
        } catch (err) {
            console.error("Error fetching trending movies:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTrendingMovies();
    }, []) // Empty dependency array ensures this runs once on mount

    // compute the scroll distance based on the visible width of the container
    // subtract its horizontal paddings and a samll peek value so next page is visible
    const computeScrollDistance = (el) => {
        if (!el) return 600;
        const visibleWidth = el.clientWidth;

        // get computed paddings and gap (safe parsing)
        const style = getComputedStyle(el);
        const padLeft = parseFloat(style.paddingLeft) || 0;
        const padRight = parseFloat(style.paddingRight) || 0;
        const gap = parseFloat(style.gap || style.columnGap) || 0;

        // we want to scroll by one page minus paddings and a small peek
        const peek = Math.max(20, gap);
        const distance = Math.max(visibleWidth - padLeft - padRight + peek, 200);

        return Math.round(distance);
    }

    const sliderLeft = (el) => {
        if (!el) return;
        const distance = computeScrollDistance(el);
        el.scrollBy({ left: -distance, behaviour: 'smooth' });
    }

    const sliderRight = (el) => {
        if (!el) return;
        const distance = computeScrollDistance(el);
        el.scrollBy({ left: distance, behaviour: 'smooth' });
    }

  return (
    <div className='relative'>

        {/* Slider Arrows */}
        <div>
            <HiChevronLeft className='z-20 hidden md:flex items-center justify-center text-white text-[50px] absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='z-20 hidden md:flex items-center justify-center text-white text-[50px] absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => sliderRight(elementRef.current)} />
        </div>

        {/* Trending Movies Image Slider */}
        <div 
        className='flex overflow-x-auto no-scrollbar w-full px-5 md:px-16 py-4 scroll-smooth' 
        ref={elementRef}
        >
            { loading 
            ? <Loader className='w-full md:h-[310px] mr-5'/>
            : movieList.map(item => (
                <img 
                  key={item.id ?? item.backdrop_path ?? item.poster_path}
                  src={IMAGE_BASE_URL + item.backdrop_path}
                  className='shrink-0 w-full md:h-[310px] object-cover object-top mr-5 last:mr-0 rounded-md hover:border-4 hover:scale-y-105 border-gray-400 transition-all duration-200 ease-in-out'
                />
              ))  
            }
        </div>
    </div>
  )
}

export default Slider