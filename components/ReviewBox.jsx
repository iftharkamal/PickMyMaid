// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import "swiper/swiper.min.css";
// import "swiper/css/autoplay";
// import React,{ useState, useEffect } from "react";

 

  




// const reviews = [
//   {
//     words:
//       "Easiest and fastest way to get a maid without paying ten thousands of service fees to maids companies for just getting maid from her country.I have hired an amazing maid after 3 interviews with other maids , each days tons of new options added to the list which makes it faster to find the suitable maid. Highly recommended if you don’t want to waste huge amount of money to just find a maid",
//     name: "Ahmed Mahmoud",
//     role: "Employer",
//     photo: "/assets/ahmed.png",
//   },
//   {
//     words:
//       "We used Pickmymaid to hire a live in maid, and it was easy to find a qualified maid within two days. The registration fee is the only cost, and there are no other hidden fees. thank you pickmymaid",
//     name: "Riyas",
//     role: "Employer",
//     photo: "/assets/riyas.jpeg",
//   },
//   {
//     words:
//       "Finding a maid in UAE was tough before, but now it's simple with profile lists. Easy hiring process. I'm super satisfied😊",
//     name: "Jo Anz",
//     role: "Employer",
//     photo: "/assets/jo.jpeg",
//   },
//   {
//     words:
//       "Its really amazing finding maids on PickMyMaid with video profiles and nationality sorting made my search effortless.",
//     name: "Savad",
//     role: "Employer",
//     photo: "/assets/savad.jpeg",
//   },
//   {
//     words:
//       "I'm so glad I found Pickmymaid for finding my nanny. The process was smooth,quick and i didn't paid any extra agency fees. Highly recommend their user friendly solution, Thanks Pickmymaid",
//     name: "Nija Sherin",
//     role: "Employer",
//     photo: "/assets/nija.jpeg",
//   },
//   {
//     words:
//       "Thank you so much..pickmymaid... Great apps and service one time call and job joining very good experience thank you so much👍😍💐",
//     name: "Nisha soni",
//     role: "Maid",
//     photo: "/assets/nisha.png",
//   },
//   {
//     words:
//       "I found my Filipina Nanny from pickmymaid thanks for the easy process🙏🏼😊",
//     name: "Rahman",
//     role: "Employer",
//     photo: "/assets/rahman.jpeg",
//   },
//   {
//     words:
//       "It's very nic app. Within 24hours . My sister get job. I heart fulley thank you so much pickmymaid.",
//     name: "Malli p",
//     role: "Maid",
//     photo: "/assets/malli.jpeg",
//   },
// ];

// const ReviewBox = () => {
  
//   const [isMounted, setIsMounted] = useState(false);

//   // Ensure the component only renders on the client
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null; // Render nothing during SSR
//   }


//   return (
//     <Swiper
//       slidesPerView={1}
//       spaceBetween={20}
//       onSlideChange={() => console.log("slide changed")}
//       onSwiper={(swiper) => console.log(swiper)}
//       breakpoints={{
//         640: { slidesPerView: 2 },
//         1024: { slidesPerView: 3 },
//       }}
//       modules={[Autoplay]}
//       autoplay={{ delay: 1500, disableOnInteraction: false }}
//       loop={true}
//     >
//       {reviews.map((review, index) => {
//         <SwiperSlide key={index}>
//           <div className="px-2 py-4">
//             <div className="mb-2 flex gap-2 items-center ">*****</div>
//             <div className="mb-7 text-base">
//               <p>{review.words}</p>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="mb-2">
//                 <p className="font-semibold ">{review.name}</p>
//                 <p className="text-[#595959]">{review.role}</p>
//               </div>
//               <div className="w-[3rem] h-[3rem] rounded-full">
//                 <img src={review.photo} alt="" />
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>;
//       })}
//     </Swiper>
//   );
// };

// export default ReviewBox;













"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import React, { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";


const reviews = [
  {
    words: "Easiest and fastest way to get a maid without paying ten thousands of service fees to maids companies for just getting maid from her country.I have hired an amazing maid after 3 interviews with other maids , each days tons of new options added to the list which makes it faster to find the suitable maid. Highly recommended if you don’t want to waste huge amount of money to just find a maid",
    name: "Ahmed Mahmoud",
    role: "Employer",
    photo: "/assets/ahmed.png",
  },
  {
    words: "We used Pickmymaid to hire a live in maid, and it was easy to find a qualified maid within two days. The registration fee is the only cost, and there are no other hidden fees. thank you pickmymaid",
    name: "Riyas",
    role: "Employer",
    photo: "/assets/riyas.jpeg",
  },
  {
        words:
          "Finding a maid in UAE was tough before, but now it's simple with profile lists. Easy hiring process. I'm super satisfied😊",
        name: "Jo Anz",
        role: "Employer",
        photo: "/assets/jo.jpeg",
      },
      {
        words:
          "Its really amazing finding maids on PickMyMaid with video profiles and nationality sorting made my search effortless.",
        name: "Savad",
        role: "Employer",
        photo: "/assets/savad.jpeg",
      },
      {
        words:
          "I'm so glad I found Pickmymaid for finding my nanny. The process was smooth,quick and i didn't paid any extra agency fees. Highly recommend their user friendly solution, Thanks Pickmymaid",
        name: "Nija Sherin",
        role: "Employer",
        photo: "/assets/nija.jpeg",
      },
      {
        words:
          "Thank you so much..pickmymaid... Great apps and service one time call and job joining very good experience thank you so much👍😍💐",
        name: "Nisha soni",
        role: "Maid",
        photo: "/assets/nisha.png",
      },
      {
        words:
          "I found my Filipina Nanny from pickmymaid thanks for the easy process🙏🏼😊",
        name: "Rahman",
        role: "Employer",
        photo: "/assets/rahman.jpeg",
      },
      {
        words:
          "It's very nic app. Within 24hours . My sister get job. I heart fulley thank you so much pickmymaid.",
        name: "Malli p",
        role: "Maid",
        photo: "/assets/malli.jpeg",
      },

];

const ReviewBox = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing during SSR
  }

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      onSlideChange={() => console.log("slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Autoplay]}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={Infinity} // Ensures smooth looping
      
    >

      {reviews.map((review) => (
        <SwiperSlide key={review.name} className=" p-2 h-auto"> {/* Unique key for each slide */}

          {/* <div className="px-2 py-4 mr-30px lg:px-[var(--padding-page)]">
            <div className="mb-2 flex gap-2 items-center">*****</div>
            <div className="mb-7 text-base">
              <p>{review.words}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="mb-2">
                <p className="font-semibold">{review.name}</p>
                <p className="text-[#595959]">{review.role}</p>
              </div>
              <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden">
                <img
                  src={review.photo}
                  alt={`${review.name}'s photo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div> */}

          <div className="  flex flex-col justify-between  items-start w-full h-full gap-12 p-8 rounded-md bg-white select-none shadow-lg">
            {/* <div className="flex flex-col items-start w-full h-full gap-12 p-8 rounded-md bg-white select-none shadow-lg "> */}
              <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-[2rem]">
                  <IoStar className=" overflow-hidden w-full h-full flex items-center justify-center text-[#F8A401] inset-0"/>
                  <IoStar className=" overflow-hidden w-full h-full flex items-center justify-center text-[#F8A401] inset-0"/>
                  <IoStar className=" overflow-hidden w-full h-full flex items-center justify-center text-[#F8A401] inset-0"/>
                  <IoStar className=" overflow-hidden w-full h-full flex items-center justify-center text-[#F8A401] inset-0"/>
                  <IoStar className=" overflow-hidden w-full h-full flex items-center justify-center text-[#F8A401] inset-0"/>
                {/* <svg className="absolute overflow-hidden w-full h-full flex items-center justify-center" width="33" height="33" viewBox="0 0 33 33" fill="none"><g clipPath="url(#clip0_48_1819)"><path d="M16.0423 23.0877L24.3041 28.0741L22.1116 18.676L29.4109 12.3527L19.7989 11.5372L16.0423 2.67383L12.2857 11.5372L2.67372 12.3527L9.97297 18.676L7.78052 28.0741L16.0423 23.0877Z" fill="#F8A401"></path></g><defs><clipPath id="clip0_48_1819"><rect width="32.0846" height="32.0846" fill="white"></rect></clipPath></defs></svg> */}
              </div>
              <p className="text-sm md:text-base">
                {review.words}
              </p>
              </div>

              <div className="flex justify-between items-center gap-2 w-full mt-auto">
                <div className="flex flex-col items-start">
                  <p className="text-sm lg:text-base font-semibold text-black">{review.name}</p>
                  <p className="text-sm lg:text-base  text-[#595959]">{review.role}</p>
                  </div> 

                  <span className="relative w-12 h-12 flex items-center justify-center rounded-full">
                    <img className="w-full h-full object-cover rounded-full" src={review.photo} alt="" />
                  </span>

              </div>

            {/* </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewBox;
