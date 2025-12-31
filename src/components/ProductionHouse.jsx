import React, { use, useRef } from 'react'
import ProductionTile from './ProductionTile';

function ProductionHouse() {
    const activeVideoRef = useRef(null);

    // List that contains all the images and videos
    const productionHouseList = [
        { id: 1, image: "public/images/disney.png", video: "public/videos/tile-vid-1.mp4" },
        { id: 2, image: "public/images/pixar.png", video: "public/videos/tile-vid-2.mp4" },
        { id: 3, image: "public/images/marvel.png", video: "public/videos/tile-vid-3.mp4" },
        { id: 4, image: "public/images/starwar.png", video: "public/videos/tile-vid-4.mp4" },
        { id: 5, image: "public/images/nationalG.png", video: "public/videos/tile-vid-5.mp4" },
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