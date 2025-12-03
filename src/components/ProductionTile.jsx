import React, { useRef } from 'react';

export default function ProductionTile({ image, video, onActivate }) {
  const videoRef = useRef(null);
  const loadedRef = useRef(false); // track whether src was set already

  const handleEnter = () => {
    const vid = videoRef.current;
    if (!vid) return;

    // let parent know we are active so it can pause other videos
    if (onActivate) onActivate(vid);

    // only set src once to avoid re-creating requests repeatedly
    if (!loadedRef.current) {
      vid.src = video; // assign the imported URL or public path
      loadedRef.current = true;
    }

    // try to play (muted allows autoplay on many browsers)
    vid.play().catch(() => { /* autoplay may be blocked — user can still interact */ });
    vid.style.opacity = '0.6'; // reveal video visually
  };

  const handleLeave = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.pause();
    vid.currentTime = 0; // reset to start
    vid.style.opacity = '0';
    // optionally: do not remove src (keeps it cached) — to reduce next hover latency
    // if you want to completely free memory: vid.removeAttribute('src'); vid.load(); loadedRef.current = false;
  };

  // Touch support for mobile
  const handleTouchStart = (e) => {
    e.preventDefault(); // stops quick double-fires; test on device
    handleEnter();
  };
  const handleTouchEnd = () => {
    handleLeave();
  };

  return (
    <div
      className="relative overflow-hidden border-2 border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in cursor-pointer shadow-xl shadow-black"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <video
        ref={videoRef}
        preload="none"
        loop
        muted
        playsInline
        disablePictureInPicture
        controls={false}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-200 pointer-events-none"
      />
      <img src={image} alt="production logo" className="w-full block relative z-0" />
    </div>
  );
}
