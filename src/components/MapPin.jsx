import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MapPin(props) {
  console.log(props);
  return (
    <Marker position={[props.latitude, props.longitude]}>
      <Popup>
        <div className="flex">
          <img
            src={props.image}
            alt=""
            className="w-[90px] h-[50px] object-cover mt-2"
          />
          <div className="pl-2">
            <Link to={`/${props.id}`}>{props.name}</Link>
            <br />
            <span>{props.country}</span>
            <br />
            <b>{props.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
MapPin.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
export default MapPin;
