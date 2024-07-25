"use client";

import Image from "next/image";
import {vidPlayIcon,} from '../../../assets/index';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useState} from "react";
import Slider from "react-slick";
import Videomodal from "../Homepage/videomodal";

export default function Journeyslider({seniorJourneyData}) {
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
        {seniorJourneyData?.senior_journey_media .map((items, i) => {
            return (
              <div key={i}>
                <div className="grid grid-cols-2 md:px-16 sm:px-8 px-6 md:pt-12 pt-8 md:pb-16 pb-10">
                  {items.media_type_1 ==  "image1" ? (
                    <div onClick={() => OpenModal('image', items.image_1)} className="-mt-5 -rotate-[8.51deg] cursor-pointer">
                      <div className="xl:p-3 md:p-2 p-1 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                        <div className="relative before:block before:w-full before:pt-[132%]">
                          <Image src={items.image_1} width={225} height={297} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                        </div>
                        <div className="md:[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.21)] bg-white md:px-4 px-2 md:py-2 py-1 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                          <p className="3xl:text-lg xl:text-base sm:text-sm text-[11px] font-bold text-black text-center primary-inherit" dangerouslySetInnerHTML={{__html: items?.media_text1}}></p>
                        </div>
                      </div>
                   </div>
                  ) : (
                    <div className="-mt-5 -rotate-[8.51deg]">
                      <div className="xl:p-3 md:p-2 p-1 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                        <div className="relative before:block before:w-full before:pt-[132%]">
                          <Image src={items.video_poster_image1} width={225} height={297} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                        </div>
                        <button onClick={() => OpenModal('video', items.video_1)} className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 md:w-9 md:h-9 w-6 h-6 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                          <Image src={vidPlayIcon} alt="play" priority/>
                        </button>
                        <div className="md:[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.21)] bg-white md:px-4 px-2 md:py-2 py-1 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                          <p className="3xl:text-lg xl:text-base sm:text-sm text-[11px] font-bold text-black text-center primary-inherit" dangerouslySetInnerHTML={{__html: items?.media_text2}}></p>
                        </div>
                      </div>
                    </div>
                  )}
                  {items.media_type_2 ==  "image2" ? (
                     <div onClick={() => OpenModal('image', items.image_2)} className="mt-5 rotate-[14.44deg] cursor-pointer">
                     <div className="xl:p-3 md:p-2 p-1 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                       <div className="relative before:block before:w-full before:pt-[132%]">
                       <Image src={items.image_2} width={225} height={297} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                       </div>
                       <div className="md:[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.21)] bg-white md:px-4 px-2 md:py-2 py-1 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                         <p className="3xl:text-lg xl:text-base sm:text-sm text-[11px] font-bold text-black text-center primary-inherit" dangerouslySetInnerHTML={{__html: items?.media_text2}}></p>
                       </div>
                     </div>
                   </div>
                  ) : (
                    <div className="mt-5 rotate-[14.44deg]">
                      <div className="xl:p-3 md:p-2 p-1 bg-white md:[box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)] [box-shadow:0px_2px_10px_0px_rgba(0,_0,_0,_0.25)] relative">
                        <div className="relative before:block before:w-full before:pt-[132%]">
                        <Image src={items.video_poster_image2} width={225} height={297} alt="user" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                        </div>
                        <button onClick={() => OpenModal('video', items.video_2)} className="flex items-center justify-center rounded-full bg-white xl:w-14 xl:h-14 md:w-9 md:h-9 w-6 h-6 p-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                          <Image src={vidPlayIcon} alt="play" priority/>
                        </button>
                        <div className="md:[box-shadow:0px_5px_4px_0px_rgba(0,_0,_0,_0.21)] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.21)] bg-white md:px-4 px-2 md:py-2 py-1 w-10/12 rounded-sm absolute left-1/2 -translate-x-1/2 z-10 -bottom-[21px]">
                          <p className="3xl:text-lg xl:text-base sm:text-sm text-[11px] font-bold text-black text-center primary-inherit" dangerouslySetInnerHTML={{__html: items?.media_text2}}></p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            </div>
            )
        })}
      
      </Slider>
      {isModal && (
      <Videomodal HandelCloseClick={CloseModal} type={modalType} path={modalPath}/>
      )}
    </>
  );
}