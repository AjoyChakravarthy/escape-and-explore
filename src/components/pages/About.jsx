import Portfolio from "../Portfolio";

function About() {
   return (
      <div className="xl:max-w-[1280px] mx-auto overflow-hidden">
         <div className="pt-28 px-3 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">About Us..</h1>
            <h2 className="text-lg font-semibold">Our Story</h2>
            <p className="text-sm">
               At Escape and Explore, our journey began with a passion for
               exploring the hidden gems of the world and a desire to share
               these experiences with others. Founded in 2000, we have grown
               from a small group of travel enthusiasts into a trusted travel
               companion for adventurers and wanderers across the globe. Our
               mission is to make travel accessible, enjoyable, and
               unforgettable for everyone.
            </p>
            <h2 className="text-lg font-semibold">Our Mission</h2>
            <p className="text-sm">
               Our mission is to inspire and empower travelers to explore the
               world, create meaningful experiences, and connect with diverse
               cultures. We believe that travel is not just about visiting new
               places but about enriching your life through unique adventures
               and cherished memories.
            </p>
         </div>
         <Portfolio />
      </div>
   );
}

export default About;
