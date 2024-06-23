import { assets } from "../assets/assets";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
   return (
      <div className="bg-cyan-200 w-full mt-3">
         <div className="flex justify-between xl:max-w-[1280px] mx-auto overflow-hidden px-3 py-2 h-[170px]">
            <div className="w-[70px] md:w-[100px] flex flex-col justify-center  gap-2">
               <img
                  src={assets.logo}
                  alt=""
               />
               <div className="flex gap-4 text-xl md:text-2xl">
                  <FaFacebook className=" cursor-pointer" />
                  <AiFillTwitterCircle className=" cursor-pointer" />
                  <FaPinterest className=" cursor-pointer" />
               </div>
            </div>
            <div className="flex flex-col gap-1">
               <span className="text-sm font-medium">Links</span>
               <Link
                  to="/"
                  className="text-[10px] md:text-sm text-slate-700 cursor-pointer"
               >
                  Home
               </Link>
               <Link
                  to="/"
                  className="text-[10px]  md:text-sm text-slate-700 cursor-pointer"
               >
                  Destination
               </Link>
               <Link
                  to="/"
                  className="text-[10px]  md:text-sm text-slate-700 cursor-pointer"
               >
                  About Us
               </Link>
               <Link
                  to="/"
                  className="text-[10px]  md:text-sm text-slate-700 cursor-pointer"
               >
                  Testimonila
               </Link>
               <Link
                  to="/"
                  className="text-[10px]  md:text-sm text-slate-700 cursor-pointer"
               >
                  Terms & Conditions
               </Link>
            </div>
            <div className=" flex flex-col gap-1">
               <span className="text-sm font-medium">Contact Details</span>
               <p className="text-[10px]  md:text-sm text-slate-700 ">
                  +123 456 789
               </p>
               <p className="text-[10px]  md:text-sm text-slate-700 ">
                  escapenow@travel.com
               </p>
            </div>
         </div>
      </div>
   );
}

export default Footer;
