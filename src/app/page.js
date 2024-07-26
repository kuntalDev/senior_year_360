"use client"
import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { Layouts } from "./Component";
import Countdown from "./Component/Widgets/Homepage/countdown"
import Journeyslider from "./Component/Widgets/Homepage/journeyslider"
import Yearlyslider from "./Component/Widgets/Homepage/yearlyslider"
import Homecontact from "./Component/Widgets/Homepage/homecontact"
import Testimonialsslider from "./Component/Widgets/Homepage/testimonialsslider"
import Freetrialmodal from "./Component/Widgets/Homepage/freetrialmodal"
import Loader from "./Component/Widgets/Loader";
import Image from "next/image";
import {arrowWhiteEight,lineSpk} from '../app/assets/index';
import Link from "next/link";
export default function Page() {
  const targetDate = new Date('2024-12-31T23:59:59');
  
  const [homeData, sethomeData] = useState();
  const [bannerData, setBannerData] = useState();
  const [ourServicesData, setOurServicesData] = useState();
  const [seniorJourneyData, setSeniorJourneyData] = useState();
  const [seniorOfTheYearData, setSeniorOfTheYearData] = useState();
  const [ourMissionData, setOurMissionData] = useState();
  const [expertData, setExpertData] = useState();
  const [personalizedData, setPersonalizedData] = useState();
  const [testimonialsData, setTestimonialsData] = useState();
  const [contactUsData, setContactUsData] = useState();
  const [ishomeLoader, setIshomeLoader] = useState(true);
  async function homeApi() {
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get_home_data`)
      .then(await function (response) {
          if(response && response?.data){
              sethomeData(response?.data)
              setBannerData(response?.data?.banner_sec)
              setOurServicesData(response?.data?.our_services_sec)
              setSeniorJourneyData(response?.data?.senior_journey_sec)
              setSeniorOfTheYearData(response?.data?.senior_of_the_year_sec)
              setOurMissionData(response?.data?.our_mission_sec)
              setPersonalizedData(response?.data?.personalized_sec)
              setExpertData(response?.data?.expert_sec)
              setTestimonialsData(response?.data?.testimonials_sec)
              setContactUsData(response?.data?.contact_us_sec)
              // console.log('AAAAA',response?.data?.testimonials_sec)
          }
      })
      .catch(await function (error) {
      })
      .finally(() => {
          console.log('Experiment completed');
          setIshomeLoader(false);
      });
  };
  useEffect(() => {
      setIshomeLoader(true);
      homeApi()
  
  }, [10000]);
  
  return (
    <Layouts>
      {/* {homeData ? ( */}
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

        <div style={{ backgroundImage: `url(${bannerData?.banner_image})` }} className="bg-gray-400 bg-cover bg-no-repeat bg-center lmd:py-28 md:py-20 sm:py-16 py-12"> 
          <div className="container mx-auto">
            <div className="max-w-[510px] mx-auto md:mx-0 bg-black bg-opacity-55 text-white md:px-8 md:py-9 px-5 py-5 md:text-left text-center">
              <h1 className="section-title mb-3 primary-inherit" dangerouslySetInnerHTML={{__html: bannerData?.banner_title}}></h1>
              <p className="md:text-lg sm:text-base text-sm font-normal mb-5" dangerouslySetInnerHTML={{__html: bannerData?.banner_description}}></p>
              <div className="flex flex-wrap">
                <Link href="/" className="m-2 fill-btn md:w-auto text-center md:text-left md:justify-start justify-center">Registration</Link>
                <Link href={bannerData?.know_more_button_url || ''} className="m-2 outline-btn md:w-auto text-center md:text-left md:justify-start justify-center text-white border-white">{bannerData?.know_more_button_text}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-14 border-b border-solid border-[#E0E0E0]">
          <div className="container mx-auto">
            <div className="text-black text-center md:mb-14 mb-8 max-w-[910px] mx-auto">
              <h2 className="section-title" dangerouslySetInnerHTML={{__html: ourServicesData?.our_services_title}}></h2>
            </div>
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 md:gap-y-4 gap-y-6">
              
              {ourServicesData?.our_services_category .map((items, i) => {
                  return (
                    <div className="flex items-start" key={i}>
                      <span className="2xl:w-11 2xl:h-11 xl:w-8 xl:h-8 w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-3 bg-primary text-xl text-white font-semibold">{i+1}</span>
                      <p className="3xl:text-[24px] 2xl:text-[22px] text-xl leading-tight font-medium text-[#333333]">{items?.category_name}</p>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>

        <div className="lg:py-32 md:py-20 py-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
              <div>
                <div className="text-[#484848] md:text-left text-center">
                  <h2 className="section-title text-black mb-3">{seniorJourneyData?.senior_journey_title}</h2>
                  <h6 className="2xl:text-[28px] md:text-2xl text-lg 2xl:leading-10 md:leading-8 leading-6 font-normal text-black mb-4 primary-inherit" dangerouslySetInnerHTML={{__html: seniorJourneyData?.senior_journey_sub_title}}></h6>
                  <p className="md:text-lg sm:text-base text-sm font-normal mb-6 text-[#484848]" dangerouslySetInnerHTML={{__html: seniorJourneyData?.senior_journey_description}}></p>
                  <Link href={seniorJourneyData?.sj_more_explore_button_url || ''} className="fill-btn">{seniorJourneyData?.sj_more_explore_button_text}</Link>
                </div>
              </div>
              <div>
                <Journeyslider seniorJourneyData={seniorJourneyData}/>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#23425F] py-20">
          <div className="container mx-auto">
            <div className="text-white text-center mb-14">
              <h2 className="section-title mb-3">
                {seniorOfTheYearData?.senior_of_the_year_title}
              </h2>
              <p className="2xl:text-2xl text-xl font-normal primary-inherit" dangerouslySetInnerHTML={{__html: seniorOfTheYearData?.senior_of_the_year_description}}></p>
            </div>
              <Yearlyslider />
            <div className="text-center mt-14">
              <Link href={seniorOfTheYearData?.senior_of_the_year_button_url || ''} className="outline-btn text-white border-white items-center">{seniorOfTheYearData?.senior_of_the_year_button_text}
                <Image src={arrowWhiteEight} alt="verification" className="ml-2" priority/>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F5F7] lg:pt-20 pt-12 lg:pb-32 pb-20">
          <div className="container mx-auto xl:px-0 px-6">
            <div className="text-black text-center lg:mb-20 mb-12">
              <h2 className="section-title mb-3">
                {ourMissionData?.our_mission_title}
              </h2>
              <p className="2xl:text-2xl text-xl font-normal">{ourMissionData?.our_mission_description}</p>
            </div>
            <div className="flex flex-wrap justify-center md:space-y-0 space-y-4"> 
                {ourMissionData?.our_mission_content .map((items, i) => {
                    return (
                      <div key={i} className="md:scale-110 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-2/4 w-full max-w-96">
                        <div className="relative before:block before:w-full before:pt-[100%] rounded-full overflow-hidden border border-dashed border-[#A4A4A4] bg-white group hover:bg-primary hover:[box-shadow:0px_4px_33px_0px_rgba(0,_0,_0,_0.25)]">
                          <div className="h-full flex flex-col justify-center items-center text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-9 py-3">
                            <div className="w-full 2xl:max-w-16 max-w-10 mx-auto 2xl:mb-4 mb-3">
                              <Image src={items?.icon} alt="mission" className="mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert" width={64} height={64} priority/>
                            </div>
                            <h3 className="text-black font-semibold inter-font 2xl:text-2xl text-xl mb-2 group-hover:text-white">{items?.title}</h3>
                            <p className="text-[#484848] font-normal 2xl:text-sm md:text-xs text-lg group-hover:text-white">{items?.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                })}
            </div>
          </div>
        </div>

        <div className="lg:pt-40 md:pt-28 pt-14 lg:pb-32 md:pb-20 pb-9">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-16">
              <div>
                <div className="max-w-[626px] md:text-left text-center">
                  <h2 className="section-title text-black mb-3">
                    {expertData?.expert_title}
                  </h2>
                  <h4 className="text-[#646464] font-normal 2xl:text-3xl lg:text-2xl md:text-xl text-2xl mb-3">{expertData?.expert_sub_title}</h4>
                  <p className="text-lg font-normal mb-6">{expertData?.expert_description}...</p>
                  <div className="lg:space-x-4 space-y-4 md:space-x-0 space-x-4">
                    <Link href={expertData?.expert_click_here_button_url || ''} className="fill-btn">{expertData?.expert_click_here_button_text}</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="relative">
                    <div className="bg-[#FAFAFA] w-full -top-[50px] absolute left-1/2 -translate-x-1/2 before:block before:w-full before:pt-[100%] rounded-full overflow-hidden max-w-[600px]"></div>
                    <div className="relative z-10 before:block before:w-full before:pt-[100%] max-w-[460px] mx-auto">
                      <Image src={expertData?.expert_image} width="491" height="488" alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
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
                      <Image src={personalizedData?.personalized_image} width="491" height="488" alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                    </div>
                  </div>
                  <div className="2xl:w-[200px] w-[120px] absolute 3xl:left-[11px] 2xl:left-0 bottom-0 z-10">
                    <Image src={lineSpk} alt="mission" className="" priority/>
                    <p className="2xl:text-3xl xl:text-2xl text-xl text-black itim-font uppercase font-semibold">{personalizedData?.personalized_image_text} </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-[626px] md:text-left text-center">
                  <h2 className="section-title text-black mb-3">
                    {personalizedData?.personalized_title}
                  </h2>
                  <p className="text-lg font-normal mb-6">{personalizedData?.personalized_description}</p>
                  <div className="lg:space-x-4 space-y-4 md:space-x-0 space-x-4">
                    <Link href={personalizedData?.personalized_sign_up_button_url || ''} className="fill-btn">{personalizedData?.personalized_sign_up_button_text}</Link>
                    <Link href={personalizedData?.personalized_recommendations_button_url || ''} className="outline-btn text-black hover:text-white border-black">{personalizedData?.personalized_recommendations_button_text
                    }</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-32 pt-24 2xl:pb-28 pb-12 relative before:absolute before:w-[62vw] before:bg-[#F6F6F6] before:right-0 before:bottom-0 before:top-40 before:block">
          <div className="container mx-auto relative z-20">
            <div className="3xl:w-5/12 lg:w-[45%] 2xl:mb-14 lg:mb-4 mb-8 md:text-left text-center">
            <h2 className="section-title text-black mb-3">{testimonialsData?.testimonials_sub_title}</h2>
              <h5 className="text-primary 2xl:text-3xl lg:text-xl md:text-2xl text-xl font-bold">{testimonialsData?.testimonials_title}</h5>
              
            </div>
            <Testimonialsslider testimonials_sec={testimonialsData}/>
          </div>
        </div>

        <div className="2xl:pt-24 overflow-hidden relative z-20 after:w-screen after:bg-secondary after:absolute after:left-0 after:bottom-0 after:h-28">
          <div className="container mx-auto relative z-10">
            <Homecontact contactUsData={contactUsData} />
          </div>
        </div>

        <Freetrialmodal/>

      </div>
       {/* ):( !ishomeLoader ? (
        <div className="container">
            <div className="w-full text-center mt-[20px]">
              <p className="text-[15px] font-medium text-black">Home data not found!</p>
            </div>
        </div>
        ):(
          <div>
              <Loader/>
          </div>
        )     
      )}  */}
    </Layouts>
  );
}
