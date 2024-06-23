import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import Category from "./Category";
import Places from "./Places";
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react";


function Destination({
  heading = "Find Your Dream Destination",
  subHeading = "EXPLORE NOW",
  description = "Find the best spot foru your next tour? Fill the field below",
  ...props
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      {...props}
      className="flex flex-col items-center text-center pt-24 py-5 mx-2 "
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-cyan-400 text-lg">{subHeading}</h3>
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <p className="text-sm font-medium text-slate-500">{description}</p>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Category />
      </div>
      <div data-aos="fade-up" className="w-[100%] ">
        <Places />
      </div>
    </div>
  );
}

Destination.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  description: PropTypes.string,
};

export default Destination;
