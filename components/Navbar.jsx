"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



const links = [
    {
        name: "Home",
        path: "/",
    },
    
    {
        name: "Search Maid/Nanny",
        path: "/search",
    },
    
    {
        name: "Pricing",
        path: "./Pricing",
    },
    
    {
        name: "How it works",
        path: "/howitworks",
    },
    
    {
        name: "About us",
        path: "/aboutus",
    },
    
    {
        name: "Favourites",
        path: "/favourites",
    },
    
    {
        name: "Contact Us",
        path: "/contactus",
    },
    
]

const Navbar = () => {
    const pathname = usePathname();
  return (
    <nav className="flex gap-5 items-center">
        {links.map((link,index) => {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-[#ff7442] "} hover:underline capitalize font-medium`}>
                {link.name}
            </Link>
        })}
    </nav>
  )
}

export default Navbar
