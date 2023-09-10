import React from 'react'

function Footer() {
  return (
    <div className='w-full flex flex-col lg:flex-row lg:justify-between items-center bg-neutral-900 p-8 gap-2 mt-16 '>
      <div className='text-2xl font-bold'><span className='text-white'>Movie</span><span className='text-red-700'>Lia</span></div>
      <ul className='flex gap-4 '>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Series</li>
        <li>Search</li>
      </ul>
    </div>
  )
}

export default Footer
