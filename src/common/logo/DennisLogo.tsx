// components/Logo.js
import React from 'react';

export const Logo = () => {
  return (
    <div className="flex cursor-pointer group">
      <p className="m-0 transition-transform duration-500 ease-custom group-hover:rotate-[360deg]">©</p>
      <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-custom group-hover:pr-[30px]">
        <p className="relative transition-transform duration-500 ease-custom group-hover:-translate-x-full">Code by</p>
        <p className="relative pl-[0.3em] transition-transform duration-500 ease-custom group-hover:-translate-x-[65px]">Dennis</p>
        <p className="absolute left-[120px] pl-[0.3em] transition-transform duration-500 ease-custom group-hover:-translate-x-[65px]">Snellenberg</p>
      </div>
    </div>
  );
};

export default Logo;
