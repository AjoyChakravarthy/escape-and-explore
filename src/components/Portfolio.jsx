import { assets } from "../assets/assets";
import "aos/dist/aos.css";
import Aos from 'aos'
import { useEffect } from "react";
function Portfolio() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-out-cubic",
    })
  }, [])
  return (
    <div className="max-w-[80%] flex flex-col md:flex-row justify-center gap-10 pt-36 pb-10 xl:max-w-[1280px] mx-auto overflow-hidden">
      <div className="md:w-[60%]">
        <div>
          <h1 className="text-3xl font-bold">Why Choose Us ?</h1>
          <p className="text-lg font-semibold">
            We have extensive knowledge and experience in travel industry
          </p>
        </div>
        <div className="flex flex-col  gap-5  mt-10 ">
          <div className="flex gap-2">
            <div className="w-[80px] md:w-[270px]">
              <img
                src={assets.icon_safety}
                alt="Customer Safety"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Safety and Support</h2>
              <p className="text-sm">
                Our top priority is the safety and well-being of our clients. We
                maintain high safety standards and have emergency support
                available during the trip.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[60px] md:w-[230px]">
              <img
                src={assets.icon_locations}
                alt="Locations"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Diverse Range of Destinations
              </h2>
              <p className="text-sm">
                weather it's tour or international tour or adventure, we cover a
                wide range of destinations for your different intrest and
                preference
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[70px] md:w-[250px]">
              <img
                src={assets.icon_support}
                alt="Customer support"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold"> 24/7 Cusiomer Support</h2>
              <p className="text-sm">
                Our dedicated customer support team is available rounde the
                clock to address any queries os concerns before, during and
                after the trip
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="w-[200px] h-[300px] md:w-auto md:h-[480px] ml-auto mr-auto relative hidden md:inline">
        <img
          src={assets.portfolio_img1}
          alt="Mountains"
          className="object-cover w-[100%] h-[100%] rounded-2xl"
        />
        <img
          src={assets.portfolio_img2}
          alt="Swimming"
          className=" object-cover absolute top-[-5px] left-[-5px] h-[155px] hover:scale-125 ease-in duration-300 border-white border-[6px] rounded-tl-2xl"
        />
        <img
          src={assets.portfolio_img3}
          alt="Pool"
          className=" object-cover absolute bottom-[-5px] left-[-5px] h-[155px] hover:scale-125 ease-in duration-300 border-white border-[6px] rounded-bl-2xl"
        />
      </div>
    </div>
  );
}

export default Portfolio;
