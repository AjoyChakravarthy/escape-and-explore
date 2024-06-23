import Slider from "../Slider";
import { singlePostData, guide } from "../../lib/data";
import { CiLocationOn } from "react-icons/ci";
import { FaPlaneArrival } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import Map from "../Map";

function SinglePage() {
   return (
      <div className="flex flex-col md:flex-row  flex-3  xl:max-w-[1280px] mx-auto overflow-hidden">
         <div className="pt-[100px] md:pt-[120px] flex flex-col gap-8 md:w-[60%]   md:h-[100vh]  overflow-y-scroll">
            <div className="max-h-[50%]">
               <Slider images={singlePostData.images} />
            </div>
            <div className="flex justify-between  items-center mt-7 mx-5">
               <div className="flex flex-col gap-4">
                  <h1 className="text-lg md:text-xl font-semibold">
                     {singlePostData.name}
                  </h1>
                  <h2 className="md:text-lg font-medium">
                     {" "}
                     <CiLocationOn className="inline " />
                     <span> {singlePostData.country}</span>
                  </h2>
                  <p className="bg-cyan-300 w-fit p-3 rounded-md">
                     <b>₹ {singlePostData.price}</b>
                  </p>
               </div>
               <div className="w-[120px] h-[120%] bg-cyan-200 flex flex-col items-center justify-center rounded-xl">
                  <span className="text-sm">Guide</span>
                  <img
                     src={guide.image}
                     alt="Tour Guide"
                     className="w-[60px] h-[60px] object-cover rounded-full "
                  />
                  <span className="text-sm font-bold">{guide.name}</span>
               </div>
            </div>
            <div className="my-3 mx-5 text-sm md:text-lg">
               <p>{singlePostData.description}</p>
            </div>
         </div>

         <div className="flex-2 md:w-[40%] pt-3 md:pt-[120px] bg-cyan-200 px-3 md:h-[100vh] pb-5 overflow-y-scroll">
            <div className="flex flex-col gap-1 md:gap-5">
               <h1 className="text-xl font-semibold">General</h1>
               <div className="bg-cyan-100 flex flex-col gap-2 p-5 my-3 rounded-xl text-sm">
                  <p>
                     <FaPlaneArrival className="inline mr-3" />
                     Pickup from arrival
                  </p>
                  <p>
                     <FaPlaneDeparture className="inline mr-3" />
                     Drop off at departure
                  </p>
                  <p>
                     <FaHandHoldingMedical className="inline mr-3" />
                     Full time assistance
                  </p>
               </div>
               <div>
                  <h1 className="text-xl font-semibold">Category</h1>
                  <ul className="pl-5 pt-2 md:p-5 text-sm">
                     {singlePostData.category.map((category) => {
                        return (
                           <li
                              key={category}
                              className="uppercase list-disc"
                           >
                              {category}
                           </li>
                        );
                     })}
                  </ul>
               </div>
               <div className=" w-[100%] h-[250px] md:h-[300px] rounded-lg my-5">
                  <p className="text-xl font-semibold mb-5 ">Location</p>
                  <Map items={[singlePostData]} />
               </div>
               <div className="flex text-xs md:text-sm font-medium gap-4 justify-between items-center mt-8 md:mt-5">
                  <span className="bg-cyan-100 p-3 rounded-lg cursor-pointer hover:bg-cyan-50">
                     <MdMessage className="inline mr-2" />
                     Message
                  </span>
                  <span className="bg-cyan-100 p-3 rounded-lg cursor-pointer hover:bg-cyan-50">
                     <AiOutlineFileDone className="inline mr-2" />
                     Book now
                  </span>
                  <span className="bg-cyan-100 p-3 rounded-lg cursor-pointer hover:bg-cyan-50">
                     <FaBookmark className="inline mr-2" />
                     Save
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SinglePage;
