import AboutmeSlider from "../Component/Widgets/Personal/aboutme"
import ProgramtabSlider from "../Component/Widgets/Personal/programtabslider"
import TimelineSlider from "../Component/Widgets/Personal/timelineslider"
import BubblesSlider from "../Component/Widgets/Personal/bubblesslider"
import Honorsawards from "../Component/Widgets/Personal/honorsawards"
import Image from "next/image";
import { Layouts } from "../Component";
import {personalUserOne,instituteTgaone,instituteTgatwo} from '../assets/index';
import Link from "next/link";
export default function Personal() {
  return (
    <Layouts>
      <div>
        <div className="xl:mt-[102px] mt-[72px] lg:py-7 py-3">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
              <div>
                <div className="text-center md:text-left">
                  <p className="3xl:text-[28px] 2xl:text-[23px] md:text-xl text-lg 3xl:leading-10 2xl:leading-8 md:leading-8 leading-6 text-black mb-1 font-light">
                    <span className="font-semibold">Hi!</span><br />
                    My name is <strong>Meryl Blanchett</strong>
                  </p>
                  <h2 className="section-title text-black mb-3">Welcome to <span className="text-primary">My World</span></h2>
                  <p className="md:text-lg sm:text-base text-sm font-normal mb-6 text-[#484848] leading-relaxed"><strong>I am Meryl,</strong> a dedicated and enthusiastic student currently pursuing a degree in Bachelor of Laws at Yale University. My passion for Sports drives me to constantly seek out new learning opportunities and challenges.</p>
                  <Link href="/" className="outline-btn text-black hover:text-white border-black">Know More</Link>
                </div>
              </div>
              <div>
                <div className="relative before:block before:w-full before:pt-[100%] max-w-[603px] ml-auto rounded-md overflow-hidden">
                  <Image src={personalUserOne} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-24 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title text-black mb-3">
                About Me
              </h2>
              <h4 className="text-black font-normal 2xl:text-3xl lg:text-2xl md:text-xl text-2xl mb-3">Discover key <span className="text-primary font-semibold">resources to help</span> you transition smoothly to senior year.</h4>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <div>
                <AboutmeSlider/>
              </div>
              <div>
                <div className="md:space-y-7 space-y-5"> 
                  <p className="md:text-lg sm:text-base text-sm font-normal text-[#484848] leading-relaxed">Explore a robust array of tools and resources designed to propel you to academic success. Whether you&apos;re seeking additional support in specific subjects, looking for tutoring options, or aiming to gain a competitive edge in college admissions, our website has you covered. Access invaluable resources such as academic support services, tutoring programs, and comprehensive college prep materials. Explore a robust array of tools and resources designed to propel you to academic success. Whether you&apos;re seeking additional support in specific subjects, looking for tutoring options, or aiming to gain a competitive edge in college admissions, our website has you covered. Access invaluable resources such as academic support services, tutoring programs, and comprehensive college prep materials. </p>
                  <p className="md:text-lg sm:text-base text-sm font-normal text-[#484848] leading-relaxed">Explore a robust array of tools and resources designed to propel you to academic success. Whether you&apos;re seeking additional support in specific subjects, looking for tutoring options, or aiming to gain a competitive edge in college admissions, our website has you covered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container mx-auto">
            <div className="lg:mb-0 mb-3">
              <h5 className="lg:text-3xl text-2xl font-bold text-black">Education</h5>
            </div>
            <div className="flex flex-wrap lg:space-y-0 space-y-5">
              <div className="flex flex-wrap lg:w-8/12 w-full md:space-y-0 space-y-5">
                <div className="md:w-6/12 w-full flex items-end">
                  <div className="flex space-x-4">
                    <div className="shrink-0 w-20">
                      <Image src={instituteTgaone} alt="instituteTga" priority/>
                    </div>
                    <div className="grow">
                      <h5 className="text-xl font-semibold text-[#484848]">Academic Magnet High School</h5>
                      <p className="text-base font-normal text-[#484848]">Bachelor of [Your Degree], [Your Major] August, 2022- Present</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-6/12 w-full flex items-end md:px-5">
                  <div className="flex space-x-4">
                    <div className="shrink-0 w-20">
                      <Image src={instituteTgatwo} alt="instituteTga" priority/>
                    </div>
                    <div className="grow">
                      <h5 className="text-xl font-semibold text-[#484848]">Law colleges in USA</h5>
                      <p className="text-base font-normal text-[#484848]">Bachelor of [Your Degree], [Your Major] August, 2022- Present</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-4/12 w-full">
                <div className="border-l border-solid border-[#DFDFDF] lg:px-12 px-3">
                  <h5 className="lg:text-3xl text-2xl font-bold text-black lg:mb-12 mb-3 lg:-mt-8">Skills</h5>
                  <p className="text-base font-normal text-[#484848]">Programming languages, software, tools, Communication, Teamwork, Problem-solving, etc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-24 py-16">
          <div className="container mx-auto">
            <TimelineSlider/>
          </div>
        </div>

        <div className="bg-[#F2F5F7] lg:py-24 py-16">
          <div className="container mx-auto">
            <div className="text-center lg:mb-12 mb-8">
              <h2 className="section-title">Enrichment Programs</h2>
            </div>
            <ProgramtabSlider/>
          </div>
        </div>

        <div className="lg:py-24 py-16 bottomSliderArrox">
          <div className="container mx-auto">
            <div className="text-center lg:mb-12 mb-8">
              <h2 className="section-title">Friends Bubbles</h2>
            </div>
            <BubblesSlider />
          </div>
        </div>

        <div className="pb-16 honorsAwardslider">
          <div className="container mx-auto">
            <div className="mb-8">
              <h5 className="lg:text-3xl text-2xl font-bold text-black">Education</h5>
            </div>
            <Honorsawards />
          </div>
        </div>
      </div>
    </Layouts>
  );
}