"use client";

import Image from "next/image";
import {blbeOne,blbeTwo,blbeThree,blbeFour,blbeFive} from '../../../assets/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BubblesSlider() {

  var aboutMeSld = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
      <Slider {...aboutMeSld}>
        <div className="px-3 pb-4">
          <div className="bg-[#F9F9F9] hover:bg-white hover:shadow-lg rounded-md overflow-hidden border border-solid border-[#E9E9E9]">
            <div className="relative before:block before:w-full before:pt-[84%]">
              <Image src={blbeOne} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
            </div>
            <div className="py-4 px-5 text-center md:text-left">
              <h4 className="lg:text-xl text-lg font-semiboldtext-black mb-1">Tom Jackman</h4>
              <p className="text-sm text-[#6C6C6C] font-normal">High School Student</p>
            </div>
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="bg-[#F9F9F9] hover:bg-white hover:shadow-lg rounded-md overflow-hidden border border-solid border-[#E9E9E9]">
            <div className="relative before:block before:w-full before:pt-[84%]">
              <Image src={blbeTwo} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
            </div>
            <div className="py-4 px-5 text-center md:text-left">
              <h4 className="lg:text-xl text-lg font-semiboldtext-black mb-1">Harrison Ford</h4>
              <p className="text-sm text-[#6C6C6C] font-normal">College Student</p>
            </div>
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="bg-[#F9F9F9] hover:bg-white hover:shadow-lg rounded-md overflow-hidden border border-solid border-[#E9E9E9]">
            <div className="relative before:block before:w-full before:pt-[84%]">
              <Image src={blbeThree} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
            </div>
            <div className="py-4 px-5 text-center md:text-left">
              <h4 className="lg:text-xl text-lg font-semiboldtext-black mb-1">Natalie Portman</h4>
              <p className="text-sm text-[#6C6C6C] font-normal">College Pass-out 2020</p>
            </div>
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="bg-[#F9F9F9] hover:bg-white hover:shadow-lg rounded-md overflow-hidden border border-solid border-[#E9E9E9]">
            <div className="relative before:block before:w-full before:pt-[84%]">
              <Image src={blbeFour} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
            </div>
            <div className="py-4 px-5 text-center md:text-left">
              <h4 className="lg:text-xl text-lg font-semiboldtext-black mb-1">Marlon Mirren</h4>
              <p className="text-sm text-[#6C6C6C] font-normal">College Student</p>
            </div>
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="bg-[#F9F9F9] hover:bg-white hover:shadow-lg rounded-md overflow-hidden border border-solid border-[#E9E9E9]">
            <div className="relative before:block before:w-full before:pt-[84%]">
              <Image src={blbeFive} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
            </div>
            <div className="py-4 px-5 text-center md:text-left">
              <h4 className="lg:text-xl text-lg font-semiboldtext-black mb-1">Julianne Moore</h4>
              <p className="text-sm text-[#6C6C6C] font-normal">College Student</p>
            </div>
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="bg-[#F9F9F9] hover:bg-white hover:shadow-lg rounded-md overflow-hidden border border-solid border-[#E9E9E9]">
            <div className="relative before:block before:w-full before:pt-[84%]">
              <Image src={blbeOne} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
            </div>
            <div className="py-4 px-5 text-center md:text-left">
              <h4 className="lg:text-xl text-lg font-semiboldtext-black mb-1">Tom Jackman</h4>
              <p className="text-sm text-[#6C6C6C] font-normal">High School Student</p>
            </div>
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="bg-[#F9F9F9] hover:bg-white hover:shadow-lg rounded-md overflow-hidden border border-solid border-[#E9E9E9]">
            <div className="relative before:block before:w-full before:pt-[84%]">
              <Image src={blbeTwo} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
            </div>
            <div className="py-4 px-5 text-center md:text-left">
              <h4 className="lg:text-xl text-lg font-semiboldtext-black mb-1">Harrison Ford</h4>
              <p className="text-sm text-[#6C6C6C] font-normal">College Student</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}