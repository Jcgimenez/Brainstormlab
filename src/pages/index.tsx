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
    <div className='min-h-screen dark:bg-gray-900 flex flex-col'>
      <div className="flex-grow">
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
      </div>
      <div className='top-0'>
        <Bienvenida />
      </div>
      <div className="flex-grow flex justify-center items-center mb-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 md:gap-52 mt-32">
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
      <div className="bg-black flex justify-between p-4 md:p-0 min-h-28">
        <div className="text-white ml-5 mt-2">
          <p className="italic">
            © 2023 Brainstorm Lab. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex text-white mr-5 mt-2 space-x-6">
          <a href="https://github.com/Jcgimenez" className="flex gap-2 italic underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mt-1" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/juancruzgimenez/" className="flex gap-2 italic underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin mt-1" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
