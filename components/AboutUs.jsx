import React from 'react'
import Title from './Title'

const AboutUs = () => {
  return (
    <div className='p-4  mb-20'>
      <Title name="about us"/>
      <div className='flex flex-col md:flex-row items-center justify-between lg:py-4 lg:px-20 w-full md:gap-14 lg:gap-32'>
        {/* text */}
        <div className='w-full order-2  md:order-none'>
          <h2 className='text-[#354860] text-[1rem] md:text-[1.2rem] lg:text-[2rem] font-bold lg:leading-tight lg:mb-2'>Bringing Families and Reliable Domestic Helpers Together: Your One-Stop Maid and Nanny Finder Platform!</h2>
          <p className='text-[#595959] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]'>Simplifying the quest for reliable household helpers and nannies. Your one-stop solution for a happy home and peace of mind. Connect with dedicated helpers worthy of your trust and value your needs.</p>
        </div>
        {/* image */}
        <div className='w-full  h-[200px] md:h-[270px] lg:h-[350px]  order-1  md:order-none relative mb-5 md:mb-0'>
          <div className='w-full h-full border border-[#ff7442] absolute left-0 top-0 translate-x-[2%] translate-y-[2%] rounded-tl-3xl rounded-br-3xl'></div>
        <img src="/assets/aboutpic.jpg" alt=""  className=' h-full w-full object-center object-cover rounded-tr-3xl rounded-bl-3xl'/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
