import { FaPhoneSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function Contact() {
   return (
      <div className="md:h-[90vh] xl:max-w-[1280px] mx-auto overflow-hidden flex flex-col gap-3 ">
         <div className="pt-28 flex flex-col justify-center mx-3 gap-3">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <p className="text-sm pb-5">
               Ready to embark on your next adventure? Contact us today to start
               planning your dream trip. We are here to answer any questions you
               may have and help you create memories that will last a lifetime.
            </p>
         </div>
         <div className=" flex flex-col md:flex-row items-center justify-center mt-10">
            <div className="flex flex-col gap-3 items-center justify-center mx-3">
               <h1 className="text-xl">Send us a message</h1>
               <form>
                  <input
                     type="text"
                     placeholder="First name"
                     className="w-full md:w-[48%] rounded-lg ml-0 md:mr-[2%] bg-slate-100"
                  />
                  <input
                     type="text"
                     placeholder="Last name"
                     className="w-full md:w-[48%] rounded-lg ml-0 md:ml-[2%] bg-slate-100"
                  />
                  <br />
                  <input
                     type="email"
                     placeholder="Email"
                     className="w-full rounded-lg ml-0 bg-slate-100"
                  />
                  <input
                     type="number"
                     placeholder="Phone"
                     className="w-full rounded-lg ml-0 bg-slate-100"
                  />
                  <br />
                  <button className="w-full rounded-lg mt-5">Send</button>
               </form>
            </div>
            <div className="text-lg mx-3 mt-6 bg-cyan-100 p-5 rounded-lg">
               <div className="flex gap-2 items-center">
                  <FaPhoneSquare />
                  <h2>+123 456 7890</h2>
               </div>
               <div className="flex gap-2 items-center">
                  <IoMdMail />
                  <h2>explore@travel.com</h2>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contact;
