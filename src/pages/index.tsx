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

export default function Home() {
  const [isWebOn, setisWebOn] = useState(false);
  const [isPhoneOn, setisPhoneOn] = useState(false);
  const [isSoftwareOn, setisSoftwareOn] = useState(false);

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
    <div className="flex flex-col">
      <div className="">
        <Bienvenida />
      </div>
      <div className="flex justify-center gap-52 mt-36">
        <div
          className="flex flex-col justify-center items-center"
          onMouseEnter={handleWebMouseEnter}
          onMouseLeave={handleWebMouseLeave}
        >
          <div className="mb-6">
            <Light className={isWebOn ? 'visible' : 'invisible'} />
          </div>
          <div className='border-2 border-white rounded-lg p-10 flex flex-col justify-center items-center'>
            <p className="text-white font-semibold my-2">Crear una pagina web</p>
            <WebButton />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-not-allowed"
          onMouseEnter={handlePhoneMouseEnter}
          onMouseLeave={handlePhoneMouseLeave}
        >
          <div className="mb-6">
            <Cross className={isPhoneOn ? 'visible' : 'invisible'} />
          </div>
          <div className='border-2 border-white rounded-lg p-10 flex flex-col justify-center items-center'>
            <p className="text-white font-semibold my-2">Crear una aplicacion de celular</p>
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
          <div className='border-2 border-white rounded-lg p-10 flex flex-col justify-center items-center'>
            <p className="text-white font-semibold my-2">Crear un software</p>
            <SoftwareButton />
          </div>
        </div>
      </div>
    </div>
  );
};
