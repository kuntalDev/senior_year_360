import AboutmeSlider from "../Component/Widgets/Personal/aboutme"
import ProgramtabSlider from "../Component/Widgets/Personal/programtabslider"
import TimelineSlider from "../Component/Widgets/Personal/timelineslider"
import BubblesSlider from "../Component/Widgets/Personal/bubblesslider"
// import Honorsawards from "../Component/Widgets/Personal/honorsawards"
import Personalizedtestimonials from "../Component/Widgets/Personal/personalizedtestimonials"
import Countdown from "../Component/Widgets/Homepage/countdown"
import Image from "next/image";
import { Layouts } from "../Component";
import {personalUserOne,instituteTgaone,instituteTgatwo,scholarshipOne,scholarshipTwo,scholarshipThree} from '../assets/index';
import Link from "next/link";
export default function Personal() {
  const targetDate = new Date('2024-12-31T23:59:59');
  return (
    <Layouts>
      <div>

        <div className="bg-secondary py-2 xl:mt-[102px] lg:mt-[84px] mt-[72px]">
          <div className="container mx-auto">
            <div className="flex md:flex-row flex-col items-center justify-center">
              <p className="2xl:text-lg lg:text-base text-sm text-white font-normal md:py-2 md:mr-3 md:mb-0 mb-1">
                Days left to <strong>Graduate</strong>
              </p>
              <Countdown targetDate={targetDate} />
            </div>
          </div>
        </div>

        <div className="lg:pt-16 pt-12">
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
                <div className="relative before:block before:w-full before:pt-[70%] max-w-[603px] ml-auto rounded-md overflow-hidden">
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
              <h4 className="text-black font-normal 2xl:text-3xl lg:text-2xl md:text-xl text-2xl">Discover key <span className="text-primary font-semibold">resources to help</span> you transition smoothly to senior year.</h4>
            </div>
            <div className="grid lg:grid-cols-[repeat(auto-fit,_minmax(455px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] grid-cols-1 lg:gap-x-10 gap-x-7 lg:gap-y-8 sm:gap-y-4 gap-y-8">
              <div className="sm:col-[1_/_2] lg:row-[1_/_3] sm:row-[1_/_2] flex">
                <div className="w-full">
                  <AboutmeSlider/>
                </div>
              </div>
              <div className="sm:col-[2_/_3] sm:row-[1_/_2] flex">
                <div className="w-full"> 
                  <h4 className="lg:text-3xl text-2xl font-bold text-black mb-4">Achievements</h4>
                  <ul className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 text-black list-decimal pl-5 gap-y-3 xl:gap-x-5 gap-x-7">
                    <li className="md:text-lg sm:text-base text-sm font-normal">Academic Excellence</li>
                    <li className="md:text-lg sm:text-base text-sm font-normal">Scholarships and Awards</li>
                    <li className="md:text-lg sm:text-base text-sm font-normal">Research and Publications</li>
                    <li className="md:text-lg sm:text-base text-sm font-normal">Community Service</li>
                    <li className="md:text-lg sm:text-base text-sm font-normal">Competitions and Honors</li>
                    <li className="md:text-lg sm:text-base text-sm font-normal">Arts and Sports</li>
                    <li className="md:text-lg sm:text-base text-sm font-normal">Internships and Work Experience</li>
                    <li className="md:text-lg sm:text-base text-sm font-normal">Professional Development</li>
                    <li className="md:text-lg sm:text-base text-sm font-normal">Global Engagement</li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-[2_/_3] sm:col-[1_/_3] lg:row-[2_/_3] sm:row-[2_/_3] flex">
                 <div>
                  <h4 className="lg:text-3xl text-2xl font-bold text-black mb-4">Future Goals</h4>
                  <p className="md:text-lg sm:text-base text-sm font-normal text-[#484848] leading-relaxed">Explore a robust array of tools and resources designed to propel you to academic success. Whether you&apos;re seeking additional support in specific subjects, looking for tutoring options, or aiming to gain a competitive edge in college admissions, our website has you covered.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container mx-auto">
            <div className="border border-solid border-[#E7E7E7] rounded-lg py-5 px-7">
              <h5 className="lg:text-3xl text-2xl font-bold text-black bg-white px-2 w-fit -mt-10">Education</h5>
              <div className="flex flex-wrap lg:space-y-0 space-y-5 lg:mt-2 mt-6">
                <div className="flex flex-wrap lg:w-8/12 w-full md:space-y-0 space-y-5">
                  <div className="md:w-6/12 w-full flex items-end">
                    <div className="flex space-x-4">
                      <div className="shrink-0 lg:w-20 w-16">
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
                      <div className="shrink-0 lg:w-20 w-16">
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
                  <div className="lg:border-l border-solid border-[#DFDFDF] lg:px-12 px-3">
                    <h5 className="lg:text-3xl text-2xl font-bold text-black mb-3">Skills</h5>
                    <p className="text-base font-normal text-[#484848]">Programming languages, software, tools, Communication, Teamwork, Problem-solving, etc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-24 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title text-black mb-3">Significant Moments</h2>
            </div>
            <TimelineSlider/>
          </div>
        </div>

        <div className="bg-[#F2F5F7] lg:py-24 py-16 bottomSliderArrox">
          <div className="container mx-auto">
            <div className="text-center lg:mb-12 mb-8">
              <h2 className="section-title">Enrichment Programs</h2>
            </div>
            <ProgramtabSlider/>
          </div>
        </div>

        <div className="bottomSliderArrox py-16">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title text-black mb-3">Testimonials</h2>
              <h4 className="text-black font-normal 2xl:text-3xl lg:text-2xl md:text-xl text-lg">What Our Friends, Family, And Teachers Are Saying</h4>
            </div>
            <Personalizedtestimonials/>
          </div>
        </div>

        <div className="bg-[#F2F5F7] py-16">
          <div className="container mx-auto">
            <div className="text-center lg:mb-20 mb-12">
              <h2 className="section-title text-black mb-3">Achieved Scholarship Fund </h2>
              <h4 className="text-black font-normal 2xl:text-xl lg:text-lg md:text-base text-sm">The Fulbright Foreign Student Program, a highly popular government-funded US scholarship, provides graduate students, young professionals, and artists the opportunity to study in the US for a year or longer.</h4>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div>
                <div className="lg:px-5 py-5 lg:py-0 h-full">
                  <div className="flex items-start h-full">
                    <div className="w-14 shrink-0 mr-7">
                      <Image src={scholarshipOne} alt="verification" className="ml-2" priority/>
                    </div>
                    <div className="h-full flex flex-col items-start">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Clark Merit <br/> Scholarships
                      </h3>
                      <p className="mb-4">Clark University offers a variety of merit and achievement-based scholarships. All applicants are automatically considered for these scholarships. There is no need for a separate application.</p>
                      <Link href="/" className="fill-btn text-center mt-auto uppercase">Apply</Link>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="lg:border-l lg:border-r border-t border-b lg:border-t-0 lg:border-b-0 border-solid boder-[#D9D9D9]">
                <div className="lg:px-5 py-5 lg:py-0 h-full">
                  <div className="flex items-start h-full">
                    <div className="w-14 shrink-0 mr-7">
                      <Image src={scholarshipTwo} alt="verification" className="ml-2" priority/>
                    </div>
                    <div className="h-full flex flex-col items-start">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Costs <br/>
                        and Financial Aid
                      </h3>
                      <p className="mb-4">Located in one of the safest regions of the United States with a very affordable cost of living, we provide a high-quality education at a lower cost than similar schools in more expensive locations.</p>
                      <Link href="/" className="fill-btn text-center mt-auto uppercase">Apply</Link>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div>
                <div className="lg:px-5 py-5 lg:py-0 h-full">
                  <div className="flex items-start h-full">
                    <div className="w-14 shrink-0 mr-7">
                      <Image src={scholarshipThree} alt="verification" className="ml-2" priority/>
                    </div>
                    <div className="h-full flex flex-col items-start">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Clark Merit <br/> Scholarships
                      </h3>
                      <p className="mb-4">At ETSU, we are committed to making education accessible to students from around the world. Our international scholarships exemplify this dedication, as we strive to fulfill our mission...</p>
                      <Link href="/" className="fill-btn text-center mt-auto uppercase">Apply</Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
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

        {/* <div className="pb-16 honorsAwardslider">
          <div className="container mx-auto">
            <div className="mb-8">
              <h5 className="lg:text-3xl text-2xl font-bold text-black">Education</h5>
            </div>
            <Honorsawards />
          </div>
        </div> */}

      </div>
    </Layouts>
  );
}