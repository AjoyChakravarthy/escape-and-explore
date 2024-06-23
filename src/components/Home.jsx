import { useEffect } from "react";
import PropTypes from "prop-types";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import Aos from 'aos'
import "aos/dist/aos.css";


function Home({
  description = "Chase Your Travel Dream With US !",
  purpose = " Welcome to Escape Explore, your ultimate gateway to discovering world's most breathtaking destinations",
  ...props
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      {...props}
      className="relative top-0 w-full h-[100%]"
    >
      <div className="absoluten h-[100%] w-[100%]">
        <video
          className="h-[100%] w-[100%] object-cover"
          src={assets.video1}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="flex flex-col items-center text-center w-full absolute top-[40%] bottom-[50%]">
        <h1 data-aos="fade-up" className="text-3xl md:text-6xl font-semibold text-white">
          {description}
        </h1>
        <p className="text-sm md:text-lg font-normal text-slate-300 pt-5 max-w-[600px]">
          {purpose}
        </p>
        <button className="text-xs md:text-lg px-2  mt-10  w-[150px] md:w-[190px] h-12 md:h-16 lg:h-24">
          GET STARTED
          <FaArrowRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
}
Home.propTypes = {
  description: PropTypes.string,
  purpose: PropTypes.string,
};

export default Home;
