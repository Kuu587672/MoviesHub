import React, { useState } from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className='relative w-[110px] md:w-[200px]'>
      { !imgLoaded && ( <div className="absolute inset-0 animate-pulse bg-gray-700 rounded-md" /> ) }
      
      <img 
        src={IMAGE_BASE_URL + movie.poster_path} 
        className='w-[110px] md:w-[200px] block h-auto rounded-md hover:border-3 border-gray-600 hover:scale-110 transition-all duration-200 ease-in cursor-pointer shadow-md shadow-black'
        loading='lazy'
        onLoad={() => setImgLoaded(true)}
      />
      <h2 className='
          text-white
          mt-2
          w-[110px] md:w-[200px]
          truncate overflow-hidden whitespace-nowrap
        '>
          {movie.title}
      </h2>
    </div>
  )
}

export default MovieCard