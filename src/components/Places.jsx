import { places } from "../lib/data";
import Card from "./Card";
import PropTypes from "prop-types";
function Places() {
  return (
    <div className="grid grid-rows-1 gap-2 md:gap-4 grid-flow-col overflow-x-scroll px-4 mt-5 xl:max-w-[1280px] mx-auto overflow-hidden scrollbar-thin .scrollbar-webkit  ">
      {places.map((place, id) => {
        return (
          <Card
            key={id}
            id={place.id}
            image={place.image}
            name={place.name}
            country={place.country}
            description={place.description}
            price={place.price}
          />
        );
      })}
    </div>
  );
}
Map.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};
export default Places;
