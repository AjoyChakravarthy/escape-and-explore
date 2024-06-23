
import Destination from "./Destination";
import Home from "./Home";
import Middle from "./Middle";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import QandA from "./QandA";

function HomeLayout() {
   return (
      <div>
         <Home />
         <Middle />
         <Destination />
         <Portfolio />
         <Testimonials />
         <QandA />
      </div>
   );
}

export default HomeLayout;
