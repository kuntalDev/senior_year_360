"use client";

import Image from "next/image";
import { testiReviewedOne,testiReviewedTwo,testiReviewedThree } from '../../../assets/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Personalizedtestimonials() {

  const timonialsTwo = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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

  return (
    <div>
      <Slider {...timonialsTwo} className="fullHitSidr">
        <div className="px-3 py-5">
          <div className="border border-solid border-[#ECECEC] shadow-lg rounded-lg p-7 h-full flex flex-col">
            <div className="text-quot flex items-start">
              <div>
                <p className="md:text-lg sm:text-base text-sm font-normal text-[#484848] leading-relaxed">Meryl  Blanchett is a model student who consistently goes above and beyond. Their dedication to their studies is inspiring, and they are a role model for their peers.</p>
              </div>
            </div>
            <div className="flex items-start w-fit ml-auto bg-white pt-3 mt-auto">
              <div className="w-12 shrink-0 relative before:block before:w-full before:pt-[100%] overflow-hidden rounded-full mr-4 top-1">
                <Image src={testiReviewedOne} alt="ReviewedOne" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[#000000] mb-1">Laurence Terman</h5>
                <p className="md:text-base sm:text-sm text-xs font-medium text-[#404040]">School Teacher</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-5">
          <div className="border border-solid border-[#ECECEC] shadow-lg rounded-lg p-7 h-full flex flex-col">
            <div className="text-quot flex items-start">
              <div>
                <p className="md:text-lg sm:text-base text-sm font-normal text-[#484848] leading-relaxed">Meryl  Blanchett has the best sense of humor! They can always make me laugh, even on the toughest days. They're the life of the party and always know how to lighten the mood.</p>
              </div>
            </div>
            <div className="flex items-start w-fit ml-auto bg-white pt-3 mt-auto">
              <div className="w-12 shrink-0 relative before:block before:w-full before:pt-[100%] overflow-hidden rounded-full mr-4 top-1">
                <Image src={testiReviewedTwo} alt="ReviewedOne" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[#000000] mb-1">Antonio Pacino</h5>
                <p className="md:text-base sm:text-sm text-xs font-medium text-[#404040]">Friend</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-5">
          <div className="border border-solid border-[#ECECEC] shadow-lg rounded-lg p-7 h-full flex flex-col">
            <div className="text-quot flex items-start">
              <div>
                <p className="md:text-lg sm:text-base text-sm font-normal text-[#484848] leading-relaxed">Meryl  Blanchett is the kindest person I know. They always put others before themselves and are always willing to help. They're a true friend.</p>
              </div>
            </div>
            <div className="flex items-start w-fit ml-auto bg-white pt-3 mt-auto">
              <div className="w-12 shrink-0 relative before:block before:w-full before:pt-[100%] overflow-hidden rounded-full mr-4 top-1">
                <Image src={testiReviewedThree} alt="ReviewedOne" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
              </div>
              <div>
                <h5 className="text-xl font-semibold text-[#000000] mb-1">Laurence Terman</h5>
                <p className="md:text-base sm:text-sm text-xs font-medium text-[#404040]">Friend</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
