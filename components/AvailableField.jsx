import Image from "next/image"
import MaidsBox from "./MaidsBox"
import Title from "./Title"



const AvailableField = () => {
  

  return (
    <section className="p-2 lg:p-5 mb-10 lg:pt-24 lg:px-[var(--padding-page)]">
        <div>
            <div className="flex flex-col items-center justify-center mb-5">
                <Title name="available maids / nannies in UAE"/>
              <div className="flex items-center gap-1 mb-4">
                <div className=" w-8 bg-[#ff7442] rounded-sm">
                   <h2 className=" flex items-center justify-center w-full h-full inset-0 text-[1.2rem] lg:text-[1.7rem] text-white  font-medium">9</h2>
                </div>
                <div className=" w-8 bg-[#ff7442] rounded-[2px]">
                   <h2 className=" flex items-center justify-center w-full h-full inset-0 text-[1.2rem] lg:text-[1.7rem] text-white font-medium">1</h2>
                </div>
                <div className=" w-8 bg-[#ff7442] rounded-[2px]">
                   <h2 className=" flex items-center justify-center w-full h-full inset-0 text-[1.2rem] lg:text-[1.7rem] text-white font-medium">0</h2>
                </div>
              </div>

            </div>

            <div className="bg-black/5  flex flex-col items-center justify-center rounded-t-lg py-5 ">

                 {/* workers country-wise section */}
                <div className="bg-white p-2 rounded-lg flex flex-wrap gap-2 lg:gap-6 whitespace-nowrap items-center justify-center max-w-[620px] lg:max-w-[1200px] lg:px-10 lg:py-4 mb-5">

                   <div className="flex gap-2 bg-black/5 px-4 py-1 text-sm items-center justify-center lg:text-lg lg:gap-4">
                    <Image src="/assets/filipinoFlag.png" alt="country" width={35} height={10} className="w-auto h-auto"/>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Filipino</p>
                        <p className="text-xs">453 professionals</p>
                    </div>
                   </div>
                   <div className="flex gap-2 bg-black/5 px-4 py-1 text-sm items-center justify-center  lg:text-lg  lg:gap-4">
                    <Image src="/assets/indianFlag.png" alt="country" width={35} height={10} className="w-auto h-auto"/>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Indian</p>
                        <p className="text-xs">139 professionals</p>
                    </div>
                   </div>
                   <div className="flex gap-2 bg-black/5 px-4 py-1 text-sm items-center justify-center   lg:text-lg  lg:gap-4">
                    <Image src="/assets/nepalFlag.png" alt="country" width={35} height={10} className="w-auto h-auto"/>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Nepali</p>
                        <p className="text-xs">140 professionals</p>
                    </div>
                   </div>
                   <div className="flex gap-2 bg-black/5 px-4 py-1 text-sm items-center justify-center   lg:text-lg lg:gap-4">
                    <Image src="/assets/srilankaFlag.png" alt="country" width={35} height={10} className="w-auto h-auto" />
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Sri Lankan</p>
                        <p className="text-xs">56 professionals</p>
                    </div>
                   </div>
                   <div className="flex gap-2 bg-black/5 px-4 py-1 text-sm items-center justify-center   lg:text-lg lg:gap-4">
                    <Image src="/assets/indonesiaFlag.png" alt="country" width={35} height={10} className="w-auto h-auto"/>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-bold text-md">Indonesian</p>
                        <p className="text-xs">11 professionals</p>
                    </div>
                   </div>

                </div>

                <h4 className="text-black/80 px-2 py-2 rounded-md bg-white font-bold mb-5">Updated on November 17, 2024</h4>

            </div>


                {/* workers details box section */}
                <div className="bg-black/5 pb-4 rounded-b-lg">
                <div className="mb-4 py-5 px-9">
                <MaidsBox/>
                </div>


                {/* button */}
                <div className="flex justify-center">
                <button className="bg-orange-600 text-white font-bold px-2 py-2 rounded-lg ">View More</button>
                </div>
                </div>
        </div>
    </section>
  )
}

export default AvailableField
