function Middle() {
  return (
    <div className="xl:max-w-[1280px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-center gap-6 p-5 mx-5 mt-10 bg-cyan-100 rounded-[60px] min-h-44">
        <span className="flex items-center justify-center ">
          <h1 className="text-3xl md:text-5xl font-semibold">10</h1>
          <p className="text-lg font-medium opacity-85">Years Of Experience</p>
        </span>
        <span className="flex items-center justify-center ">
          <h1 className="text-3xl md:text-5xl font-semibold">3k+</h1>
          <p className="text-lg font-medium opacity-85">Destinations</p>
        </span>
        <span className="flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold">10k+</h1>
          <p className="text-lg font-medium opacity-85">Cistomer Reviews</p>
        </span>
        <span className="flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold">4.8</h1>
          <p className="text-lg font-medium opacity-85">Overall Ratings</p>
        </span>
      </div>
    </div>
  );
}

export default Middle;
