import { FaSearch } from "react-icons/fa";
function SearchBar() {
   return (
      <div className="flex items-center justify-center">
         <div>
            <form>
               <input
                  type="text"
                  placeholder="Place"
                  className="w-[150px]"
               />
               <input
                  type="number"
                  placeholder="Min-budget"
                  min={0}
                  max={200000}
                  className="w-[150px]"
               />
               <input
                  type="number"
                  placeholder="Max-budget"
                  min={0}
                  max={200000}
                  className="w-[150px]"
               />
               <button className="w-[150px] py-2.5 mt-5 ml-[5px] ">
                  <FaSearch className="inline" />
                  Search
               </button>
            </form>
         </div>
      </div>
   );
}

export default SearchBar;
