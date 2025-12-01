# Disney Clone Project (using ReactJS)

This is a project for practice purposes.</br>
It not only focuses on the front-end of the website but also the backend.</br>
All the data for the movies will be fetched dynamically using APIs.</br>
It will be fully responsive for all devices.</br>

## Tech Stack

1. ReactJS</br>
2. Vite</br>
3. TailwindCSS</br>
4. React Icons</br>

## Folder Structure

disney-clone/</br>
│── public/</br>
│── src/</br>
│   ├── assets/</br>
│   │   └── images/</br>
│   ├── components/</br>
│   │   └── Header.jsx</br>
│   │   └── HeaderItem.jsx</br>
│   ├── App.jsx</br>
│   ├── main.jsx</br>
│── package.json</br>
│── README.md</br>

## Version-0

1. Just started a react project named "disney-clone".
2. Created the header section, which contains the logo, navigation(icons used from react-icons), and a dummy profile picture.
3. The navigation tabs when hovered turns grey and also an underline appears from left to right in a smooth manner.

## Version-0.1

1. Added full responsive behavior to the Header component.
2. On medium screens (md:) only 3 primary icons are displayed for a cleaner layout.
3. Implemented a 3-dots toggle button (HiDotsVertical) that reveals the remaining menu items.
4. Toggle menu now supports:</br>
&emsp;1. Smooth appearance/disappearance</br>
&emsp;2. Intuitive mobile/tablet navigation</br>
&emsp;3. Consistent icon + text styling

## Version-0.2

1. Implemented a fully functional Trending Movies Slider using TMDB API data.
2. Added left and right navigation arrows using react-icons (HiChevronLeft, HiChevronRight).
3. Enabled horizontal scroll with smooth animation.
4. Used useRef() to directly control the slider DOM element.
5. Added hover border animation on movie posters.