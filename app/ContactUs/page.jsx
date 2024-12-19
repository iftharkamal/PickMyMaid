import React from 'react'

const ContactUs = () => {
  return (
    <div className='flex flex-col lg:flex-row pt-20'>

      <div className='flex flex-col flex-1 mb-6 lg:mb-0'>
       <div><img src="/assets/contactpic.png" alt="" className='w-full mb-5' /></div>
       <div className='flex gap-3 flex-wrap px-[29px] '>
          <div className='border-l pl-[1rem] flex flex-col max-w-[15rem] gap-[8px]'>
            <p className='text-[#354860] font-semibold text-[0.9rem] lg:text-[1rem]'>Location</p>
            <p className='text-[#595959] text-[0.9rem] lg:text-[1rem]'>Sharjah Media City Free Zone, Al Messaned, Sharjah, UAE</p>
          </div>
          <div className='border-l pl-[1rem] flex flex-col max-w-[15rem] gap-[8px]'>
            <p className='text-[#354860] font-semibold text-[0.9rem] lg:text-[1rem]'>Email</p>
            <p className='text-[#595959] text-[0.9rem] lg:text-[1rem]'>support@pickmymaid.com</p>
          </div>
          <div className='border-l pl-[1rem] flex flex-col max-w-[15rem] gap-[8px]'>
            <p className='text-[#354860] font-semibold text-[0.9rem] lg:text-[1rem]'>Call/Whatsapp</p>
            <p className='text-[#595959] text-[0.9rem] lg:text-[1rem]'>+971 566369736</p>
          </div>
       </div>
      </div>



      <div className='flex flex-col items-center justify-center p-2  lg:p-[32px] max-w-full  lg:max-w-[35%] max-h-max '>
        <div className='p-2 lg:p-[32px]'>
          <div className='mb-[1rem]'>
            <h2 className='text-[#354860] text-[1.2rem] lg:text-[1.7rem] font-bold mb-8px'>Get in touch</h2>
            <p className='text-[#727272] text-[0.9rem] lg:text-[1rem]'>Have an inquiry or some feedback for us? Fill out the form below to contact our team</p>
          </div>

          <div className='flex flex-col items-center justify-center gap-[0.5rem] '>
            <div className='w-full'>
            <label htmlFor="fullName" className=' text-[#595959]'>Full Name <span className='text-[#e53e3e]'>*</span></label>
            <div className='border border-[#e2e8f0] p-[10px] w-full text-[1rem] rounded-lg mt-2 '><input className='w-full text-sm px-4 outline-none' id='fullName' type="text" placeholder='John Doe'/></div>
            </div>
            <div className='w-full'>
            <label htmlFor="phone" className=' text-[#595959]'>Phone <span className='text-[#e53e3e]'>*</span></label>
            <div className='border border-[#e2e8f0] p-[10px] w-full text-[1rem] rounded-lg mt-2 '><input className='w-full text-sm px-4 outline-none' id='phone' type="number" placeholder=''/></div>
            </div>
            <div className='w-full'>
            <label htmlFor="email" className=' text-[#595959]'>Email <span className='text-[#e53e3e]'>*</span></label>
            <div className='border border-[#e2e8f0] p-[10px] w-full text-[1rem] rounded-lg mt-2 '><input className='w-full text-sm px-4 outline-none' id='email' type="email" placeholder='johndoe@gmail.com'/></div>
            </div>
            <div className='w-full'>
            <label htmlFor="Message" className=' text-[#595959]'>Message</label>
            <div className='border border-[#e2e8f0] p-[1rem] w-full h-[200px] text-[1rem] rounded-lg mt-2 '>
            <textarea  id="Message" className='w-full text-sm px-4 outline-none' placeholder='Write your message..'></textarea>
            </div>
            </div>
          </div>

        </div>



        <button className='bg-[#ff7442] px-3 py-4 mt-4 mb-4 rounded-lg text-white font-semibold '>Submit</button>

      </div>


    </div>
  )
}

export default ContactUs
