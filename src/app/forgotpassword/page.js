
import {} from '../assets/index';
import Link from "next/link";
import { Layouts } from "../Component";
import Registrationleftside from "../Component/Widgets/Registrationpanel/registrationleftside"
export default function Registration() {
 
  return (
    <Layouts>
      <div className="xl:mt-[102px] lg:mt-[84px] mt-[72px] md:py-7 py-4">
        <div className="container mx-auto">
          <div className="bg-secondary overflow-hidden shadow-2xl rounded-2xl">
            <div className=" frm-bg-radial xl:min-h-[758px] min-h-[648px] flex">
              <div className="grid md:grid-cols-2 grid-cols-1 w-full">
                <div>
                  <Registrationleftside/>
                </div>
                <div>
                  <div className="bg-white xl:p-20 lg:p-14 md:p-10 p-8 w-full h-full flex flex-col justify-center">
                    <div className="mb-5">
                      <h3 className="lg:text-3xl sm:text-2xl text-xl font-bold text-black mb-1">Forgot your Password</h3>
                      <p className="text-[#727272] font-normal text-sm">Enter your email and we’ll send you a link to reset your password </p>
                    </div>
                    <form className="grid grid-cols-1 gap-y-5 ukp-inplb">
                      
                      <div className="relative">
                        <input type="email" className="inputfild-style" placeholder=" "/>
                        <label className="text-sm text-[#727272] font-normal">Email Address<span className="text-[#F06B30]">*</span> </label>
                      </div>
                      
                      <div className="lg:my-6 my-4">
                        <input type="submit" className="frm-submit" value="Submit Here"/>
                      </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}