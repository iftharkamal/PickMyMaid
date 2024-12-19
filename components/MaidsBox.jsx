"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";

export const maids = [
  {
    image: "/assets/maid3.jpg",
    name: "Nilanjana",
    caste: "Hindu",
    Nationality: "Srilanka",
    desireJob: "Live in",
    experience: "3",
    salary: " 2500 - 3000 AED",
    postedOn: "16-11-2024",
  },
  {
    image: "/assets/maid2.jpg",
    name: "Widiya",
    caste: "Muslim",
    Nationality: "Dubai",
    desireJob: "Live Out",
    experience: "6.5",
    salary: " 2200 - 2500 AED",
    postedOn: "14-19-2024",
  },
  {
    image: "/assets/maid3.jpg",
    name: "Merly",
    caste: "Christian",
    Nationality: "Filippino",
    desireJob: "Live in",
    experience: "2",
    salary: " 2500 - 3000 AED",
    postedOn: "16-11-2024",
  },
  {
    image: "/assets/maid2.jpg",
    name: "aravind",
    caste: "Hindu",
    Nationality: "India",
    desireJob: "Live in",
    experience: "3",
    salary: " 2500 - 3000 AED",
    postedOn: "16-11-2024",
  },
  {
    image: "/assets/maid3.jpg",
    name: "kumar",
    caste: "Hindu",
    Nationality: "India",
    desireJob: "Live in",
    experience: "3",
    salary: " 2500 - 3000 AED",
    postedOn: "16-11-2024",
  },
  {
    image: "/assets/maid2.jpg",
    name: "kumar",
    caste: "Hindu",
    Nationality: "India",
    desireJob: "Live in",
    experience: "3",
    salary: " 2500 - 3000 AED",
    postedOn: "16-11-2024",
  },
  {
    image: "/assets/maid3.jpg",
    name: "kumar",
    caste: "Hindu",
    Nationality: "India",
    desireJob: "Live in",
    experience: "3",
    salary: " 2500 - 3000 AED",
    postedOn: "16-11-2024",
  },
  {
    image: "/assets/maid2.jpg",
    name: "kumar",
    caste: "Hindu",
    Nationality: "India",
    desireJob: "Live in",
    experience: "3",
    salary: " 2500 - 3000 AED",
    postedOn: "16-11-2024",
  },
  {
    image: "/assets/maid3.jpg",
    name: "kumar",
    caste: "Hindu",
    Nationality: "India",
    desireJob: "Live in",
    experience: "3",
    salary: " 2500 - 3000 AED",
    postedOn: "16-11-2024",
  },
];

const MaidsBox = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log("slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
        2240: { slidesPerView: 7 },
      }}
      modules={[Autoplay]}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={Infinity}
    >
      {maids.map((maid, index) => (
        <SwiperSlide key={index}>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MaidsBox;
