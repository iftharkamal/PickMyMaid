import Link from 'next/link'
import React from 'react'

const Favourites = () => {
  return (
    <div className='px-1 py-2 lg:py-8 lg:px-6 xl:px-8 w-full h-max '>
      <div className='flex flex-col items-center justify-center gap-[1.5rem] md:gap-[2rem] pt-20'>
        <div className='flex items-center justify-center min-h-[80vh]'>
          <div className='flex flex-col items-center gap-[0.5rem]'>
              <img src="/assets/favouritesBg.svg" alt="favourites" className='w-[25rem] pointer-events-none' />
              <h2 className='text-3xl lg:text-4xl font-bold'>Empty!</h2>
              <p className='text-[0.9rem] lg:text-[1rem] text-[#595959]'>Your favorites list is empty. Start adding items to see them here!</p>
              <Link href="/SearchMaid">
              <button className='inline-flex select-none appearance-none items-center justify-center whitespace-nowrap rounded-lg min-w-10 h-10 text-sm px-4 py-2 text-white font-semibold bg-[#ff7442] outline-transparent outline-2 outline-offset-2 leading-5 cursor-pointer border-2 border-[#ff7442] hover:bg-[#f36430] transition-all duration-200'>Add Items</button>
              </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Favourites
