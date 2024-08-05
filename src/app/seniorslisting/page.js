"use client";
import React, { useState } from "react";
import { Layouts } from "../Component";
import Image from "next/image";
import Select from "react-select";
import Link from "next/link";
import { seniorsOne, seniorsTwo, seniorsThree, seniorsFour, seniorsFive, seniorsSix, seniorsSeven, seniorsEight, seniorsNine, seniorsTen, seniorsEleven, seniorsTwelve } from '../assets/index';

export default function Personal() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const options = [
    { value: 'Soccer', label: 'Soccer' },
    { value: 'Music', label: 'Music' },
    { value: 'Light', label: 'Light' },
    { value: 'School', label: 'School' },
    // Add more options as needed
  ];

  return (
    <Layouts>
      <div className="bg-[#F6F6F6]">

        <div className="xl:mt-[102px] lg:mt-[84px] mt-[72px] md:py-7 py-4">
          <div className="container mx-auto">
            <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-[25px] font-bold 2xl:leading-[70px] lg:leading-[55px] md:leading-none leading-[32px] text-black">
              Senior Profiles
            </h2>
          </div>
        </div>

        <div>
          <div className="container mx-auto">

            <div className="custisMulti bg-white shadow-sm border border-solid border-[#E9E9E9] rounded-lg p-5 mb-8">
              <h4 className="lg:text-xl text-lg font-semibold text-black mb-3">Filters for Sorting</h4>
              <from>
                <div className="flex items-end lg:flex-nowrap flex-wrap">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 grow pr-3 lg:w-auto w-full">
                    <div>
                      <label className="text-base block font-semibold text-[#252525] mb-2 capitalize">Student Name</label>
                      <input type="text" className="border border-solid border-[#1C1C1C] rounded-md w-full border-opacity-35 px-4 h-10 text-[#737373] text-base font-normal focus:outline-none"/>
                    </div>
                    <div>
                      <label className="text-base block font-semibold text-[#252525] mb-2 capitalize">School Name</label>
                      <input type="text" className="border border-solid border-[#1C1C1C] rounded-md w-full border-opacity-35 px-4 h-10 text-[#737373] text-base font-normal focus:outline-none"/>
                    </div>
                    <div>
                      <label className="text-base block font-semibold text-[#252525] mb-2 capitalize">Interests</label>
                      <Select isMulti options={options} value={selectedOptions} onChange={handleSelectChange} className="focus:outline-none" placeholder="Select"/>
                    </div>
                    <div>
                      <label className="text-base block font-semibold text-[#252525] mb-2 capitalize">Achievements</label>
                      <select name="" id="" className="border border-solid border-[#1C1C1C] rounded-md w-full border-opacity-35 px-4 h-10 text-[#737373] text-base font-normal focus:outline-none">
                        <option value="Select1">Select </option>
                        <option value="Select2">Select2 </option>
                        <option value="Select3">Select3 </option>
                        <option value="Select4">Select4 </option>
                      </select>
                    </div>
                  </div>
                  <div className="w-fit lg:mt-0 mt-4 mx-auto">
                    <input type="submit" value="Search" className="bg-primary hover:bg-opacity-70 2xl:text-lg text-base tracking-wider inline-flex border border-solid border-primary text-white font-medium no-underline rounded-md px-6 py-1.5 transition-all"/>
                  </div>
                </div>
              </from>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 pb-10">

              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsOne} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Richard Freeman</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Aqninas Academy of Pittsburgh</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Boxing and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">CCRT Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsTwo} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Meryl Blanchett</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">The Jihn Cooper School</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Music and Sports</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Commonwealth Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsThree} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Harrison Jackman</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">High School Student</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Baseball, Boxing, Music and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Gates Cambridge Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsFour} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Robert Spacey</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Archmere Academy</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Baseball, Boxing and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Onsi Sawiris Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsFive} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Heath Reeves</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Oak Grove School</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Baseball, Boxing, Music and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Onsi Sawiris Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsSix} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Annette Thompson</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Oxford Academy</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Boxing and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Ais Technolabs Scholarships</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsSeven} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Meryl Streep</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Southern Prepara Academy</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Boxing and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Cornell University financial aid</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsEight} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Tom Jackson</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Abingto Friends School</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Baseball, Boxing and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">ACI Foundation Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsNine} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Cate Bullock</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Academy at the Lakes</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Baseball, Boxing, Music and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Gates Cambridge Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsTen} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Leonardo Smith</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Aqninas Academy of Pittsburgh</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Baseball, Boxing, Music and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Aqninas Academy of Pittsburgh</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsEleven} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Marlon Mirren</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Academy Og Holy Angels</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Boxing and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">ACI Foundation Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl h-full overflow-hidden border border-solid border-[#E9E9E9]">
                  <div className="relative before:block before:w-full before:pt-[80%] bg-primary">
                    <Image src={seniorsTwelve} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
                  </div>
                  <div className="md:space-y-4 space-y-3 md:px-8 px-6 md:py-5 py-3">
                    <h3 className="md:text-2xl text-xl font-medium text-black">Robert Cruise</h3>
                    <ul>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Oxford Academy</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Baseball, Boxing and Soccer</li>
                      <li className="md:text-lg sm:text-base text-sm font-normal text-[#585858] border-t border-solid border-[#EDEDED] py-2">Commonwealth Scholarship</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-5 w-fit gap-3 ml-auto py-8">
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-primary rounded-md border border-solid border-primary text-lg text-white font-bold">
                1
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid border-[#B0B0B0] text-lg text-black font-bold">
                2
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid border-[#B0B0B0] text-lg text-black font-bold">
                3
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid border-[#B0B0B0] text-lg text-black font-bold">
                4
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid border-[#B0B0B0] text-lg text-black font-bold">
                &#8594;
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Layouts>
  );
}