import { assets } from "../assets/assets";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   const user = false;
   return (
      <div className="flex justify-between items-center px-1 md:px-3 py-5  w-full fixed z-[9999] backdrop-blur-lg border-b-2 bg-black/50 ">
         <div className="w-[65px] md:w-[85px] ">
            <Link to="/">
               <img
                  src={assets.logo}
                  alt="Logo"
               />

            </Link>
         </div>
         <div
            className={`${isMenuOpen ? "top-[100%]" : "top-[-800%]"
               } md:static absolute left-0 w-full md:min-h-fit min-h-[50vh] md:w-auto  md:py-0  transition-all duration-500 ease-in-out md:transition-none shadow-xl md:shadow-none  bg-black/70 md:bg-transparent `}
         >
            <div className="flex md:flex-row flex-col gap-10  md:gap-3 lg:gap-7 items-center text-lg md:text-base lg:text-lg text-white ">

               <Link to="/escape-and-explore"
                  className="hover:underline underline-offset-8"
               >
                  Home
               </Link>
               <Link to="/about"
                  className="hover:underline underline-offset-8"
               >
                  About Us
               </Link>
               <Link to="/discover"
                  className="hover:underline underline-offset-8"
               >
                  Discover
               </Link>

               <Link to="/contact"
                  className="hover:underline underline-offset-8"
               >
                  Contact
               </Link>
            </div>
         </div>
         <div className="flex items-center">
            {user ? (
               <div className="flex text-sm text-white font-medium items-center gap-2">
                  <img
                     src="https://lh3.googleusercontent.com/a/ACg8ocIXqhi5iegpmweL3sbJacp1hDXqg-NNU4UDEPo6DZWW7VhP4MnMEQ=s476-c-no"
                     alt="user"
                     className="w-[35px] h-[35px] rounded-full"
                  />

                  <span>Ajoy</span>
                  <Link
                     to="/profile"
                     className="bg-cyan-400 px-5 py-2 cursor-pointer rounded-xl"
                  >
                     Profile
                  </Link>
               </div>
            ) : (
               <Link to="/signup">
                  <button className="text-sm md:text-lg h-10 w-32 lg:w-44">
                     Sign Up
                  </button>
               </Link>
            )}
            <div
               onClick={toggleMenu}
               className="cursor-pointer md:hidden pl-5"
            >
               {isMenuOpen ? (
                  <IoCloseSharp className="text-4xl text-white hover:text-cyan-500 " />
               ) : (
                  <IoMdMenu className="text-4xl text-white hover:text-cyan-500  " />
               )}
            </div>
         </div>
      </div>
   );
}

export default Navbar;
