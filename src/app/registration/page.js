
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
                      <h3 className="lg:text-3xl sm:text-2xl text-xl font-bold text-black">Register to your account </h3>
                    </div>
                    <form className="grid grid-cols-1 gap-y-5 ukp-inplb">
                      <div className="relative">
                        <input type="text" className="inputfild-style" placeholder=" "/>
                        <label className="text-sm text-[#727272] font-normal">First Name<span className="text-[#F06B30]">*</span> </label>
                      </div>
                      <div className="relative">
                        <input type="text" className="inputfild-style" placeholder=" "/>
                        <label className="text-sm text-[#727272] font-normal">Last Name<span className="text-[#F06B30]">*</span> </label>
                      </div>
                      <div className="relative">
                        <input type="email" className="inputfild-style" placeholder=" "/>
                        <label className="text-sm text-[#727272] font-normal">Email Address<span className="text-[#F06B30]">*</span> </label>
                      </div>
                      <div className="relative">
                        <input type="password" className="inputfild-style" placeholder=" "/>
                        <label className="text-sm text-[#727272] font-normal">Password<span className="text-[#F06B30]">*</span> </label>
                      </div>
                      <div className="relative">
                        <input type="password" className="inputfild-style" placeholder=" "/>
                        <label className="text-sm text-[#727272] font-normal">Confirm Password<span className="text-[#F06B30]">*</span> </label>
                      </div>
                     
                      <div className="relative">
                        <input type="date" className="inputfild-style" placeholder=" "/>
                        <label className="text-sm text-[#727272] font-normal">Graduation End Date<span className="text-[#F06B30]">*</span> </label>
                      </div>
                      <div className="relative">
                        <input type="number" className="inputfild-style" placeholder=" "/>
                        <label className="text-sm text-[#727272] font-normal">Contact no<span className="text-[#F06B30]">*</span> </label>
                      </div>
                      <div className="lg:my-6 my-4">
                        <input type="submit" className="frm-submit" value="Submit Now"/>
                      </div>
                      <div>
                        <p className="text-[#727272] font-normal text-sm">Already have an account? <Link href="/login" className="text-primary no-underline text-base font-semibold hover:underline">Sign in</Link> </p>
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