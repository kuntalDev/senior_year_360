import React from 'react';
import Image from "next/image";
import {footeLogo,SocialFBWhite,SocialIGWhite,SocialLIWhite,SocialYTWhite} from '../../assets/index';
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 grid-cols-1 md:py-16 py-10 gap-y-7">
            <div>
                <div>
                  <div className="xl:max-w-60 max-w-52 md:m-0 mx-auto">
                    <Image src={footeLogo} alt="mission" className="" priority/>
                  </div>
                  <div className="mt-7">
                    <ul className="flex space-x-3 md:justify-start justify-center items-center">
                      <li>
                        <Link href="https://www.facebook.com/" className="block no-underline group">
                          <Image src={SocialFBWhite} alt="mission" className="group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/" className="block no-underline group">
                          <Image src={SocialIGWhite} alt="mission" className="group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://in.linkedin.com/" className="block no-underline group">
                          <Image src={SocialLIWhite} alt="mission" className="group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.youtube.com/" className="block no-underline group">
                          <Image src={SocialYTWhite} alt="mission" className="group-hover:filter group-hover:brightness-0 group-hover:invert" priority/>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <div>
              <div className="w-fit mx-auto">
                <ul className="flex flex-col space-y-3 md:text-left text-center">
                  <li>
                    <Link href="/" className="text-lg font-normal text-white hover:text-primary block no-underline hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-lg font-normal text-white hover:text-primary block no-underline hover:underline">
                      Seniors
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-lg font-normal text-white hover:text-primary block no-underline hover:underline">
                      Member 
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-lg font-normal text-white hover:text-primary block no-underline hover:underline">
                      Dedicated Poll
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="w-fit xl:mx-auto md:m-0 mx-auto">
                <ul className="flex flex-col space-y-3">
                  <li>
                    <Link href="/" className="text-lg font-normal text-white hover:text-primary block no-underline hover:underline">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-lg font-normal text-white hover:text-primary block no-underline hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="w-fit md:ml-auto mx-auto md:text-left text-center">
                <h5 className="text-2xl font-semibold text-white">Lets Connect</h5>
                <div className="mt-5">
                  <h6 className="text-lg font-medium text-white mb-3">Virginia Beach Office</h6>
                  <p className="text-base font-normal text-[#B2B6BE]">3330 Pacific Ave. Suite 204 Virginia <br /> Beach, VA 23451</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-[#24394C] border-opacity-90 py-5 text-center">
          <p className="sm:text-base text-xs text-white font-normal">Copyright 2024 Associate Roofing. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
}
