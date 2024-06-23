import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);
  const changeDirection = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="flex gap-2 md:gap-5 md:h-[360px] mx-1 md:mx-5">
      {imageIndex !== null && (
        <div className="absolute top-0 left-0 bg-black w-full h-[100vh] flex justify-between items-center z-[99999]">
          <div className="text-lg md:text-6xl flex justify-start flex-1 text-white ">
            <FaArrowAltCircleLeft
              onClick={() => changeDirection("left")}
              className="cursor-pointer"
            />
          </div>
          <div className="flex-10">
            <img
              src={images[imageIndex]}
              alt=""
              className="w-[100%] md:h-[100vh] object-cover"
            />
          </div>
          <div className="flex justify-end flex-1 text-lg md:text-6xl text-white ">
            <FaArrowAltCircleRight
              onClick={() => changeDirection("right")}
              className="cursor-pointer"
            />
          </div>
          <div
            className="absolute top-0 right-0 p-4 text-lg md:text-4xl font-medium text-white cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            <IoMdCloseCircleOutline />
          </div>
        </div>
      )}

      <div className="flex-3 w-[70%] ">
        <img
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
          className="object-cover rounded-lg w-full h-full cursor-pointer"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-between">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
            className="object-cover rounded-lg h-[100px] cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
