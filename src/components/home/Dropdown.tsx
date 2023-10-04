import React, { useState } from 'react'
import DownArrow from '../../../public/media/down-arrow.png';
import Image from 'next/image';

type TDropdownProps = {
  options: { label: string; value: string }[];
  value: { label: string; value: string };
  setValue: (label: string, value: string) => void;
}

const Dropdown: React.FC<TDropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative text-left my-1 w-fit">
      <button
        type="button"
        className="z-0 h-7 sm:h-12 inline-flex justify-between items-center w-full cursor-pointer
    border-b-2 border-b-netflix-red hover:border-b-2 hover:border-b-netflix-white focus:outline-none transition-colors"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => { setTimeout(() => { setIsOpen(false); }, 100); }}
      >
        <div
          className="sm:pr-1 sm:pl-6 py-0 sm:py-0.5 capitalize text-sm sm:text-2xl text-netflix-white
        text-left outline-none font-semibold w-full bg-transparent select-none"
        >
          {props.value.label ?? ''}
        </div>
        <Image className="h-2 sm:h-2.5 px-4 w-auto" src={DownArrow} alt="arrow" />
      </button>
      <div className={`${isOpen ? 'opacity-100 text-opacity-100 max-h-96 visible scale-100'
        : 'opacity-0 text-opacity-0 max-h-0 invisible scale-95'} 
      rounded-md absolute top-12 w-full z-[100] bg-netflix-black transition-all duration-200 ease-linear mt-1 shadow`}
      >
        {props.options.map(item => (
          <button
            type="button"
            key={item.label}
            onClick={() => { setIsOpen(false); props.setValue(item.label, item.value) }}
            className="text-netflix-gray text-left hover:bg-gray-500 hover:text-netflix-white
        cursor-default text-xl w-full px-4 py-2 font-semibold capitalize"
            role="menuitem"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div >
  )
}

export default Dropdown