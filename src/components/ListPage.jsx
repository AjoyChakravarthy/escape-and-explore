import { places } from "../lib/data";
import ListCard from "./ListCard";
import Map from "./Map";
import Filter from "./pages/Filter/Filter";
function ListPage() {
  return (
    <div className="pt-36 xl:max-w-[1280px] mx-auto overflow-hidden">
      <div className="flex gap-2">
        <div className="flex-2 w-[60%]">
          <div>
            <Filter />
          </div>
          <div className=" flex flex-col gap-10 overflow-y-scroll h-[100vh] py-5">
            {places.map((place, id) => {
              const categoryArray = Array.isArray(place.category)
                ? place.category
                : [];
              const categoryList = categoryArray.join(", ");
              return (
                <ListCard
                  key={id}
                  id={place.id}
                  image={place.image}
                  name={place.name}
                  country={place.country}
                  description={place.description}
                  price={place.price}
                  category={categoryList}
                />
              );
            })}
          </div>
        </div>
        <div className="flex-1 w-[40%] h-[100%] bg-slate-400">
          <Map items={places} />
        </div>
      </div>
    </div>
  );
}

export default ListPage;
