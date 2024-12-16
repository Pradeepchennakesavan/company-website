import React from 'react'
import hero from '../assets/hero.png';
import Vector from '../assets/Vector.png'


const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row mt-10 '>
      <div className='w-full md:w-1/2 mt-8 sm:text-base text-sm'>
          <p className='text-[#361263CC] poppins-light '>YOUR JOURNEY, OUR EXPERTISE</p>
          <p className='poppins-semibold text-4xl py-6 text-[#361263]'>Crafting Success with <span className='text-[#5D3FD3]'>XXXX</span> Solutions</p>
          <p className='poppins-light text-[#361263B8] pb-6 '>Elevating your lifestyle with comprehensive protection for digital assets and reliable assistance services. Partner with us for peace of mind and well-being on your journey</p>
          <button className='poppins-semibold text-base text-white bg-[#6C33B5] py-2 px-10 mt-3 rounded-[6.5rem]'>
            Reach Us 
          </button>
      </div>

      <div className='relative '>
          <img className='hidden sm:block w-[60rem] overflow-hidden' src={hero} alt="" /> 
          <img className='absolute hidden md:block  -top-10 -right-[7rem] z-0' src={Vector} alt="" />
      </div>
      
    </div>
    
  )
}

export default Hero
