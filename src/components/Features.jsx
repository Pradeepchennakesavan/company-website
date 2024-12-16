import React from 'react'
import ballon from '../assets/ballon.png'
import candy from '../assets/candy.png'
import rocket from '../assets/rocket.png'

const Features = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around  w-full h-full gap-10 sm:px-10 px-10 py-9 bg-[#D1D4FF] mt-[9rem] sm:mt-[1rem]  rounded-[8px]'>

      <div className='flex m-auto items-center  max-w-[23rem] gap-4 '>
        <img className='w-[4rem] sm:w-[5rem] ' src={ballon} alt="" />
        <div className='px-4'>
            <p className='poppins-semibold py-2 sm:text-base text-sm text-[#361263] '>Integrated Protection Ecosystem</p>
            <p className='text-black poppins-regular sm:text-sm text-xs '>Comprehensive suite addressing diverse needs for a seamless, secure experience</p>
        </div>
      </div>

      <div className='flex m-auto max-w-[20rem] max-w-[24rem] gap-4 items-center '>
        <img className='w-[4rem] sm:w-[5rem]' src={candy} alt="" />
        <div className='px-4'>
            <p className='poppins-semibold py-2 sm:text-base text-sm text-[#361263] '>Tailored Solutions for Every Aspect</p>
            <p className='text-black poppins-regular sm:text-sm  text-xs leading-[18px]'>Personalized plans adapting to individual lifestyles and business requirements effortlessly</p>
        </div>
      </div>

      <div className='flex m-auto max-w-[25rem] max-w-[23rem] gap-4 items-center '>
          <img className='w-[4rem] sm:w-[5rem]' src={rocket} alt="" />
        <div className='px-4'>
            <p className='poppins-semibold py-2 sm:text-base text-sm text-[#361263] '>Global Assurance and Rapid Response</p>
            <p className='text-black poppins-regular sm:text-sm text-xs leading-[18px]'>Worldwide coverage, rapid assistance—XXXX commitment to global well-being</p>
        </div>
      </div>
    </div>
  )
}

export default Features
