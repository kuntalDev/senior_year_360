"use client";
import Link from "next/link";
import Image from "next/image";
import {seniorPersonOne,seniorPersonTwo,seniorPersonThree,seniorPersonFour,seniorPersonFive,vaticanoCheckOff,vaticanoCheckOn} from '../../../assets/index';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function yearlyslider() {
  var settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settingsTwo} className="senior-slde">
      <div>
        <div className="p-4 bg-white border border-solid border-[#f0f0f0] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.08)] text-center rounded-lg">
          <div className="w-7 ml-auto">
            <Image src={vaticanoCheckOff} alt="verification" className="" priority/>
          </div>
          <div className="mb-4 relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden bg-slate-400 max-w-40 mx-auto">
            <Image src={seniorPersonOne} alt="seniorPerson" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
          </div>
          <div className="text-center">
            <h4 className="3xl:text-2xl text-xl text-black font-semibold inter-font">Antonio Jackman</h4>
            <p className="text-sm text-[#939393] font-medium">Senior Student</p>
          </div>
          <div className="flex flex-col mt-12 mb-3">
            <div className="bg-[#E8E8E8] rounded-full flex">
              <div className="bg-[#0278FA] rounded-full h-3 relative" style={{ width: '26%' }}>
                <div className="progress-tooltp">
                  26%
                </div>
              </div>
            </div>
            <p className="ml-auto text-xs text-[#575757] font-normal mt-2">Votes 4512</p>
          </div>
          
          <Link href="/" className="bg-transparent border border-solid border-primary hover:bg-primary hover:bg-opacity-50 border-opacity-50 text-sm tracking-wider inline-block text-primary hover:text-white font-semibold no-underline rounded px-4 py-1 transition-all">Vote</Link>
        </div>
      </div>
      <div>
        <div className="p-4 bg-white border border-solid border-[#f0f0f0] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.08)] text-center rounded-lg">
          <div className="w-7 ml-auto">
            <Image src={vaticanoCheckOn} alt="verification" className="" priority/>
          </div>
          <div className="mb-4 relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden bg-slate-400 max-w-40 mx-auto">
            <Image src={seniorPersonTwo} alt="seniorPerson" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
          </div>
          <div className="text-center">
            <h4 className="3xl:text-2xl text-xl text-black font-semibold inter-font">Will Smith</h4>
            <p className="text-sm text-[#939393] font-medium">Senior Student</p>
          </div>
          <div className="flex flex-col mt-12 mb-3">
            <div className="bg-[#E8E8E8] rounded-full flex">
              <div className="bg-[#0278FA] rounded-full h-3 relative" style={{ width: '58%' }}>
                <div className="progress-tooltp">
                  58%
                </div>
              </div>
            </div>
            <p className="ml-auto text-xs text-[#575757] font-normal mt-2">Votes 12450</p>
          </div>
          
          <Link href="/" className="bg-[#F4F4F4] cursor-no-drop border border-solid border-[#E1E2E3] border-opacity-50 text-sm tracking-wider inline-block text-[#D3D4D6] font-semibold no-underline rounded px-4 py-1 transition-all">Voted</Link>
        </div>
      </div>
      <div>
        <div className="p-4 bg-white border border-solid border-[#f0f0f0] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.08)] text-center rounded-lg">
          <div className="w-7 ml-auto">
            <Image src={vaticanoCheckOff} alt="verification" className="" priority/>
          </div>
          <div className="mb-4 relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden bg-slate-400 max-w-40 mx-auto">
            <Image src={seniorPersonThree} alt="seniorPerson" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
          </div>
          <div className="text-center">
            <h4 className="3xl:text-2xl text-xl text-black font-semibold inter-font">Meryl  Blanchett</h4>
            <p className="text-sm text-[#939393] font-medium">Senior Student</p>
          </div>
          <div className="flex flex-col mt-12 mb-3">
            <div className="bg-[#E8E8E8] rounded-full flex">
              <div className="bg-[#0278FA] rounded-full h-3 relative" style={{ width: '18%' }}>
                <div className="progress-tooltp">
                  18%
                </div>
              </div>
            </div>
            <p className="ml-auto text-xs text-[#575757] font-normal mt-2">Votes 2400</p>
          </div>
          
          <Link href="/" className="bg-transparent border border-solid border-primary hover:bg-primary hover:bg-opacity-50 border-opacity-50 text-sm tracking-wider inline-block text-primary hover:text-white font-semibold no-underline rounded px-4 py-1 transition-all">Vote</Link>
        </div>
      </div>
      <div>
        <div className="p-4 bg-white border border-solid border-[#f0f0f0] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.08)] text-center rounded-lg">
          <div className="w-7 ml-auto">
            <Image src={vaticanoCheckOff} alt="verification" className="" priority/>
          </div>
          <div className="mb-4 relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden bg-slate-400 max-w-40 mx-auto">
            <Image src={seniorPersonFour} alt="seniorPerson" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
          </div>
          <div className="text-center">
            <h4 className="3xl:text-2xl text-xl text-black font-semibold inter-font">Marlon Brando</h4>
            <p className="text-sm text-[#939393] font-medium">Senior Student</p>
          </div>
          <div className="flex flex-col mt-12 mb-3">
            <div className="bg-[#E8E8E8] rounded-full flex">
              <div className="bg-[#0278FA] rounded-full h-3 relative" style={{ width: '52%' }}>
                <div className="progress-tooltp">
                  52%
                </div>
              </div>
            </div>
            <p className="ml-auto text-xs text-[#575757] font-normal mt-2">Votes 10480</p>
          </div>
          
          <Link href="/" className="bg-transparent border border-solid border-primary hover:bg-primary hover:bg-opacity-50 border-opacity-50 text-sm tracking-wider inline-block text-primary hover:text-white font-semibold no-underline rounded px-4 py-1 transition-all">Vote</Link>
        </div>
      </div>
      <div>
        <div className="p-4 bg-white border border-solid border-[#f0f0f0] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.08)] text-center rounded-lg">
          <div className="w-7 ml-auto">
            <Image src={vaticanoCheckOff} alt="verification" className="" priority/>
          </div>
          <div className="mb-4 relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden bg-slate-400 max-w-40 mx-auto">
            <Image src={seniorPersonFive} alt="seniorPerson" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
          </div>
          <div className="text-center">
            <h4 className="3xl:text-2xl text-xl text-black font-semibold inter-font">Nicole Hanks</h4>
            <p className="text-sm text-[#939393] font-medium">Senior Student</p>
          </div>
          <div className="flex flex-col mt-12 mb-3">
            <div className="bg-[#E8E8E8] rounded-full flex">
              <div className="bg-[#0278FA] rounded-full h-3 relative" style={{ width: '36%' }}>
                <div className="progress-tooltp">
                  36%
                </div>
              </div>
            </div>
            <p className="ml-auto text-xs text-[#575757] font-normal mb-2">Votes 6840</p>
          </div>
          
          <Link href="/" className="bg-transparent border border-solid border-primary hover:bg-primary hover:bg-opacity-50 border-opacity-50 text-sm tracking-wider inline-block text-primary hover:text-white font-semibold no-underline rounded px-4 py-1 transition-all">Vote</Link>
        </div>
      </div>
    </Slider>
  );
}
