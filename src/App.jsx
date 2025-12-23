import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Header from './components/Header.jsx'
import Slider from './components/Slider.jsx'
import ProductionHouse from './components/ProductionHouse.jsx'
import GenreMovieList from './components/GenreMovieList.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div>
        
        {/* Header */}
        <Header />

        {/* Slider */}
        <Slider />

        {/* Production House */}
        <ProductionHouse />
        
        {/* Movies sorted by genre */}
        <GenreMovieList />

        {/* Footer */}
        <Footer />
        
      </div>
    </>
  )
}

export default App
