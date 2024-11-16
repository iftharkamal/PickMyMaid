import AddBanner from "@/components/AddBanner"
import Image from "next/image"
import {CiSearch} from "react-icons/ci"

const Home = () => {
  return (
    // <section className="py-4 flex flex-col mx-auto">
    //   <div className="flex flex-col lg:flex-row">

      
    //   <div className="  mx-auto">
    //   {/* Text section */}
    //   <div className="flex flex-col  md:items-start md:text-left ">
    //    <h1 className="text-[25px]  leading-8 max-w-[380px] font-bold text-center mb-2">Are you looking for a Maid or Nanny in UAE?</h1>
    //    <p className="text-base max-w-[370px] text-center">Register now, and save additional charges that you spend on agencies.</p>
    //   {/* desktop and tab input area */}
    //   <div className="hidden  md:flex gap-3 md:w-[150%]">
    //     <input className="w-full border border-inherit rounded-md py-3 px-2 "  type="text"  placeholder="Search by type eg.Cook Cleaning" />
    //     <button className="flex gap-2 text-lg w-full items-center justify-center rounded-md py-3 px-2 bg-orange-600 md:w-[220px]"><CiSearch/><span>Search</span></button>
    //   </div>
    //   </div>
    //    {/*mobile input area */}
    //    <div className="flex flex-col gap-4 items-center relative min-w-[500px] top-[390px] z-10 md:hidden">
    //     <div className="w-full" >
    //     <input className="w-full border border-inherit rounded-md py-3 px-2" type="text" placeholder="Search by type eg.Cook Cleaning"/>
    //     </div>
    //     <button className="flex gap-2 text-white text-lg w-full items-center justify-center rounded-md py-3 px-2 bg-orange-600"><CiSearch/><span>Search</span></button>
    //    </div>

    //   </div>








    //   {/* image section */}

    //   {/* mobile img */}
    //   <div className="relative bottom-20 mx-auto -z-10 md:hidden">
    //    <Image src="/assets/pickmymaidhomepic.png" alt="homepic" width={400} height={400} className=" z-10 "/>
    //   </div>

    //   {/* desktop image */}
    //   <div>
    //    <Image src="/assets/pickmymaidhomepic.png" alt="homepic" width={400} height={400} className="hidden lg:block"/>
    //   </div>


    //   </div>
    //   <AddBanner/>
    // </section>
    

    <section className="py-4" >
      <div>


        {/* mobile view */}
        <div className="md:hidden w-full">
           
          <div className="relative z-10 px-2 text-center"> 
            <h1 className="text-3xl font-bold">Are you looking for a Maid or Nanny in UAE?</h1>
            <p className="text-center">Register now, and save additional charges that you spend on agencies.</p>
          </div>
         
          {/* image */}
          <Image src="/assets/pickmymaidhomepicmobile.png" alt="home-bg-pic" width={350} height={300} className="relative -z-10 left-2 mx-auto"/>

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
              <Image src="/assets/pickmymaidhomepic.png" alt="home-bg-pic" width={500} height={100}/>
            </div>

          </div>

        </div>
        <AddBanner/>
    </section>
  )
}

export default Home
