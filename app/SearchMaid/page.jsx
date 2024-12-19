
"use client"


import React, { useState } from 'react'
import { maids } from '@/components/MaidsBox';





const SearchMaid = () => {


  const [sort,setSort]  = useState(false);
  const [filter,setFilter] = useState(false);

  return (
    <section className='pt-20'>
        <div className='grid items-center  py-[2rem] gap-[15px] grid-cols-[auto] lg:grid-cols-[1fr_auto] px-4 lg:px-[var(--padding-page)]  bg-[url(data:image/webp;base64,UklGRnQBAABXRUJQVlA4TGgBAAAvlgVsEB8gICFTcsA68y8kIEM0JylkGwG6F+T8oU4lAP5k0+G0tu0qumtFp4D5eCwqvczHY1MQnjbSRrpA4QOsp687Ef1n5LaNo93rYqDtjS+oZW9d1+xtQeuqRdrNLZi1pDVL/yRrC95a85KkLcvagkn16FL7FFlb8Ih2hLEF5zLRRcXZgugG6W5B9IjnbUH0umJtwZzGdA39T4u1Be88pmvoLa/WFkxF19DtU6q1BY9+G7oevVlbUMYl6xr6eqa0tuB2yboq3C2oZQx9nlHn+eRtQbQjvC2ILireFkQ3SG8Lokc8bwui1xVnC6JXb28Los9I7hbgvwPBfweC/w4E/x0I/jsQ/Hcg+O9A8N+B4L8DwX8Hgv8OBP8dCP47EPx3IPjvQPDfgaC1A8F/B4L/DgT/HQj+OxD8dyD470Dw34HgvwPBfweC/w4E/x0I/jsQ/Hcg+O9A8N+B4L8DwX8Hwi4OBP8diAA=)]'>
         <div className='flex flex-col items-center  gap-[2rem] max-w-[60rem] w-full  m-auto'>
           <div className=' max-w-[30rem] text-center'><h1 className='text-[1.4rem] md:text-[2rem] lg:text-[2.6rem] whitespace-nowrap md:whitespace-normal font-semibold text-black '>All Maids/Nannies are in The UAE Now</h1></div>
           <div className='flex p-[0.5rem] bg-white border border-black rounded-[50px] gap-[0.5rem] w-full justify-between'>
            <div className='w-full'>
                <div className='w-full rounded-[50px]'><input className='h-[2.5rem] w-full px-[1rem] text-[0.8rem] md:text-[1rem] outline-none' placeholder='Search by type eg. Cook Cleaning' type="text" /></div>
            </div>
              <button className='hidden md:inline-flex px-[2rem] bg-[#ff7442] rounded-[50px]  items-center justify-center text-[1rem] text-white font-medium hover:bg-[#ec6c3d] shadow-custom-orange' ><svg focusable="false" className="mr-[0.5rem] w-[16px]" aria-hidden="true" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path></svg>Search</button>

           </div>
           <button className='inline-flex w-full -mt-5 md:hidden px-[2rem] bg-[#ff7442] rounded-[50px]  items-center justify-center text-[1rem] text-white font-medium hover:bg-[#ec6c3d] shadow-custom-orange' ><svg focusable="false" className="mr-[0.5rem] w-[16px]" aria-hidden="true" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path></svg>Search</button>

         </div>
        </div>

        <div className='px-2 lg:px-[var(--padding-page)] py-3 bg-white'>
         
          {/* country tag section */}
          <div className="bg-black/5 p-2 gap-3 rounded-lg m-auto flex flex-wrap justify-between whitespace-nowrap items-center  w-full lg:px-10 lg:py-4 mb-5">

                   <div className="flex gap-2 bg-white px-4 py-1 text-sm items-center justify-center lg:text-lg lg:gap-4">
                    <img src="/assets/filipinoFlag.png" alt="country" className="w-[35px] "/>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Filipino</p>
                        <p className="text-xs">453 professionals</p>
                    </div>
                   </div>
                   <div className="flex gap-2 bg-white px-4 py-1 text-sm items-center justify-center  lg:text-lg  lg:gap-4">
                    <img src="/assets/indianFlag.png" alt="country" className="w-[35px]"/>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Indian</p>
                        <p className="text-xs">139 professionals</p>
                    </div>
                   </div>
                   <div className="flex gap-2 bg-white px-4 py-1 text-sm items-center justify-center   lg:text-lg  lg:gap-4">
                    <img src="/assets/nepalFlag.png" alt="country" className="w-[35px] "/>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Nepali</p>
                        <p className="text-xs">140 professionals</p>
                    </div>
                   </div>
                   <div className="flex gap-2 bg-white px-4 py-1 text-sm items-center justify-center   lg:text-lg lg:gap-4">
                    <img src="/assets/srilankaFlag.png" alt="country" className="w-[35px]" />
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Sri Lankan</p>
                        <p className="text-xs">56 professionals</p>
                    </div>
                   </div>
                   <div className="flex gap-2 bg-white px-4 py-1 text-sm items-center justify-center   lg:text-lg lg:gap-4">
                    <img src="/assets/indonesiaFlag.png" alt="country" className="w-[35px] "/>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Indonesian</p>
                        <p className="text-xs">11 professionals</p>
                    </div>
                   </div>

                </div>



                <div className='flex items-start lg:justify-between mt-[30px] '>
                    <div>
                      <h1 className='text-[1.2rem] text-[#595959]  '><span className='text-[#ff7442]'>Found <span className='text-[#ff7442] font-semibold'>973 result</span></span> according to your requirement</h1>
                    </div>

                    <div className='transition-all duration-200 ease-in-out absolute z-[997]  top-0 left-0 bg-white lg:hidden w-[40vw]'>
                    {
                      filter ? (
                          <div className='sticky pr-[20px] pl-8 pt-6 grid gap-[10px] overflow-auto   max-h-[calc(-4rem+100svh)]'>
                        <div className='pt-[3rem] mt-[0.5rem] flex gap-[0.5rem] '>
                          <div className='flex gap-[0.5rem] items-center'>
                          <svg focusable="false" className="w-[1em] h-[1em] rotate-90 " viewBox="0 0 32 32"><path fill="#40535b" d="m23.265 24.381l.9-.894c4.164.136 4.228-.01 4.411-.438l1.144-2.785l.085-.264l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89 2.936-3.038 2.765-3.461l-1.139-2.814c-.171-.422-.236-.587-4.37-.474l-.9-.93a20 20 0 0 0-.141-4.106l-.116-.263l-2.974-1.3c-.438-.2-.592-.272-3.4 2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149 3.182c-.433.175-.586.237-.418 4.437l-.893.89c-4.162-.136-4.226.012-4.407.438l-1.146 2.786l-.09.267l.094.232c.049.12.194.48 2.8 2.962v1.3c-3 2.89-2.935 3.038-2.763 3.462l1.138 2.817c.174.431.236.584 4.369.476l.9.935a20.2 20.2 0 0 0 .137 4.1l.116.265l2.993 1.308c.435.182.586.247 3.386-2.8l1.262.016c2.895 3.09 3.043 3.03 3.466 2.859l2.759-1.115c.436-.173.588-.234.413-4.436m-11.858-6.524a4.957 4.957 0 1 1 6.488 2.824a5.014 5.014 0 0 1-6.488-2.824"></path></svg>
                          <h2 className='font-bold text-[1rem] xl:text-[1.25rem] '>Filter</h2>
                          </div>
                        </div>

                        <div className=' pb-[4rem] overflow-auto '>  

                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Position</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Live In</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Live Out</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Live In And Live Out</span>
                          </label>
                         </div>

                         <div className='grid mt-[18px] gap-[8px] '>
                         <h2 className='text-[#354860] text-[1.25rem] font-medium'>Location</h2>
                         <div className='w-[250px] h-fit relative'>
                          <select name="" id="" className='w-full ps-4 pe-8 h-[2.5rem] bg-inherit  rounded-md border border-bg-[rgb(176, 186, 191)] outline-2 outline-transparent outline-offset-2  bg-white appearance-none  ' >
                            <option  value="default">Select location</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Ajman">Ajman</option>
                            <option value="Umm Al Khuwain">Umm Al Khuwain</option>
                            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                            <option value="Al Ain">Al Ain</option>
                            <option value="Fujairah">Fujairah</option>
                          </select>
                         <div className='absolute h-full right-[0.5rem] inline-flex items-center justify-center top-[50%] translate-y-[-50%] w-[1.5rem]'> 
                         <svg viewBox="0 0 24 24" role="presentation"  focusable="false" aria-hidden="true" className='w-[1em] h-[1em] text-[rgb(26,32,44,1)]'><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                         </div>
                         </div>

                         </div>

                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Availability</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Hired</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Not Hired</span>
                          </label>
                         </div>


                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Category</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Maids</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Nanny</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Caregiver</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Private Nurse</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Private Tutor</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Driver</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Postpartum Care</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Cook</span>
                          </label>
                         </div>

                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Religion</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Christian</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Hinduism</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Islam</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Buddhist</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Sikkhism</span>
                          </label>
                         </div>


                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Visa Status</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Visit Visa</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>To be Cancel Visa</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Own Visa</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Husband Visa</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Cancelled Visa</span>
                          </label>
                         </div>


                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Salary</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>1300-1500</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>1500-1800</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>1700-2000</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>1800-2200</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>2000-2500</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>2300-2800</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>2500-3000</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>3000-3500</span>
                          </label>
                         </div>


                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Nationality</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Philippines</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>India</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Nepal</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Indonesia</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Bangladesh</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Pakistan</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Myanmar</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Bhutan</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Srilanka</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Ethiopia</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Kenya</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Nigeria</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Ghana</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Cameroon</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Zimbabwe</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Eritrea</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Uganda</span>
                          </label>
                         </div>


                          <div className='mt-[20px] pb-[20px] inline-flex'>
                            <button className='font-semibold appearance-none px-4 xl:px-8 border-2 border-[#ff7442] py-2 xl:py-6 bg-transparent text-[#292525] h-[2.5rem] min-w-[2.5rem] text-[0.8rem] xl:text-[1rem] rounded-lg flex items-center justify-center whitespace-nowrap outline-2 outline-transparent outline-offset-2 select-none hover:bg-[#fd6f3b] transition-all duration-200'>Clear</button>
                            <button className='font-semibold appearance-none px-4 xl:px-8 border-2 border-[#ff7442] py-2 xl:py-6 bg-[#ff7442] text-white h-[2.5rem] min-w-[2.5rem] text-[0.8rem] xl:text-[1rem] rounded-lg flex items-center justify-center whitespace-nowrap outline-2 outline-transparent outline-offset-2 select-none ms-2 hover:bg-[#fd6f3b] transition-all duration-200'>Apply</button>
                          </div>

                        </div>

                   </div>
                      ): null }
                    </div>

                    <div className='fixed lg:static flex justify-center items-center z-[998] left-[50%] translate-x-[-50%] bottom-[6.5rem] cursor-pointer'>
                      <button onClick={()=> setFilter(!filter)} className='lg:hidden  inline-flex items-center justify-center font-semibold px-1.5 gap-2 text-[#ff7442] h-[2.5rem] lg:h-[3rem] border border-[#ff7442] rounded-tl-2xl whitespace-nowrap relative bg-white'><svg focusable="false" className="w-[1em] h-[1em]" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"></path></svg>filter</button>
                      <button onClick={()=> setSort(!sort)} className='inline-flex  items-center justify-center font-medium px-1.5 gap-2 text-[#ff7442] h-[2.5rem] border border-[#ff7442] rounded-br-2xl border-l-0 lg:border-l lg:rounded-tl-2xl whitespace-nowrap relative bg-white'>Sort <svg focusable="false" className="w-[1em] h-[1em]" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m11.95 7.95l-1.414 1.414L8 6.828V20H6V6.828L3.466 9.364L2.05 7.95L7 3zm10 8.1L17 21l-4.95-4.95l1.414-1.414l2.537 2.536L16 4h2v13.172l2.536-2.536z"></path></svg></button>
                      <div>
                      {sort ? (<div className='min-w-max absolute bottom-12 left-[72px] xl:top-12 xl:inset-[0px_0px_auto_auto] '>
                        <div className='bg-white py-2 pr-12 shadow-md md:shadow-2xl rounded-md'>
                          <button className='flex items-center text-start px-3 py-2'>Salary low to high</button>
                          <button className='flex items-center text-start px-3 py-2'>Salary high to low</button>
                        </div>
                      </div> ): null}
                      </div>
                      
                    </div>
                </div>




                {/* ------------------categorise section------------------- */}

                <section className='pt-[1rem] grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4'>

                  {/* aside bar */}
                  <aside className='hidden lg:block '>
                   <div className='sticky pr-[20px]  top-[4rem] left-0 grid gap-[10px] overflow-auto   max-h-[calc(-4rem+100svh)]'>
                        <div className='pt-[3rem] mt-[0.5rem] flex gap-[0.5rem] '>
                          <div className='flex gap-[0.5rem] items-center'>
                          <svg focusable="false" className="w-[1em] h-[1em] rotate-90 " viewBox="0 0 32 32"><path fill="#40535b" d="m23.265 24.381l.9-.894c4.164.136 4.228-.01 4.411-.438l1.144-2.785l.085-.264l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89 2.936-3.038 2.765-3.461l-1.139-2.814c-.171-.422-.236-.587-4.37-.474l-.9-.93a20 20 0 0 0-.141-4.106l-.116-.263l-2.974-1.3c-.438-.2-.592-.272-3.4 2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149 3.182c-.433.175-.586.237-.418 4.437l-.893.89c-4.162-.136-4.226.012-4.407.438l-1.146 2.786l-.09.267l.094.232c.049.12.194.48 2.8 2.962v1.3c-3 2.89-2.935 3.038-2.763 3.462l1.138 2.817c.174.431.236.584 4.369.476l.9.935a20.2 20.2 0 0 0 .137 4.1l.116.265l2.993 1.308c.435.182.586.247 3.386-2.8l1.262.016c2.895 3.09 3.043 3.03 3.466 2.859l2.759-1.115c.436-.173.588-.234.413-4.436m-11.858-6.524a4.957 4.957 0 1 1 6.488 2.824a5.014 5.014 0 0 1-6.488-2.824"></path></svg>
                          <h2 className='font-bold text-[1rem] xl:text-[1.25rem] '>Filter</h2>
                          </div>
                        </div>

                        <div className='h-[calc(-7rem + 100svh)] pb-[4rem] overflow-auto '>  

                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Position</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Live In</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Live Out</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Live In And Live Out</span>
                          </label>
                         </div>

                         <div className='grid mt-[18px] gap-[8px] '>
                         <h2 className='text-[#354860] text-[1.25rem] font-medium'>Location</h2>
                         <div className='w-[250px] h-fit relative'>
                          <select name="" id="" className='w-full ps-4 pe-8 h-[2.5rem] bg-inherit  rounded-md border border-bg-[rgb(176, 186, 191)] outline-2 outline-transparent outline-offset-2  bg-white appearance-none  ' >
                            <option  value="default">Select location</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Ajman">Ajman</option>
                            <option value="Umm Al Khuwain">Umm Al Khuwain</option>
                            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                            <option value="Al Ain">Al Ain</option>
                            <option value="Fujairah">Fujairah</option>
                          </select>
                         <div className='absolute h-full right-[0.5rem] inline-flex items-center justify-center top-[50%] translate-y-[-50%] w-[1.5rem]'> 
                         <svg viewBox="0 0 24 24" role="presentation"  focusable="false" aria-hidden="true" className='w-[1em] h-[1em] text-[rgb(26,32,44,1)]'><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                         </div>
                         </div>

                         </div>

                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Availability</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Hired</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Not Hired</span>
                          </label>
                         </div>


                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Category</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Maids</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Nanny</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Caregiver</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Private Nurse</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Private Tutor</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Driver</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Postpartum Care</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Cook</span>
                          </label>
                         </div>

                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Religion</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Christian</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Hinduism</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Islam</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Buddhist</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Sikkhism</span>
                          </label>
                         </div>


                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Visa Status</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Visit Visa</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>To be Cancel Visa</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Own Visa</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Husband Visa</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Cancelled Visa</span>
                          </label>
                         </div>


                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Salary</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>1300-1500</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>1500-1800</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>1700-2000</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>1800-2200</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>2000-2500</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>2300-2800</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>2500-3000</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>3000-3500</span>
                          </label>
                         </div>


                         <div className='grid mt-[18px] gap-[8px]'>
                          <h2 className='text-[#354860] text-[1.25rem] font-medium'>Nationality</h2>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Philippines</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>India</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Nepal</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Indonesia</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Bangladesh</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Pakistan</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Myanmar</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Bhutan</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Srilanka</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Ethiopia</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Kenya</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Nigeria</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Ghana</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Cameroon</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Zimbabwe</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Eritrea</span>
                          </label>
                          <label className='inline-flex items-center cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <span className='ms-[0.5rem] text-[1rem]'>Uganda</span>
                          </label>
                         </div>


                          <div className='mt-[20px] pb-[20px] inline-flex'>
                            <button className='font-semibold appearance-none px-4 xl:px-8 border-2 border-[#ff7442] py-2 xl:py-6 bg-transparent text-[#292525] h-[2.5rem] min-w-[2.5rem] text-[0.8rem] xl:text-[1rem] rounded-lg flex items-center justify-center whitespace-nowrap outline-2 outline-transparent outline-offset-2 select-none hover:bg-[#fd6f3b] transition-all duration-200'>Clear</button>
                            <button className='font-semibold appearance-none px-4 xl:px-8 border-2 border-[#ff7442] py-2 xl:py-6 bg-[#ff7442] text-white h-[2.5rem] min-w-[2.5rem] text-[0.8rem] xl:text-[1rem] rounded-lg flex items-center justify-center whitespace-nowrap outline-2 outline-transparent outline-offset-2 select-none ms-2 hover:bg-[#fd6f3b] transition-all duration-200'>Apply</button>
                          </div>

                        </div>

                   </div>
                  </aside>


                  {/* main field */}
                  <div className='grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] md:gap-[30px] lg:grid-cols-[repeat(3,1fr)]'>
                    
                  {
                    maids.map((maid,index)=>{
                      return(
                        <div key={index}>
                            {/* box */}
                            <div className='flex flex-col p-[1rem] items-center gap-[0.5rem] h-full bg-white border border-[#ff7442] rounded-tl-3xl rounded-br-3xl cursor-pointer select-none'>
                              {/* img */}
                              <div className='w-[97%] relative z-100'>
                                          <div className=' before:content-[""] before:pb-[100%] before:h-0 before:block overflow-hidden after:absolute  w-full h-full flex items-center justify-center'>
                                          <img className='w-full h-full object-cover object-center rounded-tr-[19px] rounded-bl-[19px] pointer-events-none' src={maid.image} alt="" />
                                          <abbr title="Add to favourites" className='decoration-dotted underline'>
                                          <svg width="32" height="32" viewBox="0 0 20 20" focusable="false" className=" inline-block absolute top-[0.5rem] right-[0.5rem] stroke-[#ff7442] h-[1em] w-[1em] text-[1.7rem] text-[rgb(242,242,242)] shrink-0 "><path fill="currentColor" fillRule="evenodd" d="M10 4.543c-1.25-.98-2.965-1.245-4.432-.895C3.678 4.1 2 5.621 2 8.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C15.12 14.18 18 11.49 18 8.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895" clipRule="evenodd"></path></svg>
                                          </abbr>
                                           <span className='absolute px-2 uppercase text-xs rounded-sm font-bold bg-[#c6f6d5] text-[#22543d] opacity-90 bottom-2 right-2 align-middle'>New</span>
                                          </div>
                                       
    
                              </div>

                              <div className='w-full'>
                                <p className='text-sm font-semibold text-[#595959] my-2'>{maid.postedOn}</p>
                                <h2 className='text-base md:text-lg font-bold leading-[1.33]'>{(maid.name)+ (maid.caste)+(maid.desireJob)+"Maid in"+(maid.Nationality)}</h2>
                                <div className='flex items-center gap-[0.5rem]'>
                                  <div className='w-full flex items-center justify-between gap-[0.5rem]'>
                                     <p className='text-sm font-medium bg-[#ffe1e1] p-2 rounded-md'>{maid.experience} Years+ experience</p>
                                     <div className='flex flex-shrink-0 items-center gap-[0.5rem] border-2 border-[rgb(40,153,255)] rounded-[50px] pl-[4px] text-[1rem] lg:text-[0.9rem]'>
                                      <p>Verified <svg width="32" height="32" viewBox="0 0 16 16" focusable="false" className="w-[1em] h-[1em] text-[1.5rem]  flex-shrink-0 text-[rgb(40,153,255)] inline-block lg:text-[1.3em] "><path fill="currentColor" d="M8.38 14.72h-.71L6 13H3.53L3 12.5v-2.42L1.31 8.36v-.71L3 5.93V3.5l.53-.5H6l1.67-1.71h.71L10.1 3h2.43l.5.49v2.44l1.71 1.72v.71L13 10.08v2.42l-.5.5h-2.4zm-1.65-4.24h.71l3.77-3.77L10.5 6L7.09 9.42L5.71 8.04L5 8.75z"></path></svg></p>
                                     </div>
                                  </div>
                                </div>
                              </div>


                                 <hr  className='w-full h-[0px] opacity-60 border-[0px_0px_1px] border-black'/>

                                 <div className='w-full'>
                                  <p className='text-sm md:text-base text-[#727272]'>Desired monthly salary (AED)</p>
                                  <b className='text-sm md:text-base text-[#595959] font-bold'>{maid.salary}</b>
                                 </div>

                                 <hr  className='w-full h-[0px] opacity-60 border-[0px_0px_1px] border-black'/>


                                 <div className='grid grid-cols-[repeat(2,minmax(0px,1fr))] w-full'>
                                    <div>
                                      <p className='text-sm md:text-base text-[#727272]'>Nationality</p>
                                      <b className='text-sm md:text-base text-[#595959] font-bold'>{maid.Nationality}</b>
                                    </div>
                                    <div>
                                      <p className='text-sm md:text-base text-[#727272]'>Desired job</p>
                                      <b className='text-sm md:text-base text-[#595959] font-bold'>{maid.desireJob}</b>
                                    </div>
                                 </div>

                        

                            </div>
                      
                      </div>
                      )
                    })
                  }
                  </div>
                 

                </section>

                <div className='flex items-center justify-center'>
                   <div className='flex items-center justify-center p-[2rem]'>
                     <div className='flex border border-[rgb(208,213,221)] rounded-md'>

                        <div className='flex items-center justify-center border border-l-0 w-7 h-8 opacity-50 cursor-not-allowed'> 
                        <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14 7l-5 5l5 5z"></path></svg>
                        </div>

                        <div className='flex items-center justify-center border border-l-[rgb(208,213,221)] bg-[rgb(249,250,251)]  w-7 h-8 opacity-50 cursor-not-allowed'> 
                          <p className='text-xs text-[rgb(29,41,57)]'>1</p>
                        </div>

                        <div className='flex items-center justify-center border border-l-[rgb(208,213,221)] bg-[rgb(255,255,255)]  w-7 h-8 opacity-100 cursor-pointer'> 
                          <p className='text-xs text-[rgb(29,41,57)]'>2</p>
                        </div>

                        <div className='flex items-center justify-center border border-l-[rgb(208,213,221)] bg-[rgb(255,255,255)]  w-7 h-8 opacity-100 cursor-pointer'> 
                          <p className='text-xs text-[rgb(29,41,57)]'>...</p>
                        </div>

                        <div className='flex items-center justify-center border border-l-[rgb(208,213,221)] bg-[rgb(255,255,255)]  w-7 h-8 opacity-100 cursor-pointer'> 
                          <p className='text-xs text-[rgb(29,41,57)]'>33</p>
                        </div>

                        <div className='flex items-center justify-center border border-l-[rgb(208,213,221)] bg-[rgb(255,255,255)]  w-7 h-8 opacity-100 cursor-pointer'> 
                          <p className='text-xs text-[rgb(29,41,57)]'>34</p>
                        </div>

                        <div className='flex items-center justify-center border border-r-0 w-7 h-8 opacity-100 cursor-pointer'> 
                        <svg className='rotate-180' width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14 7l-5 5l5 5z"></path></svg>

                        </div>

                     </div>
                   </div>
                </div>





        </div>
      
    </section>
  )
}

export default SearchMaid
