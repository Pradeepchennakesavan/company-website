import React from 'react'
import women from '../assets/women.png';
import shadow from '../assets/shadow.png'
import bulb from '../assets/bulb.png'
import currency from '../assets/currency.png'
import flower from '../assets/flower.png'
import fristaid from '../assets/fristaid.png'
import group from '../assets/group.png'
import group2 from '../assets/group2.png'
import pulse from '../assets/pulse.png'
import touch from '../assets/touch.png'
import Vector from '../assets/Vector.png'


const Hero = () => {
  return (
    <div className='relative w-full h-full flex z-0'>
      {/* Hero left */}
      <div className='mt-[85px] font-normal text-[17px] text-[#361263B8]'>
        <p>YOUR JOURNEY, OUR EXPERTISE</p>

        <p className='mt-3 w-[607px] text-[#361263] poppins-semibold text-[50px]'>Crafting Success with <span className='text-[#5D3FD3]'>XXXX</span> Solutions</p>

        <p className='mt-3 w-[565px] poppins-regular text-[16px] leading-[25px] text-[#361263B8]'>Elevating your lifestyle with comprehensive protection for digital assets and reliable assistance services. Partner with us for peace of mind and well-being on your journey</p>

        <button className='mt-7 px-[48px] py-[12px] bg-[#6C33B5] text-white rounded-[105px]'>
            Reach Us
        </button>
      </div>
      
      {/* hero right */}
      <div className='relative h-full w-[50%]'>
        <div className='absolute top-[240px] left-[275px]'>
          <img className='' src={women} alt="" />
          <div className='absolute left-[-49px] z-0 w-[333px]'>
            <img src={shadow} alt="" />
          </div>
        </div>
        <img className='absolute left-[289px]' src={Vector} alt="" />
        <img className='absolute top-[212px] left-[130px]' src={bulb} alt="" />
        <img className='absolute top-[118px] left-[218px]' src={currency} alt="" />
        <img className='absolute top-[212px] left-[480px]' src={flower} alt="" />
        <img className='absolute top-[434px] left-[500px]' src={fristaid} alt="" />
        <img className='absolute top-[326px] left-[101px]' src={group} alt="" />
        <img className='absolute top-[434px] left-[135px]' src={group2} alt="" />
        <img className='absolute top-[118px] left-[378px]' src={pulse} alt="" />
        <img className='absolute top-[326px] left-[516px]' src={touch} alt="" />
      </div>
    </div>

    
  )
}

export default Hero
