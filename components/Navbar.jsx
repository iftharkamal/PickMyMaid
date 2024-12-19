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
        path: "/SearchMaid",
    },
    
    {
        name: "Pricing",
        path: "/Pricing",
    },
    
    {
        name: "How it works",
        path: "/Howitworks",
    },
    
    {
        name: "About Us",
        path: "/AboutUs",
    },
    
    {
        name: "Favourites",
        path: "/Favourites",
    },
    
    {
        name: "Contact Us",
        path: "/ContactUs",
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
