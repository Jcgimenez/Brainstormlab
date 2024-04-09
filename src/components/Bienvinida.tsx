import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Bienvenida() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center mt-5 gap-5">
                <h1 className="text-4xl md:text-6xl font-bold text-white">¡Bienvenido a Brainstorm Lab!</h1>
                <img
                    src="https://img.icons8.com/?size=100&amp;id=2885&amp;format=png&amp;color=ffffff"
                    alt="Microscope"
                    loading="lazy"
                    className="w-12 h-12 md:w-20 md:h-20 text-white"
                />
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-20">
                <h2 className="text-lg md:text-2xl font-bold text-white italic text-center">¿Tienes una idea brillante? ¡Compártela con nosotros y hagámosla realidad juntos!</h2>
            </div>
        </div >
    );
};
