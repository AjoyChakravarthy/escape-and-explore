import { useState } from "react";
import { faqs } from "./data";
import { FaArrowDown } from "react-icons/fa";

function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSelection(index) {
    setSelected(index === selected ? null : index);
  }
  return (
    <div>
      {faqs && faqs.length > 0 ? (
        faqs.map((item, index) => (
          <div
            key={index}
            className=" mx-2 border-b-2"
          >
            <div className="bg-cyan-100 px-5 py-2 ">
              <div className="flex items-center">
                <h3 className="text-sm font-medium pt-2">{item.question}</h3>
                <span
                  onClick={() => handleSelection(index)}
                  className="text-cyan-500"
                >
                  <FaArrowDown
                    className={`transition-transform duration-300 cursor-pointer mt-2 ml-3  ${selected === index ? "rotate-180" : ""
                      }`}
                  />
                </span>
              </div>
            </div>
            <div>
              {selected === index ? (
                <div className="bg-cyan-100 font-light text-sm text-slate-800 py-3 px-6 ">
                  {item.answer}
                </div>
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Accordian;
