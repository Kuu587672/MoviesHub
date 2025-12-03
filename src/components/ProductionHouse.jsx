import React, { use, useRef } from 'react'
import ProductionTile from './ProductionTile';

// Import Images
import disney from './../assets/images/disney.png';
import pixar from './../assets/images/pixar.png';
import marvel from './../assets/images/marvel.png';
import starwars from './../assets/images/starwar.png';
import natgeo from './../assets/images/nationalG.png';

// Import Videos
import disneyVid from './../assets/videos/disney.mp4';
import pixarVid from './../assets/videos/pixar.mp4';
import marvelVid from './../assets/videos/marvel.mp4';
import starwarsVid from './../assets/videos/star-wars.mp4';
import natgeoVid from './../assets/videos/national-geographic.mp4';

function ProductionHouse() {
    const activeVideoRef = useRef(null);

    // List that contains all the images and videos
    const productionHouseList = [
        { id: 1, image: disney, video: disneyVid },
        { id: 2, image: pixar, video: pixarVid },
        { id: 3, image: marvel, video: marvelVid },
        { id: 4, image: starwars, video: starwarsVid },
        { id: 5, image: natgeo, video: natgeoVid },
    ]

    // parent callback to set active playing video and pause previous
    const handleActivate = (vid) => {
      if (activeVideoRef.current && activeVideoRef.current !== vid) {
        try {
          activeVideoRef.current.pause();
          activeVideoRef.current.currentTime = 0;
          activeVideoRef.current.style.opacity = '0';
        }
        catch (e) { /* Ignore */ }
      }
      activeVideoRef.current = vid;
    };

  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16' >
      {productionHouseList.map(item => (
        <div key={item.id} className='w-[150px] md:w-[300px]' >
          <ProductionTile
            image = {item.image}
            video = {item.video}
            onActivate = {handleActivate}
          />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse