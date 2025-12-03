import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function HrMovieCard({movie}) {

  if (!movie) return null;

  return (
    <div className='hover:scale-105 transition-all duration-200 ease-in cursor-pointer'>
        <img 
          src={IMAGE_BASE_URL + movie.backdrop_path} 
          className='w-[150px] md:w-[350px] block h-auto rounded-md hover:border-3 border-gray-600 shadow-md shadow-black'
          loading='lazy'
        />
        <h2 className='
          text-white
          mt-2
          w-[150px] md:w-[350px]
          truncate overflow-hidden whitespace-nowrap
        '>
          {movie.title}
        </h2>
    </div>
  )
}

export default HrMovieCard