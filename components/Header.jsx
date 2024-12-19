import Navbar from "./Navbar"
import Link from "next/link"
import Image from "next/image"
import MobileNav from "./MobileNav"



const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white z-[999] shadow-lg w-full xl:px-[var(--padding-page)]  mx-auto fixed ">
       {/* logo */}
       <Link href="/"> 
        <Image src="/assets/pickmymaidLogo.png" alt="logo" width={180} height={180} className="cursor-pointer w-auto h-auto " />
      </Link>

      {/* desktop nav and buttons */}
      <div className="hidden xl:flex gap-5" >
        <Navbar/>
        <div className="flex gap-5">
        <Link href="/login">
        <button className="bg-[#ff7442] px-5 py-4 rounded-md text-white font-bold hover:bg-[#e76a3c]">Login</button>
        </Link>
        <Link href="/register">
        <button className="bg-[#ff7442] px-5 py-4 rounded-md text-white font-bold hover:bg-[#e76a3c]">Client Register</button>
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
