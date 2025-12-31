import React, { useState } from 'react'

// Components
import Header from '/src/components/Header.jsx'
import SearchResults from '/src/components/SearchResults.jsx'
import Slider from '/src/components/Slider.jsx'
import ProductionHouse from '/src/components/ProductionHouse.jsx'
import GenreMovieList from '/src/components/GenreMovieList.jsx'
import Footer from '/src/components/Footer.jsx'

function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      
      {/* Header */}
      <Header setSearchQuery={setSearchQuery} />

      {/* Main Content */}
      { searchQuery ? (
        <SearchResults query={searchQuery} />
      ) : (
        <>
          {/* Slider */}
          <Slider />
          {/* Production House */}
          <ProductionHouse />
          {/* Movies sorted by genre */}
          <GenreMovieList />
        </>
      )}

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default Home