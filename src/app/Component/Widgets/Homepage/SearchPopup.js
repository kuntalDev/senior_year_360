"use client"
import Image from "next/image";
import { useState } from 'react';
import {graySearch,blackCrossIcon} from '../../../assets/index';

export default function SearchPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center  bg-gray-100">

      <button onClick={() => setIsOpen(true)} className='border border-solid border-[#C5C5C5] inline-flex items-center justify-center lg:w-11 lg:h-11 w-8 h-8 rounded-md p-2'>
          <Image src={graySearch} alt="Search Icon" priority/>
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 p-3 z-[9999] flex items-center justify-center">
          <div className="bg-white md:p-8 p-5 border border-solid border-[#C5C5C5] rounded-md fade-in relative w-[90vw] max-w-2xl">
            <button onClick={() => setIsOpen(false)} className="w-7 h-7 p-1.5 rounded-full flex items-center justify-center shrink-0 bg-primary text-xl text-white font-normal absolute -top-[9px] -right-[16px]">
                <Image src={blackCrossIcon} alt="Close Icon" priority/>
            </button>
            <div className="relative">
              <input type="text" className="border border-solid border-primary py-3 pl-4 pr-[62px] w-full rounded-full focus:outline-none" placeholder="Quick search..."/>
              <button type="submit" className="absolute bg-[#f5f5f5] z-10 w-[48px] h-[48px] flex items-center justify-center right-[2px] p-2 top-2/4 rounded-full -translate-y-1/2">
                <Image src={graySearch} alt="Search Icon" priority/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}