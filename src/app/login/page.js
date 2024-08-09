"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { eyeSlash, eyeOpen } from '../assets/index';
import { Layouts } from "../Component";
import Registrationleftside from "../Component/Widgets/Registrationpanel/registrationleftside";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layouts>
      <div className="xl:mt-[102px] lg:mt-[84px] mt-[72px] md:py-7 py-4">
        <div className="container mx-auto">
          <div className="bg-secondary overflow-hidden shadow-2xl rounded-2xl">
            <div className="frm-bg-radial xl:min-h-[758px] min-h-[648px] flex">
              <div className="grid md:grid-cols-2 grid-cols-1 w-full">
                <div>
                  <Registrationleftside />
                </div>
                <div>
                  <div className="bg-white xl:p-20 lg:p-14 md:p-10 p-8 w-full h-full flex flex-col justify-center">
                    <div className="mb-5">
                      <h3 className="lg:text-3xl sm:text-2xl text-xl font-bold text-black">Login to your account</h3>
                    </div>
                    <form className="grid grid-cols-1 gap-y-5 ukp-inplb">
                      <div className="relative">
                        <input type="email" className="inputfild-style" placeholder=" " />
                        <label className="text-sm text-[#727272] font-normal">Email Address<span className="text-[#F06B30]">*</span></label>
                      </div>
                      <div className="relative">
                        <button type="button" onClick={togglePasswordVisibility} className="absolute top-1/2 right-3 -translate-y-1/2 border-none bg-transparent">
                          <Image src={showPassword ? eyeOpen : eyeSlash} alt="Toggle password visibility" priority />
                        </button>
                        <input type={showPassword ? "text" : "password"} className="inputfild-style" placeholder=" " />
                        <label className="text-sm text-[#727272] font-normal">Password<span className="text-[#F06B30]">*</span></label>
                      </div>
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" className="w-6 h-6 border border-solid border-[#CFD0D1] rounded-md" />
                          <p className="text-[#727272] font-normal text-sm pl-2">Remember me</p>
                        </div>
                        <Link href="/forgotpassword" className="text-[#0B488E] no-underline text-base font-semibold hover:underline">Forgot your Password?</Link>
                      </div>
                      <div className="lg:my-6 my-4">
                        <input type="submit" className="frm-submit" value="Sign In" />
                      </div>
                      <div>
                        <p className="text-[#727272] font-normal text-sm">Don’t have an account? <Link href="/registration" className="text-primary no-underline text-base font-semibold hover:underline">Sign Up</Link></p>
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
