"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IoHomeOutline,
  IoCallOutline,
  IoLogInOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { MdAppRegistration, MdOutlineFavoriteBorder } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const menus = [
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
    path: "/pricing",
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
];

const menuOpen = (e) => {
  e.target.class.remove("menuContent");
};

const MobileNav = () => {
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed z-50 bottom-0 w-full right-0">
      {/* menu content */}
      <div>
        {menu ? (
          <div className="relative bottom-0 ">
            <div className="flex flex-col py-6 bg-white/90 shadow-lg border-t">
              {/* menu-list */}
              <div className="flex flex-wrap text-sm gap-4 whitespace-nowrap items-center justify-center mb-5">
                {menus.map((menu, index) => {
                  return (
                    <Link
                      href={menu.path}
                      key={index}
                      className={`border border-orange-600 rounded-3xl p-2 flex  items-center justify-center ${
                        menu.path === pathname && "text-orange-600"
                      }`}
                    >
                      {menu.name}
                    </Link>
                  );
                })}
                {/* language btn */}
                <button></button>
              </div>

              {/* buttons */}
              <div className="flex gap-5 items-center justify-center">
                <Link href="/login">
                  <button className="bg-[#ff7442] px-3 py-5 rounded-md text-white font-bold hover:bg-[#e76a3c]">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="bg-[#ff7442] px-3 py-5 rounded-md text-white font-bold hover:bg-[#e76a3c]">
                    Client Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/*navbar  */}
      <div className=" bg-orange-600 py-5">
        <div className="grid grid-cols-5 gap-2 text-white text-md">
          <div className="flex flex-col items-center justify-center">
            <IoHomeOutline className="text-2xl" />
            <p>Home</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <MdOutlineFavoriteBorder className="text-2xl" />
            <p>Favorites</p>
          </div>
          <div className="flex flex-col items-center justify-center -mt-[1.5rem] ">
            <div className="border border-white rounded-full w-[60px] h-[60px] flex items-center justify-center">
              <IoMenuOutline
                onClick={() => setMenu(!menu)}
                className="text-4xl   "
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoCallOutline className="text-2xl" />
            <p>Call</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoLogInOutline className="text-2xl" />
            <p>Register</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
