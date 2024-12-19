import AddBanner from "@/components/AddBanner"
import AvailableField from "@/components/AvailableField"
import Image from "next/image"
import {CiSearch} from "react-icons/ci"
import Testimonials from "@/components/Testimonials"
import AccessPlans from "@/components/AccessPlans"
import AboutUs from "@/components/AboutUs"
import Questions from "@/components/FAQ"
import Review from "@/components/Review"

const Home = () => {
  return (
    <section className="py-4" >
      <div>


        {/* mobile view */}
        <div className="md:hidden w-full mt-24">
           
          <div className="relative z-10 px-2 text-center"> 
            <h1 className="text-3xl font-bold">Are you looking for a Maid or Nanny in UAE?</h1>
            <p className="text-center">Register now, and save additional charges that you spend on agencies.</p>
          </div>
         
          {/* image */}
          <Image src="/assets/pickmymaidhomepicmobile.png" alt="home-bg-pic" width={350} height={300} className="relative -z-10 left-2 mx-auto w-auto h-auto"/>

          {/* input & btn field */}
           <div className="z-20 flex flex-col items-center w-full px-2 py-3 gap-3">
            <input type="text" placeholder="Search by type eg.Cook Cleaning" className="w-full flex px-2 py-3 outline-none border rounded-lg " />
            <button className="flex items-center justify-center gap-2 text-lg w-full py-3 text-white bg-orange-600 rounded-lg "><CiSearch/><span>Search</span></button>
           </div>
        </div>



          {/* desktop and tab view */}
          <div className="hidden md:flex md:justify-between lg:px-[var(--padding-page)] gap-[10%] justify-center p-5 mt-20 ">

            {/* text side */}
          <div className="w-[650px] my-auto"> 
            <h1 className="lg:text-5xl text-4xl font-bold mb-3">Are you looking for a Maid or Nanny in UAE?</h1>
            <p className="text-base">Register now, and save additional charges that you spend on agencies.</p>
            <div className="flex gap-3 mt-3">
            <input type="text" placeholder="Search by type eg.Cook Cleaning" className="w-[300px] border rounded-lg px-2" />
            <button className="flex items-center px-3 py-2 text-white bg-orange-600 gap-1 rounded-lg"><CiSearch/><span>Search</span></button>
            </div>
          </div>

              {/* image side */}
            <div>
              <Image src="/assets/pickmymaidhomepic.png" alt="home-bg-pic" width={350} height={100} className="md:w-[500px] lg:w-[580px]"/>
            </div>

          </div>

        </div>
        <AddBanner/>
        <AvailableField/>
        <Testimonials/>
        <AccessPlans/>
        <Review/>
        <AboutUs/>
        <Questions/>


        <div className="px-8 lg:px-[var(--padding-page)] mb-10">
        <div className="bg-[#ffebde] p-8 flex flex-col lg:flex-row justify-between  gap-5 lg:gap-10 rounded-3xl">
          <div className="flex flex-col items-start justify-center gap-3 order-2 lg:order-none">
            <h2 className="text-[#354860] text-[1rem] md:text-[1.2rem] lg:text-[2rem] font-bold leading-tight">Unlock the power of expert Maid care - simplify your life with ease</h2>
            <p className="text-[#595959] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]">Transform your Maid search today - our innovative platform makes finding the perfect caregiver easy and hassle-free!</p>
            <button className="bg-[#ff7442] px-3 py-4 rounded-lg text-[0.8rem] lg:text-[1rem] font-semibold text-white">View More Maids</button>
          </div>
          <div className="order-1 lg:order-none flex items-center justify-center">
          <iframe className="rounded-lg  top-0 left-0 w-[280px] h-[165px] md:w-[420px] md:h-[230px] lg:w-[556px] lg:h-[333px]" src="https://www.youtube.com/embed/IsDePiBUyhc" title="Discover the #1 platform in the UAE for finding maid, nanny, cook, Driver,Caregiver with PickMyMaid." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
        </div>


    </section>
  )
}

export default Home
