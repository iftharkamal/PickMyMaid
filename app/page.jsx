import AddBanner from "@/components/AddBanner"
import AvailableField from "@/components/AvailableField"
import Image from "next/image"
import {CiSearch} from "react-icons/ci"
import Testimonials from "@/components/Testimonials"

const Home = () => {
  return (
    <section className="py-4" >
      <div>


        {/* mobile view */}
        <div className="md:hidden w-full">
           
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
          <div className="hidden md:flex gap-5 justify-center p-5">

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
              <Image src="/assets/pickmymaidhomepic.png" alt="home-bg-pic" width={500} height={100} className="w-auto h-auto"/>
            </div>

          </div>

        </div>
        <AddBanner/>
        <AvailableField/>
        <Testimonials/>
    </section>
  )
}

export default Home
