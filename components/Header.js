import Image from 'next/image'
import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'

function Header() {
  return (
    <div className='sticky top-0 flex items-center p-2 lg:px-5 shadow-md'>
        
        
        {/* Left */}
        <div className='flex items-center cursor-pointer'>
            <Image 
                src='https://thumbs.dreamstime.com/b/hostel-sign-flat-icon-isolated-white-orange-hanging-background-eps-file-available-91955053.jpg' 
                width={50}
                height={50} 
                layout='fixed' 
            />

            <div className='flex ml-2 items-center rounded-full bg-[#15202b] p-2 outline-dash'>
              <SearchIcon className='h-6 bg-[#15202b] ' />
              <input
                className='hidden md:inline-flex ml-2 items-center bg-transparent bg-[#15202b]  outline-none' 
                type='text' 
                placeholder='Search Anything'
              />

            </div>
            
        </div>

        {/* Center */}
        <div className='flex justify-center flex-grow'>
          <HeaderIcon />
        </div>
        
    </div>
    
  )
}

export default Header
