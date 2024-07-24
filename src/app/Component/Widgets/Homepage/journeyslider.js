"use client";

import Image from "next/image";
import {userOne,userTwo,vidPlayIcon,userThree,userFour} from '../../../assets/index';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useState} from "react";
import Slider from "react-slick";
import Videomodal from "../Homepage/videomodal";

export default function Journeyslider() {
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalPath, setModalPath] = useState('');

  const settingsOne = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const OpenModal = (type, path) => {
    setModalType(type);
    setModalPath(path);
    setIsModal(true);
  };

  const CloseModal = () => {
    setIsModal(false);
  };
 

  return (
    <>
    
      <Slider {...settingsOne}>
        <div>
          <div className="grid grid-cols-2 md:px-16 px-8 md:pt-12 pt-8 md:pb-16 pb-10">
            <div onClick={() => OpenModal('image', 'user-1.webp')} className="-mt-5 -rotate-[8.51deg] cursor-pointer">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userOne} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">Scholarships <span className="text-primary">2023</span> </p>
                </div>
              </div>
            </div>
            <div className="mt-5 rotate-[14.44deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userTwo} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <button onClick={() => OpenModal('video', 'graduateVideo.mp4')} className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <Image src={vidPlayIcon} alt="play" priority/>
                </button>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">100 M Champion <span className="text-primary">2022</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:px-16 px-8 md:pt-12 pt-8 md:pb-16 pb-10">
            <div onClick={() => OpenModal('image', 'user-3.jpg')} className="-mt-5 -rotate-[8.51deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userThree} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">Scholarships <span className="text-primary">2023</span> </p>
                </div>
              </div>
            </div>
            <div className="mt-5 rotate-[14.44deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userFour} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <button onClick={() => OpenModal('video', 'graduateVideo.mp4')} className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <Image src={vidPlayIcon} alt="play" priority/>
                </button>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">100 M Champion <span className="text-primary">2022</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:px-16 px-8 md:pt-12 pt-8 md:pb-16 pb-10">
            <div onClick={() => OpenModal('image', 'user-1.webp')} className="-mt-5 -rotate-[8.51deg] cursor-pointer">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userOne} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">Scholarships <span className="text-primary">2023</span> </p>
                </div>
              </div>
            </div>
            <div className="mt-5 rotate-[14.44deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userTwo} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <button onClick={() => OpenModal('video', 'graduateVideo.mp4')} className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <Image src={vidPlayIcon} alt="play" priority/>
                </button>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">100 M Champion <span className="text-primary">2022</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:px-16 px-8 md:pt-12 pt-8 md:pb-16 pb-10">
            <div onClick={() => OpenModal('image', 'user-3.jpg')} className="-mt-5 -rotate-[8.51deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userThree} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">Scholarships <span className="text-primary">2023</span> </p>
                </div>
              </div>
            </div>
            <div className="mt-5 rotate-[14.44deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userFour} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <button onClick={() => OpenModal('video', 'graduateVideo.mp4')} className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <Image src={vidPlayIcon} alt="play" priority/>
                </button>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">100 M Champion <span className="text-primary">2022</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:px-16 px-8 md:pt-12 pt-8 md:pb-16 pb-10">
            <div onClick={() => OpenModal('image', 'user-1.webp')} className="-mt-5 -rotate-[8.51deg] cursor-pointer">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userOne} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">Scholarships <span className="text-primary">2023</span> </p>
                </div>
              </div>
            </div>
            <div className="mt-5 rotate-[14.44deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userTwo} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <button onClick={() => OpenModal('video', 'graduateVideo.mp4')} className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <Image src={vidPlayIcon} alt="play" priority/>
                </button>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">100 M Champion <span className="text-primary">2022</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:px-16 px-8 md:pt-12 pt-8 md:pb-16 pb-10">
            <div onClick={() => OpenModal('image', 'user-3.jpg')} className="-mt-5 -rotate-[8.51deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userThree} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">Scholarships <span className="text-primary">2023</span> </p>
                </div>
              </div>
            </div>
            <div className="mt-5 rotate-[14.44deg]">
              <div className="xl:p-3 p-2 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                <div className="relative before:block before:w-full before:pt-[132%]">
                  <Image src={userFour} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
                <button onClick={() => OpenModal('video', 'graduateVideo.mp4')} className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 w-9 h-9 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <Image src={vidPlayIcon} alt="play" priority/>
                </button>
                <div className="[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] bg-white px-4 py-2 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                  <p className="3xl:text-lg xl:text-base text-sm font-bold text-black text-center">100 M Champion <span className="text-primary">2022</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {isModal && (
      <Videomodal HandelCloseClick={CloseModal} type={modalType} path={modalPath}/>
      )}
    </>
  );
}
