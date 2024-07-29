"use client";
import { useState } from "react";
import Image from "next/image";
import Videomodal from '../Homepage/videomodal'; // Import the Videomodal component
import { vidPlayIcon, activityOne, activityTwo, activityThree } from '../../../assets/index';

const TabPrice = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoPath, setVideoPath] = useState('');

  const handleVideoClick = (path) => { // Remove type annotation
    setVideoPath(path);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center space-x-3 mb-20">
        <button className={`text-white rounded-md my-2 px-6 py-2 3xl:text-lg text-base ${activeTab === "tab1" ? "bg-primary" : "bg-black"}`} onClick={() => setActiveTab("tab1")}>
          Holiday 
        </button>
        <button className={`text-white rounded-md my-2 px-6 py-2 3xl:text-lg text-base ${activeTab === "tab2" ? "bg-primary" : "bg-black"}`} onClick={() => setActiveTab("tab2")}>
          Sports
        </button>
        <button className={`text-white rounded-md my-2 px-6 py-2 3xl:text-lg text-base ${activeTab === "tab3" ? "bg-primary" : "bg-black"}`} onClick={() => setActiveTab("tab3")}>
          Academic Focus
        </button>
        <button className={`text-white rounded-md my-2 px-6 py-2 3xl:text-lg text-base ${activeTab === "tab4" ? "bg-primary" : "bg-black"}`} onClick={() => setActiveTab("tab4")}>
          Outdoors
        </button>
        <button className={`text-white rounded-md my-2 px-6 py-2 3xl:text-lg text-base ${activeTab === "tab5" ? "bg-primary" : "bg-black"}`} onClick={() => setActiveTab("tab5")}>
          Military
        </button>
      </div>

      <div>
        {activeTab === "tab1" && (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[66%]">
                  <Image src={activityOne} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Basketball 2023</p>
            </div>

            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[66%]">
                  <Image src={activityTwo} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
                <div className="flex items-center justify-center absolute z-20 left-0 top-0 w-full h-full bg-black bg-opacity-40">
                  <button className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2" onClick={() => handleVideoClick('graduateVideo.mp4')}>
                    <Image src={vidPlayIcon} alt="play" priority />
                  </button>
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Lacrosse 2023</p>
            </div>

            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[66%]">
                  <Image src={activityThree} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Lacrosse 2023</p>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[66%]">
                  <Image src={activityOne} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Basketball 2023</p>
            </div>

            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[66%]">
                  <Image src={activityThree} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
                <div className="flex items-center justify-center absolute z-20 left-0 top-0 w-full h-full bg-black bg-opacity-40">
                  <button className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2" onClick={() => handleVideoClick('graduateVideo.mp4')}>
                    <Image src={vidPlayIcon} alt="play" priority />
                  </button>
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Lacrosse 2023</p>
            </div>

            <div>
              <div className="relative rounded-md overflow-hidden mb-3">
                <div className="relative before:block before:w-full before:pt-[66%]">
                  <Image src={activityTwo} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                </div>
              </div>
              <p className="text-xl font-semibold text-[#282828]">Lacrosse 2023</p>
            </div>
          </div>
        )}
        {/* Repeat for other tabs */}
      </div>

      {isModalOpen && (
        <Videomodal
          HandelCloseClick={handleCloseModal}
          type="video"
          path={videoPath}
        />
      )}
    </div>
  );
};

export default TabPrice;
