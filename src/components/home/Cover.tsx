import Image from 'next/image'
import React from 'react'
import NetflixLogo from '../../../public/media/logo.png'

const Cover = () => {
  return (
    <section className='bg-cover-layer h-[400px] sm:h-[550px] w-full pt-8'>
      <div className='container mx-auto w-full px-2 sm:px-0'>
        <Image className='w-36 sm:w-72 h-auto mx-auto' src={NetflixLogo} alt="netflix.com" />
        <div className='w-fit mx-auto flex gap-2 items-baseline justify-center text-xs sm:text-base'>
          <a href="#"><p className="font-semibold text-netflix-red hover:text-netflix-white underline">Global Top 10</p></a>
          <div className="flex-shrink px-1 text-gray-400 sm:px-1 text-base">•</div>
          <p className='font-semibold text-netflix-white '>Top 10 by Country</p>
          <div className="flex-shrink px-1 text-gray-400 sm:px-1 text-base">•</div>
          <a href="#"><p className="font-semibold text-netflix-red hover:text-netflix-white underline">Most Popular Lists</p></a>
        </div>
        <h1 className='text-[44px] sm:text-[80px] lg:text-[103px] sm:max-w-none max-w-[220px] mx-auto text-center text-netflix-white font-bold'>Top 10 By Country</h1>
        <p className='text-netflix-white opacity-75 sm:max-w-[455px] lg:max-w-[250px] py-2 mx-auto text-center text-base sm:text-lg font-normal'>Weekly Top 10 lists of the most  watched TV and films in countries  around the world.</p>
      </div>
    </section>
  )
}

export default Cover