import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapPin from "./MapPin";
import { places } from "../lib/data";

function Map() {
  return (
    <MapContainer
      center={[24.412, 54.474]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((item) => {
        return (
          <MapPin
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            country={item.country}
            price={item.price}
            latitude={item.latitude}
            longitude={item.longitude}
          />
        );
      })}
    </MapContainer>
  );
}
// Map.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       latitude: PropTypes.number.isRequired,
//       longitude: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       country: PropTypes.string.isRequired,
//       price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//         .isRequired,
//     })
//   ).isRequired,
// };
export default Map;
