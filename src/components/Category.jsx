function Category() {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-2 md:gap-5 mx-5">
      <button>All</button>
      <button className="bg-transparent text-slate-700 border border-slate-500 border-dashed hover:text-white ">
        Beach
      </button>
      <button className="bg-transparent text-slate-700 border border-slate-500 border-dashed hover:text-white">
        Mountains
      </button>
      <button className="bg-transparent text-slate-700 border border-slate-500 border-dashed hover:text-white">
        Lakes
      </button>
      <button className="bg-transparent text-slate-700 border border-slate-500 border-dashed hover:text-white">
        Waterfalls
      </button>
      <button className="bg-transparent text-slate-700 border border-slate-500 border-dashed hover:text-white">
        Desert
      </button>
    </div>
  );
}

export default Category;
