import { useEffect, useState } from "react";
import { bannersData } from "../constant";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Carousel = () => {
  const [banners, setBanners] = useState([]);
  const [bannersIndex, setBannerIndex] = useState(0);

  const changeSlide = (direction) => {
    setBannerIndex(
      (bannersIndex + direction + banners.length) % banners.length
    );
  };
  //@todo to fetch data from backend
  useEffect(() => {
    setBanners(bannersData);
  }, []);

  return (
    <div className="m-2 p-1 max-w-[1440px] h-[200px] relative group">
      <div
        style={{ backgroundImage: `url(${banners[bannersIndex]?.src})` }}
        className="w-full h-full  rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={() => changeSlide(-1)} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={() => changeSlide(1)} size={30} />
      </div>
    </div>
  );
};
