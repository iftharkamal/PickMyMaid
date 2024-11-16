import Navbar from "./Navbar"
import Link from "next/link"
import Image from "next/image"
import MobileNav from "./MobileNav"



const Header = () => {
  return (
    <header className="flex justify-between items-center shadow-lg w-full xl:px-[40px] py-3 mx-auto ">
       {/* logo */}
       <Link href="/"> 
        <Image src="/assets/pickmymaidLogo.png" alt="logo" width={200} height={200} className="cursor-pointer" />
      </Link>

      {/* desktop nav and buttons */}
      <div className="hidden xl:flex gap-5" >
        <Navbar/>
        <div className="flex gap-5">
        <Link href="/login">
        <button className="bg-[#ff7442] px-3 py-5 rounded-md text-white font-bold hover:bg-[#e76a3c]">Login</button>
        </Link>
        <Link href="/register">
        <button className="bg-[#ff7442] px-3 py-5 rounded-md text-white font-bold hover:bg-[#e76a3c]">Client Register</button>
        </Link>
         {/* language button */}
         <div>

         </div>

        </div>
      </div>

      {/* mobile nav*/}
      <div className="xl:hidden">
        <MobileNav/>
      </div>

    </header>
  )
}

export default Header
