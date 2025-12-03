import React from 'react'
import genresList from './../constants/GenresList.jsx'
import MovieList from './MovieList.jsx'

function GenreMovieList() {
  return (
    <div className='mt-6 md:mt-10'>
        {genresList.genre.map((item, index) => index <= 4 && (
            <div key={item.id} className='p-8 px-5 md:px-16 py-2 md:py-4' >
                <h2 className='text-[20px] text-white font-bold' >
                    {item.name}
                </h2>

                {/* Movie List Component */}
                <MovieList genreId={item.id} idx={index} />
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList