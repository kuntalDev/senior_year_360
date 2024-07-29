"use client";
import Image from "next/image";
import { testimonialOne, textQuotations, testimonialTwo, pauseWhite, playWhite } from '../../../assets/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

const Testimonialsslider = ({testimonials_sec}) => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);
  const [navReady, setNavReady] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  //console.log('ryrtqwreqe',testimonials_sec);
  useEffect(() => {
    if (sliderForRef.current && sliderNavRef.current) {
      setNavReady(true);
    }
  }, []);

  const toggleAutoplay = () => {
    setAutoplay((prevAutoplay) => !prevAutoplay);
  };

  useEffect(() => {
    if (navReady && sliderNavRef.current) {
      sliderNavRef.current.slickPause();
      if (autoplay) {
        sliderNavRef.current.slickPlay();
      }
    }
  }, [autoplay, navReady]);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: sliderNavRef.current || undefined,
  };

  const settingsNav = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current || undefined,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    speed: 500,
  };

  return (
    <div className="flex flex-wrap items-center relative testimonialsslider lg:space-y-0 space-y-12">
      <div className="3xl:w-5/12 w-full lg:w-[45%] relative">
        <Slider {...settingsFor} ref={sliderForRef} className="senior-slide">
          {testimonials_sec?.testimonials_data .map((items, i) => {
                return (
                  <div key={i}>
                    <div className="lg:pr-[40px] pr-[25px]">
                      <div className="relative">
                        <div className="lg:h-[75px] lg:w-[75px] h-[45px] w-[45px] absolute top-8 lg:-right-8 -right-6 z-10">
                          <Image src={textQuotations} alt="mission" priority />
                        </div>
                        <div className="relative before:block before:w-full before:pt-[62%]">
                          <Image src={items?.image}  width={536} height={332} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })}
          
         
        </Slider>
        <button className="text-white text-sm uppercase font-bold w-7 h-7 p-1 rounded-full ml-auto flex items-center justify-center bg-primary absolute -bottom-[30px] left-[90px]"
          onClick={toggleAutoplay}
        >
          {autoplay ? (
            <Image src={pauseWhite} alt="pause" priority />
          ) : (
            <Image src={playWhite} alt="play" priority />
          )}
        </button>
      </div>
      <div className="w-full lg:w-6/12 ml-auto">
        <Slider {...settingsNav} ref={sliderNavRef} className="senior-slide">
          {testimonials_sec?.testimonials_data .map((items, i) => {
                return (
                  <div key={i}>
                    <div className="md:text-left text-center">
                      <h4 className="md:text-3xl text-2xl font-medium text-black mb-4 inter-font">{items?.title}</h4>
                      <p className="text-[#484848] text-lg font-normal"  dangerouslySetInnerHTML={{__html: items?.content}}></p>
                      <div className="lg:mt-12 mt-7">
                        <h5 className="text-black text-2xl font-medium mb-1">{items?.name}</h5>
                        <p className="text-[#2F2F2F] text-sm font-normal">{items?.designation}</p>
                      </div>
                    </div>
                  </div>
                )
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonialsslider;
