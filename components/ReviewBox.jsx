"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import React, { createContext } from "react";





const reviews = [
  {
    words:
      "Easiest and fastest way to get a maid without paying ten thousands of service fees to maids companies for just getting maid from her country.I have hired an amazing maid after 3 interviews with other maids , each days tons of new options added to the list which makes it faster to find the suitable maid. Highly recommended if you don’t want to waste huge amount of money to just find a maid",
    name: "Ahmed Mahmoud",
    role: "Employer",
    photo: "/assets/ahmed.png",
  },
  {
    words:
      "We used Pickmymaid to hire a live in maid, and it was easy to find a qualified maid within two days. The registration fee is the only cost, and there are no other hidden fees. thank you pickmymaid",
    name: "Riyas",
    role: "Employer",
    photo: "/assets/riyas.jpeg",
  },
  {
    words:
      "Finding a maid in UAE was tough before, but now it's simple with profile lists. Easy hiring process. I'm super satisfied😊",
    name: "Jo Anz",
    role: "Employer",
    photo: "jo.jpeg",
  },
  {
    words:
      "Its really amazing finding maids on PickMyMaid with video profiles and nationality sorting made my search effortless.",
    name: "Savad",
    role: "Employer",
    photo: "savad.jpeg",
  },
  {
    words:
      "I'm so glad I found Pickmymaid for finding my nanny. The process was smooth,quick and i didn't paid any extra agency fees. Highly recommend their user friendly solution, Thanks Pickmymaid",
    name: "Nija Sherin",
    role: "Employer",
    photo: "nija.jpeg",
  },
  {
    words:
      "Thank you so much..pickmymaid... Great apps and service one time call and job joining very good experience thank you so much👍😍💐",
    name: "Nisha soni",
    role: "Maid",
    photo: "nisha.png",
  },
  {
    words:
      "I found my Filipina Nanny from pickmymaid thanks for the easy process🙏🏼😊",
    name: "Rahman",
    role: "Employer",
    photo: "rahman.jpeg",
  },
  {
    words:
      "It's very nic app. Within 24hours . My sister get job. I heart fulley thank you so much pickmymaid.",
    name: "Malli p",
    role: "Maid",
    photo: "malli.jpeg",
  },
];

const ReviewBox = () => {
  

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      onSlideChange={() => console.log("slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Autoplay]}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={Infinity}
    >
      {reviews.map((review, index) => {
        <SwiperSlide key={index}>
          <div className="px-2 py-4">
            <div className="mb-2 flex gap-2 items-center ">*****</div>
            <div className="mb-7 text-base">
              <p>{review.words}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="mb-2">
                <p className="font-semibold ">{review.name}</p>
                <p className="text-[#595959]">{review.role}</p>
              </div>
              <div className="w-[3rem] h-[3rem] rounded-full">
                {review.photo}
              </div>
            </div>
          </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default ReviewBox;
