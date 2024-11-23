
import {IoLogoWhatsapp,IoLogoFacebook,IoLogoYoutube,IoLogoLinkedin} from "react-icons/io"
import {BsTwitterX} from "react-icons/bs"
import {RiInstagramFill} from "react-icons/ri"
import {FaFacebook} from "react-icons/fa"



const Footer = () => {
  return (
    <footer className="bg-[#ff7442] p-[20px_18px] lg:p-[32px_128px] text-white">

        <div className="grid gap-[2rem] lg:gap-[6rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1fr] ">


            <div className="flex flex-col gap-[0.5rem] capitalize">
            <img src="/assets/logowhite.png" alt="" className="w-[10rem] mb-2" />
            <p className="text-[0.8rem] md:text-[0.9rem] mb-2">Pickmymaid is the #1 maid platform in UAE. Access the best profiles with comprehensive information, including recommendations, to find your ideal nanny or maid. Connect directly with them, eliminating costly agency fees and saving thousands of dirhams.</p>
            <div className="flex items-center gap-3">
            <IoLogoWhatsapp width={32} height={32} className="text-[#414042] text-[1.8rem] hover:text-[#150a0d]"/>
            <FaFacebook className="text-[#414042] text-[1.8rem] hover:text-[#150a0d]"/>
            <RiInstagramFill className="text-[#414042] text-[1.8rem] hover:text-[#150a0d]"/>
            <IoLogoYoutube className="text-[#414042] text-[1.8rem] hover:text-[#150a0d]"/>
            <BsTwitterX className="text-[#414042] text-[1.8rem] hover:text-[#150a0d]"/>
            <IoLogoLinkedin className="text-[#414042] text-[1.8rem] hover:text-[#150a0d]"/>
            </div>
            </div>

            <div className=" capitalize mt-3">
            <h2 className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-medium leading-5 border-b-2 border-b-white mb-5 w-max">Support</h2>
            <div className="flex flex-col gap-[0.5rem]">
            <a className="hover:underline" href="">Find Jobs</a>
            <a className="hover:underline" href="/">Home</a>
            <a className="hover:underline" href="">Blogs</a>
            <a className="hover:underline" href="">Find Workers</a>
            <a className="hover:underline" href="/ContactUs">contact us</a>
            <a className="hover:underline" href="">terms and condition</a>
            <a className="hover:underline" href="">privacy policy</a>
            </div>
            </div>


            <div className="capitalize mt-3 ">
            <h2 className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-medium leading-5 border-b-2 border-b-white mb-5 w-max">Find Workers</h2>
            <div className="flex flex-col gap-[0.5rem] ">
            <div className="flex gap-[1.5rem] capitalize">
                <div className="flex flex-col gap-[0.5rem]">
                    <a className="hover:underline" href="">maids</a>
                    <a className="hover:underline" href="">nanny</a>
                    <a className="hover:underline" href="">caregiver</a>
                    <a className="hover:underline" href="">private nurse</a>
                    <a className="hover:underline" href="">private tutor</a>
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                    <a className="hover:underline" href="">postpartum care</a>
                    <a className="hover:underline" href="">cook</a>
                </div>

            </div>
            </div>
            </div>
            

            <div className=" capitalize mt-3">
            <h2 className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-medium leading-5 border-b-2 border-b-white mb-5 w-max">Quick Links</h2>
            <div className="flex flex-col gap-[0.5rem] ">
            <p className="hover:underline">Whatsapp: <a href="tel:+971 566369736">+971 566369736</a></p>
            <p className="hover:underline">Email: <a href="mailto:support@pickmymaid.com">support@pickmymaid.com</a> </p>
            </div>
            </div>


        </div>



        <div className="py-2 mt-10 flex items justify-center">
            <p>© 2024 Pickmymaid. All rights reserved - License Number: 2323666.01</p>
        </div>
      
    </footer>
  )
}

export default Footer
