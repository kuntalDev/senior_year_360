"use client";

import { useRef } from "react";
import Image from "next/image";
import { vidPlayIcon, personalUserOne, seniorPersonThree } from '../../../assets/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function AboutmeSlider() {
  const videoRef = useRef(null);
  

  const aboutMeSld = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      console.log(videoRef.current.paused ? "Playing video" : "Pausing video");
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    } else {
      console.error("Video element not found");
    }
  };

  return (
    <div>
      <Slider {...aboutMeSld}>
        <div>
          <div className="bg-white relative rounded-md overflow-hidden">
            <div className="relative before:block before:w-full before:pt-[66%]">
              <video
                ref={videoRef}
                className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover"
                muted controls
              >
                <source src="https://videos.pexels.com/video-files/7945188/7945188-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                onClick={handlePlayClick}
              >
                <Image src={vidPlayIcon} alt="play" priority />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white relative rounded-md overflow-hidden">
            <div className="relative before:block before:w-full before:pt-[66%]">
              <Image src={personalUserOne} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white relative rounded-md overflow-hidden">
            <div className="relative before:block before:w-full before:pt-[66%]">
              <Image src={seniorPersonThree} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
            </div>
            <button
              className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              onClick={handlePlayClick}
            >
              <Image src={vidPlayIcon} alt="play" priority />
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
