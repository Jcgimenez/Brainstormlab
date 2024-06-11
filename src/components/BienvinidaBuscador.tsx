import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function BienvenidaBuscador() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center mt-5 gap-5">
                <h1 className="text-4xl md:text-6xl font-bold text-white flex gap-2 items-center">¡Buscador de Brainstorm Lab!
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </h1>
            </div>
        </div >
    );
};
