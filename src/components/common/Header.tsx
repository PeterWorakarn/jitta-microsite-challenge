import React from 'react'
import NetflixHeader from '../../../public/media/netflix-header.svg';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="px-4 bg-netflix-black w-full flex items-center justify-between relative">
      <a href="#">
        <Image src={NetflixHeader} alt="netflix.com" />
      </a>
      <button type="button" className="search-btn hover:text-netflix-white flex items-center justify-start gap-2 border-l-2 pl-5 font-bold border-l-gray-600 text-sm text-netflix-gray">
        <svg viewBox="0 0 24 24" height="18" fill="white" className="search-icon"><path fill-rule="evenodd" d="M11 17a6 6 0 100-12 6 6 0 000 12zm-6.56.162a8.975 8.975 0 005.898 2.814 8.974 8.974 0 005.877-1.64l3.724 3.725.354-.354 1.414-1.414.354-.354-3.725-3.724a8.974 8.974 0 001.64-5.877A9 9 0 0011 2a9 9 0 00-6.56 15.162z" clip-rule="evenodd"></path></svg>
        Search for a title...
      </button>

      {/* <nav className='absolute top-12 right-0'>
        
      </nav> */}
    </header>
  )
}
