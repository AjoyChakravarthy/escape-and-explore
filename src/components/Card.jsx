import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className=" w-[150px] h-[150px] md:w-[250px] md:h-[250px] relative overflow-hidden rounded-md md:rounded-xl ">
      <div className="relative w-[100%] h-[100%] ">
        <Link to={`/${props.id}`}>
          <img
            className="bg-center object-cover w-[100%] h-[100%] ease-in duration-300 hover:scale-125"
            src={props.image}
            alt={props.name}
          /></Link>
      </div>
      <div className="w-[100%] py-2 absolute bottom-0 text-white text-center backdrop-blur-sm">
        <h2 className="text-xs md:text-lg font-semibold ">{props.name}</h2>
        <p className="text-xs md:text-sm font-semibold">
          <FaLocationDot className="inline mr-2" />
          {props.country}
        </p>
      </div>
    </div>
  );
}
Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
export default Card;
