import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdBookmarkAdd } from "react-icons/md";
import { MdMessage } from "react-icons/md";
function ListCard(props) {
  return (
    <div className="flex flex-col md:flex-row px-3">
      <div className=" h-[300px] md:h-[200px] w-full md:w-[200px] flex-2">
        <Link to={`/${props.id}`}>
          <img
            src={props.image}
            alt={props.name}
            className="object-cover w-full h-full rounded-xl hover:scale-105 transition ease-in-out delay-150 duration-200  "
          />
        </Link>
      </div>
      <div className="flex flex-col  justify-between flex-1  pl-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-bold pt-4 md:pt-0">
            <Link to={`/${props.id}`}>{props.name}</Link>
          </h2>
          <p className="text-sm text-slate-700">
            <CiLocationOn className="inline" />
            <span>{props.country}</span>
          </p>
          <p className="text-sm font-medium text-slate-700 bg-cyan-200 py-2 px-1 w-fit rounded-md">
            <b>₹</b>
            {props.price}
          </p>
          <p className="text-sm text-slate-700">{props.category}</p>
        </div>
        <div className="flex text-3xl  text-slate-700 gap-5 justify-end ">
          <MdBookmarkAdd className="cursor-pointer hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 border-2 rounded-sm" />
          <MdMessage className="cursor-pointer hover:scale-125 transition ease-in-out delay-150 hover:-translate-y- duration-300 border-2 rounded-sm" />
        </div>
      </div>
    </div>
  );
}
ListCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
  category: PropTypes.string,
};

export default ListCard;
