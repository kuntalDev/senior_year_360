"use client"
import React from 'react'
import { Layouts } from "./Component";
import Countdown from "./Component/Widgets/Homepage/countdown"
import Journeyslider from "./Component/Widgets/Homepage/journeyslider"
import Yearlyslider from "./Component/Widgets/Homepage/yearlyslider"
import Homecontact from "./Component/Widgets/Homepage/homecontact"
import Testimonialsslider from "./Component/Widgets/Homepage/testimonialsslider"
// import Getoffer from "./Component/Widgets/Homepage/getoffer"
import Freetrialmodal from "./Component/Widgets/Homepage/freetrialmodal"

import Image from "next/image";
import {homeBanner,arrowWhiteEight,missionIconOne,missionIconTwo,missionIconThree,missionIconFour,missionIconFive,deviceFrams,lineSpk} from '../app/assets/index';
import Link from "next/link";
export default function Page() {

  const targetDate = new Date('2024-12-31T23:59:59');


  return (
    <Layouts>
      <div>

        <div className="bg-secondary py-2 xl:mt-[102px] mt-[72px]">
          <div className="container mx-auto">
            <div className="flex md:flex-row flex-col items-center justify-center">
              <p className="2xl:text-lg lg:text-base text-sm text-white font-normal md:py-2 md:mr-3 md:mb-0 mb-1">
                Days left to <strong>Graduate</strong>
              </p>
              <Countdown targetDate={targetDate} />
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${homeBanner.src})` }} className="bg-gray-400 bg-cover bg-no-repeat bg-center lmd:py-28 md:py-20 sm:py-16 py-12"> 
          <div className="container mx-auto">
            <div className="max-w-[510px] bg-black bg-opacity-55 text-white md:px-8 md:py-9 px-5 py-5 md:text-left text-center">
              <h1 className="section-title mb-3">A Day to Remember <span className="text-primary">you deserve</span> this</h1>
              <p className="md:text-lg sm:text-base text-sm font-normal mb-5">This day is dedicated to remembering your <br /> incredible journey and the amazing things you&#39;ve achieved - you deserve every bit of happiness that comes your way.</p>
              <div className="md:space-x-4 md:space-y-0 space-y-4 md:block flex flex-col items-center">
                <Link href="/" className="fill-btn md:w-auto text-center md:text-left md:justify-start justify-center">Registration</Link>
                <Link href="/" className="outline-btn md:w-auto text-center md:text-left md:justify-start justify-center text-white border-white">Know More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-14 border-b border-solid border-[#E0E0E0]">
          <div className="container mx-auto">
            <div className="text-black text-center md:mb-14 mb-8">
              <h2 className="section-title">Your Guide to Our Services for <br /> Incoming Seniors</h2>
            </div>
            <div className="grid xl:grid-cols-5 lmd:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 md:gap-y-3 gap-y-6">
              <div className="flex items-start">
                <span className="2xl:w-11 2xl:h-11 xl:w-8 xl:h-8 w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-3 bg-primary text-xl text-white font-semibold">1</span>
                <p className="3xl:text-[24px] 2xl:text-[22px] text-xl leading-tight font-medium text-[#333333]">Academic Success</p>
              </div>
              <div className="flex items-start">
                <span className="2xl:w-11 2xl:h-11 xl:w-8 xl:h-8 w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-3 bg-primary text-xl text-white font-semibold">2</span>
                <p className="3xl:text-[24px] 2xl:text-[22px] text-xl leading-tight font-medium text-[#333333]">College & Career Planning</p>
              </div>
              <div className="flex items-start">
                <span className="2xl:w-11 2xl:h-11 xl:w-8 xl:h-8 w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-3 bg-primary text-xl text-white font-semibold">3</span>
                <p className="3xl:text-[24px] 2xl:text-[22px] text-xl leading-tight font-medium text-[#333333]">Financial Aid & Scholarships</p>
              </div>
              <div className="flex items-start">
                <span className="2xl:w-11 2xl:h-11 xl:w-8 xl:h-8 w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-3 bg-primary text-xl text-white font-semibold">4</span>
                <p className="3xl:text-[24px] 2xl:text-[22px] text-xl leading-tight font-medium text-[#333333]">Campus Life & Community</p>
              </div>
              <div className="flex items-start">
                <span className="2xl:w-11 2xl:h-11 xl:w-8 xl:h-8 w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-3 bg-primary text-xl text-white font-semibold">5</span>
                <p className="3xl:text-[24px] 2xl:text-[22px] text-xl leading-tight font-medium text-[#333333]">Getting Ready for Next Steps</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-32 md:py-20 py-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
              <div>
                <div className="text-[#484848] md:text-left text-center">
                  <h2 className="section-title text-black mb-3">Senior Year Journey</h2>
                  <h6 className="2xl:text-[28px] md:text-2xl text-lg 2xl:leading-10 md:leading-8 leading-6 font-normal text-black mb-4">Discover key <strong className="text-primary">resources to help</strong> you transition smoothly to senior year.</h6>
                  <p className="md:text-lg sm:text-base text-sm font-normal mb-6 text-[#484848]">Explore a robust array of tools and resources designed to propel you to academic success. Whether you&#39;re seeking additional support in specific subjects, looking for tutoring options, or aiming to gain a competitive edge in college admissions, our website has you covered. Access invaluable resources such as academic support services, tutoring programs, and comprehensive college prep materials.</p>
                  <Link href="/" className="fill-btn">More Explore</Link>
                </div>
              </div>
              <div>
                <Journeyslider/>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#23425F] py-20">
          <div className="container mx-auto">
            <div className="text-white text-center mb-14">
              <h2 className="section-title mb-3">
                Senior of the Year  
              </h2>
              <p className="2xl:text-2xl text-xl font-normal">Choose your favorite senior <strong className="text-primary">VOTE NOW!</strong></p>
            </div>
              <Yearlyslider />
            <div className="text-center mt-14">
              <Link href="/" className="outline-btn text-white border-white items-center">View All Candidates
                <Image src={arrowWhiteEight} alt="verification" className="ml-2" priority/>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F5F7] lg:pt-20 pt-12 lg:pb-32 pb-20">
          <div className="container mx-auto xl:px-0 px-6">
            <div className="text-black text-center lg:mb-20 mb-12">
              <h2 className="section-title mb-3">
                Our Mission
              </h2>
              <p className="2xl:text-2xl text-xl font-normal">Empower yourself to achieve academic excellence!</p>
            </div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1"> 
              <div className="md:scale-110 scale-105">
                <div className="relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden border border-dashed border-[#A4A4A4] bg-white group hover:bg-primary hover:[box-shadow:0px_4px_33px_0px_rgba(0,_0,_0,_0.25)]">
                  <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-9 py-3">
                    <div className="2xl:max-w-16 max-w-10 mx-auto 2xl:mb-4 mb-3">
                      <Image src={missionIconOne} alt="mission" className="mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                    </div>
                    <h3 className="text-black font-semibold inter-font 2xl:text-2xl text-xl mb-2 group-hover:text-white">Primary School</h3>
                    <p className="text-[#484848] font-normal 2xl:text-sm md:text-xs text-lg group-hover:text-white">Suspendisse lobortis maximus odio at laoreet. Donec auctor ante eu eleifend luctus.</p>
                  </div>
                </div>
              </div>
              <div className="md:scale-110 scale-105">
                <div className="relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden border border-dashed border-[#A4A4A4] bg-white group hover:bg-primary hover:[box-shadow:0px_4px_33px_0px_rgba(0,_0,_0,_0.25)]">
                  <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-9 py-3">
                    <div className="2xl:max-w-16 max-w-10 mx-auto 2xl:mb-4 mb-3">
                      <Image src={missionIconTwo} alt="mission" className="mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                    </div>
                    <h3 className="text-black font-semibold inter-font 2xl:text-2xl text-xl mb-2 group-hover:text-white">High School</h3>
                    <p className="text-[#484848] font-normal 2xl:text-sm md:text-xs text-lg group-hover:text-white">Suspendisse lobortis maximus odio at laoreet. Donec auctor ante eu eleifend luctus.</p>
                  </div>
                </div>
              </div>
              <div className="md:scale-110 scale-105">
                <div className="relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden border border-dashed border-[#A4A4A4] bg-white group hover:bg-primary hover:[box-shadow:0px_4px_33px_0px_rgba(0,_0,_0,_0.25)]">
                  <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-9 py-3">
                    <div className="4 2xl:max-w-16 max-w-10 mx-auto 2xl:mb-4 mb-3">
                      <Image src={missionIconThree} alt="mission" className="mx-aut0 group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                    </div>
                    <h3 className="text-black font-semibold inter-font 2xl:text-2xl text-xl mb-2 group-hover:text-white">College</h3>
                    <p className="text-[#484848] font-normal 2xl:text-sm md:text-xs text-lg group-hover:text-white">Suspendisse lobortis maximus odio at laoreet. Donec auctor ante eu eleifend luctus.</p>
                  </div>
                </div>
              </div>
              <div className="md:scale-110 scale-105">
                <div className="relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden border border-dashed border-[#A4A4A4] bg-white group hover:bg-primary hover:[box-shadow:0px_4px_33px_0px_rgba(0,_0,_0,_0.25)]">
                  <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-9 py-3">
                    <div className=" 2xl:max-w-16 max-w-10 mx-auto 2xl:mb-4 mb-3">
                      <Image src={missionIconFour} alt="mission" className="mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                    </div>
                    <h3 className="text-black font-semibold inter-font 2xl:text-2xl text-xl mb-2 group-hover:text-white">The Military</h3>
                    <p className="text-[#484848] font-normal 2xl:text-sm md:text-xs text-lg group-hover:text-white">Suspendisse lobortis maximus odio at laoreet. Donec auctor ante eu eleifend luctus.</p>
                  </div>
                </div>
              </div>
              <div className="md:scale-110 scale-105">
                <div className="relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden border border-dashed border-[#A4A4A4] bg-white group hover:bg-primary hover:[box-shadow:0px_4px_33px_0px_rgba(0,_0,_0,_0.25)]">
                  <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-9 py-3">
                    <div className=" 2xl:max-w-16 max-w-10 mx-auto 2xl:mb-4 mb-3">
                      <Image src={missionIconFive} alt="mission" className="mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                    </div>
                    <h3 className="text-black font-semibold inter-font 2xl:text-2xl text-xl mb-2 group-hover:text-white">Medical School</h3>
                    <p className="text-[#484848] font-normal 2xl:text-sm md:text-xs text-lg group-hover:text-white">Suspendisse lobortis maximus odio at laoreet. Donec auctor ante eu eleifend luctus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-40 md:pt-28 pt-14 lg:pb-32 md:pb-20 pb-9">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-16">
              <div>
                <div className="max-w-[626px] md:text-left text-center">
                  <h2 className="section-title text-black mb-3">
                    Expert Recommendations
                  </h2>
                  <h4 className="text-[#646464] font-normal 2xl:text-3xl lg:text-2xl md:text-xl text-2xl mb-3">Tips on creating personalized pages</h4>
                  <p className="text-lg font-normal mb-6">Donec nec enim quis leo congue ultrices. Duis nec tellus odio. Vestibulum lacinia arcu non orci vulputate commodo. Phasellus ut viverra urna. Integer suscipit ligula auctor magna lobortis rhoncus. Proin nec scelerisque dui, sit amet blandit odio. Nunc iaculis risus eulorem...</p>
                  <div className="lg:space-x-4 space-y-4 md:space-x-0 space-x-4">
                    <Link href="/" className="fill-btn">Click Here</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="relative">
                    <div className="bg-[#FAFAFA] w-full -top-[50px] absolute left-1/2 -translate-x-1/2 before:block before:w-full before:pt-[100%] rounded-full overflow-hidden max-w-[600px]"></div>
                    <div className="relative z-10 before:block before:w-full before:pt-[100%] max-w-[460px] mx-auto">
                      <Image src={deviceFrams} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-40 md:py-28 py-14">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-16">
              <div>
                <div className="relative">
                  <div className="relative">
                    <div className="bg-[#FAFAFA] w-full -top-[50px] absolute left-1/2 -translate-x-1/2 before:block before:w-full before:pt-[100%] rounded-full overflow-hidden max-w-[600px]"></div>
                    <div className="relative z-10 before:block before:w-full before:pt-[100%] max-w-[460px] mx-auto">
                      <Image src={deviceFrams} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                    </div>
                  </div>
                  <div className="2xl:w-[200px] w-[120px] absolute 3xl:left-[11px] 2xl:left-0 bottom-0 z-10">
                    <Image src={lineSpk} alt="mission" className="" priority/>
                    <p className="2xl:text-3xl xl:text-2xl text-xl text-black itim-font uppercase font-semibold">Create your Personalized template </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-[626px] md:text-left text-center">
                  <h2 className="section-title text-black mb-3">
                    Personalized and Template
                  </h2>
                  <p className="text-lg font-normal mb-6">We understand the complexities of financing your college education. Our website simplifies the process by providing clear and concise information about scholarships, grants, and various financial aid options. Access helpful tools that guide you through application processes and empower you to manage college costs effectively.</p>
                  <div className="lg:space-x-4 space-y-4 md:space-x-0 space-x-4">
                    <Link href="/" className="fill-btn">Sign up Now</Link>
                    <Link href="/" className="outline-btn text-black hover:text-white border-black">Expert Recommendations</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-32 pt-24 2xl:pb-28 pb-12 relative before:absolute before:w-[62vw] before:bg-[#F6F6F6] before:right-0 before:bottom-0 before:top-40 before:block">
          <div className="container mx-auto relative z-20">
            <div className="3xl:w-5/12 lg:w-[45%] 2xl:mb-14 lg:mb-4 mb-8 md:text-left text-center">
              <h5 className="text-primary 2xl:text-3xl lg:text-xl md:text-2xl text-xl font-bold mb-3">Testimonials</h5>
              <h2 className="section-title text-black">What Our Students Are Saying</h2>
            </div>
            <Testimonialsslider />
          </div>
        </div>

        {/* <div className="md:py-24 py-16"> 
          <div className="container mx-auto">
            <Getoffer />
          </div>
        </div> */}

        <div className="2xl:pt-24 overflow-hidden relative z-20 after:w-screen after:bg-secondary after:absolute after:left-0 after:bottom-0 after:h-28">
          <div className="container mx-auto relative z-10">
            <Homecontact />
          </div>
        </div>

        <Freetrialmodal/>

      </div>
    </Layouts>
  );
}
