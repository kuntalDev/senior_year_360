"use client";

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { debounce } from 'lodash';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tabs = [
  {
    year: '2020',
    slides: [
      { id: '1', content: '11 second semester exam', titleheading: 'June 2020', imageUrl: '/personal/timeline-img-6.jpg' },
      { id: '2', content: 'Sports participate', titleheading: 'December 2020', imageUrl: '/personal/timeline-img-2.jpg' },
      { id: '3', content: 'Promoted to 12th class', titleheading: 'January 2020', imageUrl: '/personal/timeline-img-3.jpg' },
      { id: '4', content: 'The GK Competition winner', titleheading: 'March 2020', imageUrl: '/personal/timeline-img-5.jpg' },
      { id: '5', content: 'The GK Competition winner', titleheading: 'March 2020', imageUrl: '/personal/timeline-img-4.jpg' }
    ]
  },
  {
    year: '2021',
    slides: [
      { id: '1', content: '11 second semester exam', titleheading: 'June 2021', imageUrl: '/personal/timeline-img-2.jpg' },
      { id: '2', content: 'Sports participate', titleheading: 'December 2021', imageUrl: '/personal/timeline-img-5.jpg' },
      { id: '3', content: 'Promoted to 12th class', titleheading: 'January 2021', imageUrl: '/personal/timeline-img-4.jpg' },
      { id: '4', content: 'The GK Competition winner', titleheading: 'March 2021', imageUrl: '/personal/timeline-img-1.jpg' },
      { id: '5', content: 'The GK Competition winner', titleheading: 'March 2021', imageUrl: '/personal/timeline-img-6.jpg' }
    ]
  },
  {
    year: '2022',
    slides: [
      { id: '1', content: '11 second semester exam', titleheading: 'June 2022', imageUrl: '/personal/timeline-img-3.jpg' },
      { id: '2', content: 'Sports participate', titleheading: 'December 2022', imageUrl: '/personal/timeline-img-2.jpg' },
      { id: '3', content: 'Promoted to 12th class', titleheading: 'January 2022', imageUrl: '/personal/timeline-img-5.jpg' },
      { id: '4', content: 'The GK Competition winner', titleheading: 'March 2022', imageUrl: '/personal/timeline-img-6.jpg' },
      { id: '5', content: 'The GK Competition winner', titleheading: 'March 2022', imageUrl: '/personal/timeline-img-1.jpg' }
    ]
  },
  {
    year: '2023',
    slides: [
      { id: '1', content: '11 second semester exam', titleheading: 'June 2023', imageUrl: '/personal/timeline-img-6.jpg' },
      { id: '2', content: 'Sports participate', titleheading: 'December 2023', imageUrl: '/personal/timeline-img-5.jpg' },
      { id: '3', content: 'Promoted to 12th class', titleheading: 'January 2023', imageUrl: '/personal/timeline-img-2.jpg' },
      { id: '4', content: 'The GK Competition winner', titleheading: 'March 2023', imageUrl: '/personal/timeline-img-3.jpg' },
      { id: '5', content: 'The GK Competition winner', titleheading: 'March 2023', imageUrl: '/personal/timeline-img-4.jpg' }
    ]
  }
];

const TimelineSlider = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].year);
  const [slideCount, setSlideCount] = useState(0);
  const contentSliderRef = useRef(null);
  const tabSliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    afterChange: (current) => {
      const slider = contentSliderRef.current;
      if (slider) {
        const children = slider.props.children;
        const totalSlides = Array.isArray(children) ? children.length : 0;
        if (current === totalSlides - 1) {
          const currentIndex = tabs.findIndex(tab => tab.year === activeTab);
          const nextIndex = currentIndex + 1;
          if (nextIndex < tabs.length) {
            setActiveTab(tabs[nextIndex].year);
            tabSliderRef.current?.slickGoTo(nextIndex);
          }
        }
      }
    },
    onInit: () => {
      const slider = contentSliderRef.current;
      if (slider) {
        const children = slider.props.children;
        setSlideCount(Array.isArray(children) ? children.length : 0);
      }
    },
  };

  const tabSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => {
      setActiveTab(tabs[next].year);
    },
  };

  const debouncedSetActiveTab = useCallback(debounce((tab) => setActiveTab(tab), 300), []);

  const getSliderContent = (year) => {
    const tabData = tabs.find(tab => tab.year === year);
    if (tabData) {
      return (
        <div className='bottomSliderArrox Arrox-nxOrd'>
            <Slider {...settings} ref={contentSliderRef}>
              {tabData.slides.map(slide => (
                <div key={slide.id} className='px-3 pb-4'>
                  <div className='w-full relative before:w-full before:block before:pt-[90%] rounded-md mb-3' style={{backgroundImage: `url(${slide.imageUrl})`,backgroundSize: 'cover',backgroundPosition: 'center',}}/>
                  <div className='text-base text-primary font-semibold mb-1'>{slide.titleheading}</div>
                  <div className='text-xl text-black font-normal'>{slide.content}</div>
                </div>
              ))}
            </Slider>
        </div>
      );
    }
    return <div>No slides available</div>;
  };

  useEffect(() => {
    const slider = contentSliderRef.current;
    if (slider) {
      slider.slickGoTo(0);
      const children = slider.props.children;
      setSlideCount(Array.isArray(children) ? children.length : 0);
    }
  }, [activeTab]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <Slider {...tabSettings} className="tabs-slider relative before:h-0.5 before:block before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:bg-[#EEEEEE]" ref={tabSliderRef}>
          {tabs.map((tabData, index) => (
            <div key={index} className={`md:px-6 px-3 md:py-1.5 py-1 md:text-lg text-base text-black rounded-full font-medium border !w-auto border-solid cursor-pointer mx-auto tabstrl-btn inline-block ${ activeTab === tabData.year ? 'bg-primary border-primary text-white' : 'bg-white border-black' }`} onClick={() => debouncedSetActiveTab(tabData.year)}>
              {tabData.year}
            </div>
          ))}
        </Slider>
      </div>
      {getSliderContent(activeTab)}
    </div>
  );
};

export default TimelineSlider;
