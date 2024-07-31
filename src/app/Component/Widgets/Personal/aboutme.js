"use client";

import { useState } from "react";
import Image from "next/image";
import { vidPlayIcon, personalUserOne, seniorPersonThree } from '../../../assets/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function AboutmeSlider() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const aboutMeSld = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePlayClick = (video) => {
    if (activeVideo && activeVideo !== video) {
      activeVideo.pause();
    }
    if (video.paused) {
      video.play();
      setActiveVideo(video);
      setIsPlaying(true);
    } else {
      video.pause();
      setActiveVideo(null);
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <Slider {...aboutMeSld}>
        <div>
          <div className="bg-white relative rounded-md overflow-hidden">
            <div className="relative before:block before:w-full before:pt-[66%]">
              <video
                className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover"
                muted
                controls
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              >
                <source src="https://videos.pexels.com/video-files/7945188/7945188-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <button
                  className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                  onClick={(e) => handlePlayClick(e.currentTarget.previousSibling)}
                >
                  <Image src={vidPlayIcon} alt="play" priority />
                </button>
              )}
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
            
          </div>
        </div>
      </Slider>
    </div>
  );
}