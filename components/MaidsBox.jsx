"use client"


import React, { createContext } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";
import 'swiper/swiper.min.css';
import "swiper/css/autoplay";


const maids = [
    {
        image : "/assets/maid3.jpg",
        name : "Nilanjana",
        caste : "Hindu",
        Nationality : "Srilanka",
        desireJob: "Live in",
        experience : "3",
        salary :" 2500 - 3000 AED",
        postedOn : "16-11-2024"
    },
    {
        image : "/assets/maid2.jpg",
        name : "Widiya",
        caste : "Muslim",
        Nationality : "Dubai",
        desireJob: "Live Out",
        experience : "6.5",
        salary :" 2200 - 2500 AED",
        postedOn : "14-19-2024"
    },
    {
        image : "/assets/maid3.jpg",
        name : "Merly",
        caste : "Christian",
        Nationality : "Filippino",
        desireJob: "Live in",
        experience : "2",
        salary :" 2500 - 3000 AED",
        postedOn : "16-11-2024"
    },
    {
        image : "/assets/maid2.jpg",
        name : "aravind",
        caste : "Hindu",
        Nationality : "India",
        desireJob: "Live in",
        experience : "3",
        salary :" 2500 - 3000 AED",
        postedOn : "16-11-2024"
    },
    {
        image : "/assets/maid3.jpg",
        name : "kumar",
        caste : "Hindu",
        Nationality : "India",
        desireJob: "Live in",
        experience : "3",
        salary :" 2500 - 3000 AED",
        postedOn : "16-11-2024"
    },
    {
        image : "/assets/maid2.jpg",
        name : "kumar",
        caste : "Hindu",
        Nationality : "India",
        desireJob: "Live in",
        experience : "3",
        salary :" 2500 - 3000 AED",
        postedOn : "16-11-2024"
    },
    {
        image : "/assets/maid3.jpg",
        name : "kumar",
        caste : "Hindu",
        Nationality : "India",
        desireJob: "Live in",
        experience : "3",
        salary :" 2500 - 3000 AED",
        postedOn : "16-11-2024"
    },
    {
        image : "/assets/maid2.jpg",
        name : "kumar",
        caste : "Hindu",
        Nationality : "India",
        desireJob: "Live in",
        experience : "3",
        salary :" 2500 - 3000 AED",
        postedOn : "16-11-2024"
    },
    {
        image : "/assets/maid3.jpg",
        name : "kumar",
        caste : "Hindu",
        Nationality : "India",
        desireJob: "Live in",
        experience : "3",
        salary :" 2500 - 3000 AED",
        postedOn : "16-11-2024"
    },
]




const MaidsBox = () => {
  return (
   
    <Swiper
    spaceBetween={30}
    slidesPerView={1}
    onSlideChange={() => console.log("slide changed")}
    onSwiper={(swiper) => console.log(swiper)}
    breakpoints={{
        640: {slidesPerView:2,},
        1024 : {slidesPerView : 3},
        1280: {slidesPerView: 4,},
        2240: {slidesPerView:7,},
    }}
    modules={[Autoplay]}
    autoplay = {{delay:1500,disableOnInteraction:false}}
    loop = {Infinity}
    
  >
    {maids.map((maid,index) =>(
        <SwiperSlide  key={index} >
            <div className='p-2 border border-orange-600 rounded-tl-3xl rounded-br-3xl'>
                <div className='flex items-center justify-center mb-3 '>
                    <Image src={maid.image} alt={maid.name} width={256} height={1} className='rounded-tr-3xl rounded-bl-3xl w-auto h-auto'/>
                </div>
                <div className='flex flex-col  mb-2 border-b border-b-black/85'>
                    <p className='text-black/60 text-sm font-semibold mb-3'>posted on {maid.postedOn}</p>
                    <h5 className='text-lg font-bold'>{maid.name} {maid.caste} {maid.Nationality} {maid.desireJob}</h5>
                    <div className='flex justify-between mb-3'>
                        <p className='bg-[#ffe1e1] flex items-center rounded-md px-2 text-xs'>{maid.experience} Years+ experience</p>
                        <div className='flex gap-2 items-center border-2 text-sm border-blue-700 rounded-2xl px-2'><p>Verified</p><svg width="32" height="32" viewBox="0 0 16 16" focusable="false" className="text-blue-700"><path fill="currentColor" d="M8.38 14.72h-.71L6 13H3.53L3 12.5v-2.42L1.31 8.36v-.71L3 5.93V3.5l.53-.5H6l1.67-1.71h.71L10.1 3h2.43l.5.49v2.44l1.71 1.72v.71L13 10.08v2.42l-.5.5h-2.4zm-1.65-4.24h.71l3.77-3.77L10.5 6L7.09 9.42L5.71 8.04L5 8.75z"></path></svg></div>
                    </div>
                </div>
                <div className='border-b border-b-black/85 mb-2'>
                    <p className='text-black/55 text-sm'>Desired monthly salary (AED)</p>
                    <p className='font-bold text-sm mb-2 text-black/55'>{maid.salary}</p>
                </div>
                <div className='flex gap-10'> 
                    <div>
                        <p className='text-black/55 text-sm'>Nationality</p>
                        <p className='font-bold text-sm mb-2 text-black/55'>{maid.Nationality}</p>
                    </div>
                    <div>
                        <p className='text-black/55 text-sm'>Desired job</p>
                        <p className='font-bold text-sm mb-2 text-black/55'>{maid.desireJob}</p>
                    </div>
                </div>
            </div>
            </SwiperSlide>
    ))}
  </Swiper>


  )
}

export default MaidsBox
