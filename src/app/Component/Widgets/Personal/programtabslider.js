"use client";
import { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Videomodal from '../Homepage/videomodal'; // Import the Videomodal component
import { vidPlayIcon, activityOne, activityTwo, activityThree } from '../../../assets/index';

const TabPrice = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [activeTab, setActiveTab] = useState("tab1");

  const nrichmen = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
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
      <div className="flex flex-wrap items-center justify-center space-x-3 mb-20">
        <button className={`text-white rounded-md my-2 px-6 py-2 3xl:text-lg text-base ${activeTab === "tab1" ? "bg-primary" : "bg-black"}`} onClick={() => setActiveTab("tab1")}>
          All
        </button>
        <button className={`text-white rounded-md my-2 px-6 py-2 3xl:text-lg text-base ${activeTab === "tab2" ? "bg-primary" : "bg-black"}`} onClick={() => setActiveTab("tab2")}>
          Saying Hello
        </button>
      </div>

      <div>
        {activeTab === "tab1" && (
          <Slider {...nrichmen} >
            <div className="px-2 md:px-4">
                <div className="relative rounded-md overflow-hidden mb-3">
                  <div className="relative before:block before:w-full before:pt-[60%]">
                    <Image src={activityOne} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                  </div>
                </div>
                <p className="text-xl font-semibold text-[#282828]">Basketball 2023</p>
            </div>
            <div className="px-2 md:px-4">
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[60%]">
                  <video
                    className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover"
                    muted
                    controls
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                  >
                    <source src="https://videos.pexels.com/video-files/9558848/9558848-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {!isPlaying && (
                    <button
                      className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                      onClick={(e) => handlePlayClick(e.currentTarget.previousSibling)}
                    >
                      <Image src={vidPlayIcon} alt="play" priority className="relative left-[2px]"/>
                    </button>
                  )}
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Basketball 2023</p>
            </div>
            <div className="px-2 md:px-4">
                <div className="relative rounded-md overflow-hidden mb-3">
                  <div className="relative before:block before:w-full before:pt-[60%]">
                    <Image src={activityThree} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                  </div>
                </div>
              <p className="text-xl font-semibold text-[#282828]">Baseball 2023</p>
            </div>
          </Slider>

        )}
        {activeTab === "tab2" && (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[60%]">
                  <Image src={activityOne} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Basketball 2023</p>
            </div>

            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[60%]">
                  <Image src={activityThree} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
                
              </div>
              <p className="text-xl font-semibold text-[#282828]">Lacrosse 2023</p>
            </div>

            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[60%]">
                  <Image src={activityTwo} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Lacrosse 2023</p>
            </div>
          </div>
        )}

        {/* Repeat for other tabs */}
      </div>
    </div>
  );
};

export default TabPrice;