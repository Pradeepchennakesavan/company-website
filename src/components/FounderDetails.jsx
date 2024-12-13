import React from 'react';
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';
import photo from '../assets/photo.png';

const FounderDetails = () => {
  return (
    <div className="relative flex items-center justify-between gap-2 -mx-[6vw] px-[6vw] h-[32rem] bg-[#D2F3FD80]">
      
      <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
        <img src={arrow1} alt="Previous" />
      </button>

      
      <div className="relative flex flex-col items-center">
        
        <div>
          <img className='w-[13rem]' src={photo} alt="" />
        </div>
        
        <div className="text-center ml-12 mt-1">
          <p className="text-lg font-semibold text-black">Amet Minimnon</p>
          <p className="text-sm text-gray-600">Co-Founder at Max</p>
        </div>
      </div>

      
      <div className="bg-[#724CFF2B] p-12 rounded-3xl w-[40rem]  h-auto flex items-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
        </p>
      </div>

      
      <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
        <img src={arrow2} alt="Next" />
      </button>
    </div>
  );
};

export default FounderDetails;
