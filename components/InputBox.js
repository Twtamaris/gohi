import Image from 'next/image'
import React from 'react'


function InputBox() {
    
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt'>
        
        <div className='flex space-x-4 p-4 items-center'>
            <form className='flex flex-1'>
                <input 
                    className='rounded-full h-12 
                    bg-gray-100 text-black flex-grow 
                    px-5 focus:outline-none' 
                    type='text'
                    placeholder='Publish Notice'
                />
                <button hidden type='submit'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default InputBox