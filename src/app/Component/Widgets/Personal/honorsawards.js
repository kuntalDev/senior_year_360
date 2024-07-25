"use client";

import Image from "next/image";
import {awardsOne,awardsTwo,awardsThree,awardsFour} from '../../../assets/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Honorsawards() {

  var honorsAwards = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
 
  return (
    <div>
      <Slider {...honorsAwards}>
        <div className="px-3">
          <div className="flex flex-col text-center md:text-left">
            <div className="h-auto grow bg-[#FCFCFC] border border-solid border-[#DADADA] py-6 px-5 rounded-md mb-3">
              <Image src={awardsOne} alt="Awards" priority/>
            </div>
            <p className="text-sm font-medium text-black">March 2022</p>
          </div>
        </div>
        <div className="px-3">
          <div className="flex flex-col text-center md:text-left">
            <div className="h-auto grow bg-[#FCFCFC] border border-solid border-[#DADADA] py-6 px-5 rounded-md mb-3">
              <Image src={awardsTwo} alt="Awards" priority/>
            </div>
            <p className="text-sm font-medium text-black">June 2022</p>
          </div>
        </div>
        <div className="px-3">
          <div className="flex flex-col text-center md:text-left">
            <div className="h-auto grow bg-[#FCFCFC] border border-solid border-[#DADADA] py-6 px-5 rounded-md mb-3">
              <Image src={awardsThree} alt="Awards" priority/>
            </div>
            <p className="text-sm font-medium text-black">February 2023</p>
          </div>
        </div>
        <div className="px-3">
          <div className="flex flex-col text-center md:text-left">
            <div className="h-auto grow bg-[#FCFCFC] border border-solid border-[#DADADA] py-6 px-5 rounded-md mb-3">
              <Image src={awardsFour} alt="Awards" priority/>
            </div>
            <p className="text-sm font-medium text-black">April 2023</p>
          </div>
        </div>
        <div className="px-3">
          <div className="flex flex-col text-center md:text-left">
            <div className="h-auto grow bg-[#FCFCFC] border border-solid border-[#DADADA] py-6 px-5 rounded-md mb-3">
              <Image src={awardsOne} alt="Awards" priority/>
            </div>
            <p className="text-sm font-medium text-black">March 2022</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}