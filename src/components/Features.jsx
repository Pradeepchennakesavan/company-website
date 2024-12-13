import React from 'react'
import ballon from '../assets/ballon.png'
import candy from '../assets/candy.png'
import rocket from '../assets/rocket.png'

const Features = () => {
  return (
    <div className='flex items-center gap-16 w-full h-[175px] px-20 py-9 bg-[#D1D4FF] mt-[262px] mb-[60px] rounded-[8px]'>

      <div className='flex items-center gap-4 flex-1'>
        <img className='w-[97px] h-[81px]' src={ballon} alt="" />
        <div>
            <p className='poppins-semibold text-[16px] text-[#361263] leading-[25px]'>Integrated Protection Ecosystem</p>
            <p className='text-black poppins-regular text-[12px] leading-[18px]'>Comprehensive suite addressing diverse needs for a seamless, secure experience</p>
        </div>
      </div>

      <div className='flex items-center flex-1'>
        <img src={candy} alt="" />
        <div>
            <p className='poppins-semibold text-[16px] text-[#361263] leading-[25px]'>Tailored Solutions for Every Aspect</p>
            <p className='text-black poppins-regular text-[12px] leading-[18px]'>Personalized plans adapting to individual lifestyles and business requirements effortlessly</p>
        </div>
      </div>

      <div className='flex items-center flex-1'>
        <img src={rocket} alt="" />
        <div>
            <p className='poppins-semibold text-[16px] text-[#361263] leading-[25px]'>Global Assurance and Rapid Response</p>
            <p className='text-black poppins-regular text-[12px] leading-[18px]'>Worldwide coverage, rapid assistance—XXXX commitment to global well-being</p>
        </div>
      </div>
    </div>
  )
}

export default Features
