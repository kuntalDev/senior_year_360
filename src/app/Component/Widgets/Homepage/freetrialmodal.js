"use client";
"use client";
import Image from "next/image";
import { useState } from "react";
import { freeTrailtBg, iconX } from '../../../assets/index';
import Link from "next/link";

export default function SearchPopup() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleTogglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <button
        className="fixed -rotate-90 -right-[78px] sticky-aside-ard bg-[#FFE500] rounded-t-lg py-2 px-2 text-black uppercase text-[14px] font-semibold"
        onClick={handleTogglePopup} style={{ letterSpacing: `0` }}
      >
        Start Your Free Trial
      </button>
      <div className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 overflow-auto z-[9999] ${isPopupVisible ? '' : 'hidden'}`}>
        <div className="modal-centered flex items-center">
          <div className="container mx-auto relative xl:max-w-[1000px]">
            <button
              className="z-10 lg:w-8 lg:h-8 w-6 h-6 p-1 lg:border-4 border-2 border-solid border-black rounded-[50px] flex items-center justify-center bg-white absolute lg:-top-4 -top-2 lg:right-0 right-1"
              onClick={handleTogglePopup}
            >
              <Image src={iconX} alt="close" className="" priority />
            </button>
            <div style={{ backgroundImage: `linear-gradient(90deg, #0079FF -0.72%, #13D9F3 50%)` }} className="rounded-md relative overflow-hidden">
              <div style={{ backgroundImage: `url(${freeTrailtBg.src})` }} className="orbit-bgImg bg-no-repeat bg-contain bg-[center_right]">
                <div className="md:px-16 sm:px-10 px-6 2xl:py-14 lmd:py-10 py-10">
                  <div className="absolute -rotate-45 lg:top-5 md:top-4 sm:top-[12px] top-[8px] md:-left-[58px] sm:-left-[51px] -left-[36px] anton-font shadow-lg lg:text-sm md:text-[11px] text-[8px] uppercase font-black bg-[#FFE500] text-center w-fit sm:px-12 px-8 lmd:py-2.5 sm:py-2 py-1.5" style={{ letterSpacing: `0px` }}>
                    Free Trial 
                  </div>
                  <div className="3xl:max-w-[638px] 2xl:max-w-[660px] max-w-[700px]">
                    <div className="text-white mb-8">
                      <h3 className="md:text-base sm:text-xs text-[10px] font-black uppercase mb-1">Unlock Your Senior Year Experience!</h3>
                      <h1 className="2xl:text-4xl md:text-3xl text-xl font-bold tracking-normal [text-shadow:0px_1px_2px_rgb(30_29_39_/_19%),_1px_2px_4px_rgb(0_0_0_/_20%)] mb-2">Get Started with a <span className="text-black">3-Month Free Trial</span></h1>
                      <p className="3xl:text-lg md:text-sm text-xs font-thin md:leading-snug leading-[1.7]">Create and personalize your senior year page with no commitment for the <span className="py-1 px-2 rounded-sm bg-[#FFE500] font-semibold text-black">first 3 months.</span> Enjoy exclusive features and connect with your peers effortlessly!</p>
                    </div>
                    <div className="bg-black w-fit rounded px-4 py-1 relative after:absolute md:after:-bottom-2 after:-bottom-1.5 after:left-5 md:after:w-4 md:after:h-4 after:w-3 after:h-3 after:rotate-45 after:bg-black mb-7">
                      <h3 className="xl:text-xl lg:text-lg md:text-base text-xs text-white font-bold">After Your Free Trial: <span className="text-[#FFE500]">$69.99/year</span></h3>
                    </div>
                    <div className="mb-5">
                      <ul className="grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
                        <li className="text-white">
                          <h4 className="font-bold  md:text-lg text-base leading-tight mb-1 [text-shadow:0px_1px_2px_rgb(30_29_39_/_19%),_1px_2px_2px_rgb(0_0_0_/_15%)]">Personalized Senior Pages</h4>
                          <p className="3xl:text-lg md:text-sm text-xs font-thin">Showcase your achievements, memories, and future plans.</p>
                        </li>
                        <li className="text-white">
                          <h4 className="font-bold  md:text-lg text-base leading-tight mb-1 [text-shadow:0px_1px_2px_rgb(30_29_39_/_19%),_1px_2px_2px_rgb(0_0_0_/_15%)]">Exclusive Content</h4>
                          <p className="3xl:text-lg md:text-sm text-xs font-thin">Access resources, tips, and advice tailored for seniors.</p>
                        </li>
                        <li className="text-white">
                          <h4 className="font-bold  md:text-lg text-base leading-tight mb-1 [text-shadow:0px_1px_2px_rgb(30_29_39_/_19%),_1px_2px_2px_rgb(0_0_0_/_15%)]">Community Engagement</h4>
                          <p className="3xl:text-lg md:text-sm text-xs font-thin">Interact with other seniors and build lifelong connections.</p>
                        </li>
                        <li className="text-white">
                          <h4 className="font-bold  md:text-lg text-base leading-tight mb-1 [text-shadow:0px_1px_2px_rgb(30_29_39_/_19%),_1px_2px_2px_rgb(0_0_0_/_15%)]">Countdown to Graduation:</h4>
                          <p className="3xl:text-lg md:text-sm text-xs font-thin">Stay motivated with our customizable countdown clock.</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="3xl:text-2xl lg:text-lg md:text-base text-xs font-bold text-white [text-shadow:0px_1px_2px_rgb(30_29_39_/_19%),_1px_2px_2px_rgb(0_0_0_/_15%)] mb-4"><span className="text-[#FFE500]">Sign Up Now</span> and Make the Most of Your Senior Year!</p>
                      <Link href="/" className="fill-yellow-btn text-center uppercase">Start Your Free Trial</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

