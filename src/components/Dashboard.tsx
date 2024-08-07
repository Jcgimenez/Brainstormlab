// pages/Dashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const goToIndex = () => {
    navigate('/index');
  };

  const goToBuscador = () => {
    navigate('/buscador');
  };

  return (
    <div className="p-4 dark:bg-gray-900">
      <button onClick={goToIndex} className="mt-2 flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-300 hover:from-[#3B82F6] hover:to-[#1E3A8A]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </button>
      <button onClick={goToBuscador} className="mt-2 flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#6EE7B7] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#6EE7B7] hover:to-[#10B981]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </div>
  );
}
