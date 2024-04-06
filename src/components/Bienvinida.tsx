import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Bienvenida() {
    return (
        <div className="container mx-auto flex flex-col">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold text-white mt-5">¡Bienvenido a Ideas Millonarias!</h1>
            </div>
            <div className="flex justify-center items-center mt-20">
                <h2 className="text-2xl font-bold text-white italic">¿Tienes una idea brillante? ¡Compártela con nosotros y hagámosla realidad juntos!</h2>
            </div>
        </div >
    );
};
