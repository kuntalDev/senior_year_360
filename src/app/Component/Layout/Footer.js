import React from 'react';
import Image from "next/image";
import { footeLogo, SocialFBWhite, SocialIGWhite, SocialLIWhite, SocialYTWhite } from '../../assets/index';
import Link from "next/link";

export default function Footer({ menuTemeSettingData }) {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <div className="bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 grid-cols-1 md:py-16 py-10 gap-y-7">
            <div>
              <div>
                <div className="xl:max-w-60 max-w-52 md:m-0 mx-auto">
                  
                  {menuTemeSettingData?.footer_logo && (
                  <Link href="/">
                    <Image src={menuTemeSettingData?.footer_logo} width={236} height={37} alt="mission" className="" priority />
                  </Link>
                  )}
                </div>
                <div className="mt-7">
                  <ul className="flex space-x-3 md:justify-start justify-center items-center">
                    {menuTemeSettingData?.social_media?.map((items, i) => {
                      return (
                        <li key={i}>
                          <Link href={items?.link || ''} target="_blank" className="block no-underline group">
                            <Image src={items.icon} width={23} height={23} alt="mission" className="group-hover:filter group-hover:brightness-0 group-hover:invert" priority />
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="w-fit mx-auto">
                <ul className="flex flex-wrap md:space-y-3 justify-center md:justify-start md:flex-col md:text-left text-center">
                  {menuTemeSettingData?.footermenu1_data?.map((items, i) => {
                    return (
                      <li key={i}>
                        <Link href={items?.url || ''} className="md:p-0 p-2 text-lg font-normal text-white hover:text-primary block no-underline hover:underline">
                          {items.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="w-fit xl:mx-auto md:m-0 mx-auto">
                <ul className="flex flex-wrap md:space-y-3 justify-center md:justify-start md:flex-col md:text-left text-center">
                {menuTemeSettingData?.footermenu2_data?.map((items, i) => {
                    return (
                      <li key={i}>
                        <Link href={items?.url || ''} className="md:p-0 p-2 text-lg font-normal text-white hover:text-primary block no-underline hover:underline">
                          {items.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="w-fit md:ml-auto mx-auto md:text-left text-center">
                <h5 className="text-2xl font-semibold text-white">{menuTemeSettingData?.lets_connect_title}</h5>
                <div className="mt-5">
                  <h6 className="text-lg font-medium text-white mb-3">{menuTemeSettingData?.company_address_1}</h6>
                  <p className="text-base font-normal text-[#B2B6BE]" dangerouslySetInnerHTML={{__html: menuTemeSettingData?.company_address_2}}></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-[#24394C] border-opacity-90 py-5 text-center">
          <p className="sm:text-base text-xs text-white font-normal">Copyright {year} {menuTemeSettingData?.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
