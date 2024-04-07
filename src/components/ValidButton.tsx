import React from 'react';

interface IButton {
    children?: React.ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean
    type?: "submit" | "reset" | "button" | undefined
}

export default function ValidButton({ children, className, onClick, disabled = false, type }: IButton) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-300 hover:from-[#3B82F6] hover:to-[#1E3A8A]"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            Enviar
        </button>
    )
}
