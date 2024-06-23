import { places } from "../lib/data";
import ListCard from "./ListCard";

function List() {
   return (
      <div className="flex flex-col gap-3">
         {places.map((item, id) => {
            const categoryArray = Array.isArray(item.category)
               ? item.category
               : [];
            const categoryList = categoryArray.join(", ");
            return (
               <ListCard
                  key={id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  country={item.country}
                  price={item.price}
                  category={categoryList}
               />
            );
         })}
      </div>
   );
}

export default List;
