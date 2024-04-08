import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Bienvenida() {
    return (
        <div className="container mx-auto flex flex-col relative">
            <div className="flex justify-center items-center mt-5 gap-5">
                <h1 className="text-4xl font-bold text-white">¡Bienvenido a Brainstorm Lab!</h1>
                <img
                    src="https://img.icons8.com/?size=100&amp;id=2885&amp;format=png&amp;color=ffffff"
                    alt="Microscope"
                    loading="lazy"
                    className="w-12 h-12 text-white"
                />
            </div>
            <div className="flex justify-center items-center mt-20">
                <h2 className="text-2xl font-bold text-white italic">¿Tienes una idea brillante? ¡Compártela con nosotros y hagámosla realidad juntos!</h2>
            </div>
        </div >
    );
};
