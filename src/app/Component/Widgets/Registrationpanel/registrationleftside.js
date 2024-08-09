"use client";
import Image from "next/image";
import {whiteLogoXl} from '../../../assets/index';

export default function Registrationleftside() {

  return (
    <div className="h-full flex flex-col justify-center items-center md:py-20 py-10 px-2 regis-leftside relative">
      <div className="lg:w-72 md:w-56 w-48 mx-auto relative z-10 md:mb-0 mb-10">
        <Image src={whiteLogoXl} alt="mission" className="" priority/>
      </div>
      <div className="text-center my-auto relative z-10">
        <p className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-light text-white uppercase lg:mb-5 md:mb-3 mb-2 [text-shadow:box-shadow:_0px_4px_4px_0px_#00000040]">Welcome to </p>
        <h2 className="2xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-primary uppercase leading-tight [text-shadow:box-shadow:_0px_4px_4px_0px_#00000040]">Senior Year 360 <br/> <span className="text-white">Family</span> </h2>
      </div>
    </div>
  );
}