import React from 'react'

const AboutUS = () => {
  return (
    <div className='pt-20'>
      <div className='grid grid-cols-[auto_1fr] gap-[30px] px-[var(--padding-page)]  bg-[url(data:image/webp;base64,UklGRnQBAABXRUJQVlA4TGgBAAAvlgVsEB8gICFTcsA68y8kIEM0JylkGwG6F+T8oU4lAP5k0+G0tu0qumtFp4D5eCwqvczHY1MQnjbSRrpA4QOsp687Ef1n5LaNo93rYqDtjS+oZW9d1+xtQeuqRdrNLZi1pDVL/yRrC95a85KkLcvagkn16FL7FFlb8Ih2hLEF5zLRRcXZgugG6W5B9IjnbUH0umJtwZzGdA39T4u1Be88pmvoLa/WFkxF19DtU6q1BY9+G7oevVlbUMYl6xr6eqa0tuB2yboq3C2oZQx9nlHn+eRtQbQjvC2ILireFkQ3SG8Lokc8bwui1xVnC6JXb28Los9I7hbgvwPBfweC/w4E/x0I/jsQ/Hcg+O9A8N+B4L8DwX8Hgv8OBP8dCP47EPx3IPjvQPDfgaC1A8F/B4L/DgT/HQj+OxD8dyD470Dw34HgvwPBfweC/w4E/x0I/jsQ/Hcg+O9A8N+B4L8DwX8Hwi4OBP8diAA=)] h-[400px]'> 
        <img src="/assets/aboutuspic.png" alt="" className='hidden lg:block h-[350px] self-end' />
        <div className='flex flex-col gap-2  justify-center items-center lg:items-start'>
          <h1 className='text-[1.8rem] lg:text-[2.25rem] text-[#ff7442] font-bold'>About Us</h1>
          <p className='text-[#3f1010] lg:max-w-[60vw] text-center lg:text-left'>Find the perfect maids and nannies you want to hire. We will make it easier. Our commitment is to provide reliable, efficient, and personalized service, ensuring the safety and satisfaction of both families and household helpers.</p>
        </div>
      </div>


      <div className='pt-[80px] px-4 lg:px-[var(--padding-page)] flex flex-col gap-[15px] '>
        <div className='border-b-[2px] border-b-[#ff7442] pb-[80px]'>
        <h1 className='text-[1.4rem] md:text-[2rem] lg:text-[2.6rem] text-[#ff7442] font-extrabold mb-10'>Our Team & what we do</h1>
        <div className='flex flex-col gap-[30px] lg:flex-row items-center ' >
          <p className='text-[#595959] mt-[5px] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] '>We connect UAE families with trusted maids and nannies. We function collaboratively with a community of experienced and skilled caregivers and household helpers.With years of industry experience, we understand every family's unique needs and expectations. We minimize your efforts and let you find qualified and pre-screened candidates.Our team ensures that all helpers have undergone thorough background checks, prioritizing trust. With personalized service and a commitment to excellence, we find you the perfect household helper, making your life easier and more enjoyable.Our platform is SHAMS registered and allows nannies and maids to register in our database. We select them and add their profiles to our website after accurate filtering. Families who are looking for trustworthy and caring maid service can browse our database and find suitable matches according to availability, location, monthly pay, etc. We follow all the newest rules and regulations for hiring nannies and maids in the UAE. However, we don't directly handle their hiring and sponsorship. If necessary, we can provide you with contact information for companies we have worked with that can assist you in that process.</p>
          <img src="/assets/teampic.png" alt="" className='w-full'/>
        </div>
        </div>
      </div>



      <div className='flex flex-col py-[50px] px-[4px] lg:px-[var(--padding-page)] gap-10 lg:gap-28'>
        <div className='grid  lg:grid-cols-[auto_1fr]  gap-[30px] lg:gap-[50px] items-start  '>
          <h1 className=' text-[1.4rem] md:text-[2rem] lg:text-[2.6rem] text-[#ff7442] font-extrabold mb-5 '>Our Mission and Values</h1>
          <p className='text-[#1a202c] mt-[5px] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] '>Our mission is to present a reliable and efficient platform for UAE families to find trusted and skilled maids and nannies. Our values center around integrity, professionalism, and transparency. We prioritize the safety and well-being of families through rigorous screening and background checks. We foster strong relationships built on trust and respect between families and helpers. We aim to make a positive impact on households by facilitating long-lasting matches that contribute to harmonious and nurturing environments for both families and household helpers.</p>
        </div>

        <div className='grid lg:grid-cols-[auto_auto] gap-4 lg:gap-[15%]'>
          <div className='flex flex-col gap-0 lg:gap-[1rem] order-2 md:order-none justify-center'>
            <h1 className='text-center text-[#354860] text-[1rem] md:text-[1.2rem] lg:text-[2rem] font-bold mb-2'>Our Mission and Values</h1>
            <p className='text-[#595959] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]'>Our mission is to present a reliable and efficient platform for UAE families to find trusted and skilled maids and nannies. Our values center around integrity, professionalism, and transparency. We prioritize the safety and well-being of families through rigorous screening and background checks. We foster strong relationships built on trust and respect between families and helpers. We aim to make a positive impact on households by facilitating long-lasting matches that contribute to harmonious and nurturing environments for both families and household helpers.</p>
          </div>
          <div className='relative order-1 md:order-none'>
            <div className='w-full h-full bg-transparent border border-[#ff7442] rounded-tl-3xl rounded-br-3xl translate-x-[2%] translate-y-[2%] absolute '></div>
            <img src="/assets/ourmissionpic.png" alt="" className='rounded-tr-3xl rounded-bl-3xl ' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUS
