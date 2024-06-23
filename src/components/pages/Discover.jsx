import Category from "../Category";
import List from "../List";

function Discover() {
   return (
      <div className="xl:max-w-[1280px] mx-auto overflow-hidden">
         <div className="pt-28">
            <div className="mx-3">
               <h1 className="text-2xl font-semibold mb-2">
                  Discover Your Next Adventure: Explore Our Top Destinations
               </h1>
               <p className="text-sm md:text-base">
                  Welcome to our Destinations page, your ultimate gateway to
                  discovering the world’s most breathtaking and inspiring
                  places! At Explore Escape, we believe that every journey tells
                  a story, and we're here to help you write yours. Whether
                  you're dreaming of tropical beaches, ancient cities, majestic
                  mountains, or bustling urban centers, our curated list of
                  destinations offers something for every type of traveler.
               </p>
            </div>
            <div className="flex flex-col gap-5 mt-5">
               <Category />
               <List />
            </div>
         </div>
      </div>
   );
}

export default Discover;
