import Image from 'next/image'
import React from 'react'
import netflixLogo from '../../../public/media/logo.png';
import twitter from '../../../public/media/twitter.svg';
import instagram from '../../../public/media/instagram.svg';
import facebook from '../../../public/media/facebook.svg';

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center px-10 pt-40 sm:items-center sm:flex-row sm:px-5">
        <div className="flex sm:flex-row flex-col items-center w-full">
          <a href="#">
            <Image className="w-28 sm:w-40" src={netflixLogo} alt="netflix.com" />
          </a>
          <ul className="hidden sm:flex items-center gap-3 border-l border-gray-600 pl-6 pr-10">
            <li className='w-5'>
              <a href="#">
                <Image className='object-cover' src={twitter} alt="netflix.com" />
              </a>
            </li>
            <li className='w-5'>
              <a href="#">
                <Image className='object-cover' src={instagram} alt="netflix.com" />
              </a>
            </li>
            <li className='w-5'>
              <a href="#">
                <Image className='object-cover' src={facebook} alt="netflix.com" />
              </a>
            </li>
          </ul>
        </div>
        <ul className='flex sm:flex-row flex-col flex-wrap gap-x-3 gap-y-1 items-baseline justify-end w-full h-full'>
          <li className='w-full sm:w-fit text-center sm:text-left font-semibold underline text-netflix-white text-sm'><a href="#">About</a></li>
          <li className='w-full sm:w-fit text-center sm:text-left font-semibold underline text-netflix-white text-sm'><a href="#">Help Center</a></li>
          <li className='w-full sm:w-fit text-center sm:text-left font-semibold underline text-netflix-white text-sm'><a href="#">Netflix.com</a></li>
          <li className='w-full sm:w-fit text-center sm:text-left font-semibold underline text-netflix-white text-sm'><a href="#">Cookie Preferences</a></li>
          <li className='w-full sm:w-fit text-center sm:text-left font-semibold underline text-netflix-white text-sm'><a href="#">Terms of Service</a></li>
          <li className='w-full sm:w-fit text-center sm:text-left font-semibold underline text-netflix-white text-sm'><a href="#">Privacy</a></li>
        </ul>
      </div>
      <div className=" text-sm text-center opacity-70 pt-10 pb-10 text-netflix-white">
        © 2023 NETFLIX
      </div>
    </footer>
  )
}

export default Footer