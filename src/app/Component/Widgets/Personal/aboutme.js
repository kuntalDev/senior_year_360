"use client";

import Image from "next/image";
import { vidPlayIcon, abtuOne, personalUserOne, seniorPersonThree } from '../../../assets/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Videomodal from "../Homepage/videomodal"; // Adjust the import path as needed

export default function AboutmeSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoPath, setVideoPath] = useState(undefined);

  const aboutMeSld = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handlePlayClick = (path) => {
    setVideoPath(path);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoPath(undefined);
  };

  return (
    <div>
      <Slider {...aboutMeSld}>
        <div>
          <div className="bg-white relative rounded-md overflow-hidden">
            <div className="relative before:block before:w-full before:pt-[66%]">
              <Image src={abtuOne} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
            </div>
            <button
              className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              onClick={() => handlePlayClick('graduateVideo.mp4')}
            >
              <Image src={vidPlayIcon} alt="play" priority />
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white relative rounded-md overflow-hidden">
            <div className="relative before:block before:w-full before:pt-[66%]">
              <Image src={personalUserOne} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
            </div>
            <button
              className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              onClick={() => handlePlayClick('graduateVideo.mp4')}
            >
              <Image src={vidPlayIcon} alt="play" priority />
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white relative rounded-md overflow-hidden">
            <div className="relative before:block before:w-full before:pt-[66%]">
              <Image src={seniorPersonThree} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
            </div>
            <button
              className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              onClick={() => handlePlayClick('graduateVideo.mp4')}
            >
              <Image src={vidPlayIcon} alt="play" priority />
            </button>
          </div>
        </div>
      </Slider>

      {isModalOpen && (
        <Videomodal
          HandelCloseClick={handleCloseModal}
          type="video"
          path={videoPath}
        />
      )}
    </div>
  );
}
