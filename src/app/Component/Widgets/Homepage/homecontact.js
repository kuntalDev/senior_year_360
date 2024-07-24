import Image from "next/image";
import {contactThumbnail} from '../../../assets/index';

export default function Homecontact() {
  return (
    <div className="bg-[#0085FF] rounded-2xl overflow-hidden">
      <div className="flex flex-wrap">
        <div className="xl:w-7/12 md:w-6/12 w-full">
          <div className="relative z-10 h-full before:block before:w-full before:pt-[73%] mx-auto bg-primary">
            <Image src={contactThumbnail} alt="mission" className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" priority/>
          </div>
        </div>
        <div className="xl:w-5/12 md:w-6/12 w-full">
          <div className="text-white lg:p-8 md:p-5 p-3">
            <h3 className="3xl:text-5xl 2xl:text-4xl text-3xl font-bold py-3 px-4 2xl:mb-5 lg:mb-4 mb-3">Contact Us</h3>
            <form action="#">
              <div className="flex flex-wrap">
                <div className="w-6/12 px-2.5 pb-4">
                  <input type="text" name="" id="" placeholder="First Name" className="bg-[#ffffff33] rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none"/>
                </div>
                <div className="w-6/12 px-2.5 pb-4">
                  <input type="text" name="" id="" placeholder="Last Name" className="bg-[#ffffff33] rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none"/>
                </div>
                <div className="w-full px-2.5 pb-4">
                  <input type="email" name="" id="" placeholder="Email Address" className="bg-[#ffffff33] rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none"/>
                </div>
                <div className="w-full px-2.5 pb-4">
                  <input type="text" name="" id="" placeholder="Phone No" className="bg-[#ffffff33] rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none"/>
                </div>
                <div className="w-full px-2.5 pb-4">
                  <textarea name="" id="" placeholder="Message" className="bg-[#ffffff33] 2xl:h-36 h-28 rounded border-solid border border-[#ffffff47] w-full text-base font-normal text-white py-3 px-4 placeholder:text-white focus:outline-none resize-none"></textarea>
                </div>
                <div className="w-full px-2.5 pb-4">
                  <input type="submit" value="Submit" className="text-lg font-semibold text-black bg-white rounded py-2 px-10 cursor-pointer hover:bg-white  hover:bg-opacity-90"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
