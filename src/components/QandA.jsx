import Accordian from "./Accordian";

function QandA() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 items-center md:gap-5 mt-20 px-5 xl:max-w-[1280px] mx-auto overflow-hidden ">
      <div className="w-full md:w-[50%]">
        <h2 className="text-3xl font-semibold mb-5">
          Frequently asked questions
        </h2>
        <Accordian />
      </div>
      <div className="w-full md:w-[50%]">
        <h2 className="text-3xl font-semibold mb-5">
          Do you have any specific questions?
        </h2>
        <input
          type="email"
          placeholder="Enter your email."
          className="w-full"
        />
        <br />
        <textarea
          name=""
          id=""
          placeholder="Enter your text here.."
          className="w-full h-36 bg-cyan-100 rounded-[20px] mt-5 pl-5 pt-2 outline-none "
        ></textarea>
        <br />
        <button className="w-full mt-5">Submit</button>
      </div>
    </div>
  );
}

export default QandA;
