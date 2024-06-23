import { IoSearch } from "react-icons/io5";
import "./Filter.css";
function Filter() {
  return (
    <div className="filter ">
      <h1 className="text-xl font-normal">
        Search Result for <b>Location</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location">Location</label> <br />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Locations"
          />
        </div>
      </div>
      <div className=" bottom flex justify-between items-center gap-2">
        <div className="item">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
          >
            <option value="">Any</option>
            <option value="india">India</option>
            <option value="abu dabi">Abu Dabi</option>
            <option value="china">China</option>
            <option value="canada">Canada</option>
            <option value="brazil">Brazil</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="categoey">Category</label>
          <select
            name="categoey"
            id="categoey"
          >
            <option value="">Any</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
            <option value="waterfall">Waterfall</option>
            <option value="desert">Desert</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min-price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Min-price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            placeholder="any"
          />
        </div>
        <button>
          <IoSearch className="text-4xl" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
