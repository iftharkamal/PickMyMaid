import Image from "next/image"
import MaidsBox from "./MaidsBox"



const AvailableField = () => {
  return (
    <section className="p-2 lg:p-5 mb-10">
        <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <h3 className="text-2xl lg:text-5xl font-bold mb-3 text-[var(--headline-color)]">Available Maids / Nannies in UAE</h3>
              <p className="bg-orange-600 text-white p-1 rounded-sm flex gap-2">9 <span>1</span><span>0</span></p>  
            </div>

            <div className="bg-black/5 p-2 flex flex-col items-center justify-center rounded-t-lg py-5">

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
                <div className="mb-4 p-4">
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
