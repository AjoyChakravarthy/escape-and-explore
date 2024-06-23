import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { assets } from "../assets/assets";
import "aos/dist/aos.css";
import Aos from 'aos'
import { useEffect } from "react";

function Testimonials({
  heading = "FROM OUR CLIENTS",
  subHeading = "Travel History From Our Clients",
  description = "By choosing us for there tarvel, customers can expect an enriching and enjoyable travel experience filled with unforgettable memories thatwill last a lifetime.",
  ...props
}) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-out-cubic",
    })
  }, [])
  return (
    <div
      {...props}
      className="pt-24 px-5 flex flex-col md:flex-row md:gap-5 items-center xl:max-w-[1280px] mx-auto overflow-hidden"
    >
      <div className="md:w-2/4 ">
        <div data-aos="fade-right">
          <img
            src={assets.test_img}
            alt="Family at beach"
            className="object-cover rounded-3xl "
          />
        </div>
      </div>
      <div className="mt-10 md:w-2/4 ml-auto mr-auto">
        <div className="flex flex-col gap-4">
          <h3 className="text-cyan-500 text-xl md:text-2xl ">{heading}</h3>
          <h2 className="text-3xl md:text:4xl font-semibold ">{subHeading}</h2>
          <p className="text-sm md:text:base">{description}</p>
        </div>
        <div className="flex gap-2 text-cyan-400 my-4">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex w-[45px] h-[45px] gap-5 ">
          <img
            src={assets.client_1}
            alt="Clients"
            className="rounded-full border-cyan-300 border-2"
          />
          <img
            src={assets.client_2}
            alt="Clients"
            className="rounded-full border-cyan-300 border-2"
          />
          <img
            src={assets.client_3}
            alt="Clients"
            className="rounded-full border-cyan-300 border-2"
          />
          <img
            src={assets.client_4}
            alt="Clients"
            className="rounded-full border-cyan-300 border-2 "
          />
        </div>
      </div>
    </div>
  );
}
Testimonials.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  description: PropTypes.string,
};
export default Testimonials;
