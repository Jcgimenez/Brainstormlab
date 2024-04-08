import { useState } from 'react';
import Image from "next/image";
import Bienvenida from "@/components/Bienvinida";
import AnimatedHome from "@/components/AnimatedHome";
import PhoneButton from "@/components/PhoneButton";
import DelButton from "@/components/DelButton";
import WebButton from "@/components/WebButton";
import SoftwareButton from "@/components/SoftwareButton";
import Light from '@/components/Light';
import Cross from '@/components/Cross';
import CreaTuIdea from '@/components/CreaTuIdea';

export default function Home() {
  const [isWebOn, setisWebOn] = useState(false);
  const [isPhoneOn, setisPhoneOn] = useState(false);
  const [isSoftwareOn, setisSoftwareOn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const handleWebMouseEnter = () => {
    setisWebOn(true);
  };

  const handleWebMouseLeave = () => {
    setisWebOn(false);
  };

  const handlePhoneMouseEnter = () => {
    setisPhoneOn(true);
  };

  const handlePhoneMouseLeave = () => {
    setisPhoneOn(false);
  };

  const handleSoftwareMouseEnter = () => {
    setisSoftwareOn(true);
  };

  const handleSoftwareMouseLeave = () => {
    setisSoftwareOn(false);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
          <div className="absolute w-12 h-12 bg-blue-300 rounded-full opacity-50 animate-bubble top-[5%] left-1/4"></div>
          <div className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-bubble top-[84%] left-1/2"></div>
          <div className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-bubble top-[39%] left-[95%]"></div>
          <div className="absolute w-16 h-16 bg-blue-300 rounded-full opacity-50 animate-bubble top-[54%] left-3/4"></div>
          <div className="absolute w-12 h-12 bg-blue-300 rounded-full opacity-50 animate-bubble top-[95%] left-1/4"></div>
          <div className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-bubble top-[15%] left-3/4"></div>
          <div className="absolute w-16 h-16 bg-blue-300 rounded-full opacity-50 animate-bubble top-[50%] left-[45%]"></div>
          <div className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-bubble top-[45%] left-[12%]"></div>
          <div className="absolute w-16 h-16 bg-blue-300 rounded-full opacity-50 animate-bubble top-[15%] left-2/4"></div>
          <div className="absolute w-12 h-12 bg-blue-300 rounded-full opacity-50 animate-bubble top-[86%] left-[84%]"></div>
        </div>
        <div className="">
          <Bienvenida />
        </div>
        <div className="flex justify-center gap-52 mt-32">
          <div
            className="flex flex-col justify-center items-center"
            onMouseEnter={handleWebMouseEnter}
            onMouseLeave={handleWebMouseLeave}
          >
            <div className="mb-6">
              <Light className={isWebOn ? 'visible' : 'invisible'} />
            </div>
            <div className='border-2 border-white rounded-lg px-10 pb-5 pt-3 flex flex-col justify-center items-center'>
              <p className="text-white font-semibold my-2">Crear una pagina web</p>
              <WebButton onClick={openPopup} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center cursor-not-allowed"
            onMouseEnter={handlePhoneMouseEnter}
            onMouseLeave={handlePhoneMouseLeave}
          >
            <div className="mb-6">
              <Cross className={isPhoneOn ? 'visible' : 'invisible'} />
            </div>
            <div className='border-2 border-white rounded-lg px-10 pb-5 pt-3 flex flex-col justify-center items-center'>
              <p className="text-white font-semibold my-2">Crear una aplicacion</p>
              <PhoneButton />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center cursor-not-allowed"
            onMouseEnter={handleSoftwareMouseEnter}
            onMouseLeave={handleSoftwareMouseLeave}
          >
            <div className="mb-6">
              <Cross className={isSoftwareOn ? 'visible' : 'invisible'} />
            </div>
            <div className='border-2 border-white rounded-lg px-10 pb-5 pt-3 flex flex-col justify-center items-center'>
              <p className="text-white font-semibold my-2">Crear un software</p>
              <SoftwareButton />
            </div>
          </div>
        </div>
        {isPopupOpen && <CreaTuIdea onClose={closePopup} />}
      </div>
    </div>
  );
};
