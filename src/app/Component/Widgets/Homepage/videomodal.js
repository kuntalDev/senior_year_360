import Image from "next/image";
import { blackCrossIcon, userOne } from '../../../assets/index';

export default function Videomodal({ HandelCloseClick, type, path }) {
  // console.log(path);
  const HandelClose = () => {
    HandelCloseClick();
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 overflow-auto z-[9999]">
      <div className="modal-centered max-w-lg w-full flex items-center">
        <div className="bg-white md:p-3 p-1.5 relative w-full">
          {type === 'video' ? (
            <video width="100%" controls>
              <source src={`${path}`} type="video/mp4" />
            </video>
          ) : (
            <div className="relative before:block before:w-full before:pt-[132%]">
              
              {path ? (
                <Image className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" src={`${path}`} width={100} height={100} alt="Gradient-Tick" priority/>
              ) : (
                <Image className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover" src={userOne} width={100} height={100} alt="Gradient-Tick" priority/>
              )}
            </div>
          )}
          <button onClick={() => HandelClose()} className="w-6 h-6 p-1.5 rounded-full flex items-center justify-center shrink-0 bg-primary text-xl text-white font-normal absolute -top-[10px] -right-[10px]">
            <Image src={blackCrossIcon} alt="Gradient-Tick" priority />
          </button>
        </div>
      </div>
    </div>
  );
}
