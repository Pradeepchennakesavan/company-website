import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className='flex flex-col -mx-[5.7rem] lg:flex-row mb-[84px]'>

      <div className='pt-[100px] w-full lg:w-[50%] bg-[#EBE5FF] pl-[85px] pb-9'>
        <p className='poppins-light text-[13px] text-[#361263CC]'>REVOLUTIONIZING INDUSTRIES</p>
        <p className='poppins-semibold text-[36px] w-[455px] pt-4 text-[#1A0076]'><span className='poppins-bold'>XXXX</span> Touch in Every Realm</p>

        <div className='flex flex-col gap-8 pt-[60px]'>
          <p className='flex gap-3'><img src={icon1} alt="" />Ecommerce</p>
          <p className='flex gap-3'><img src={icon5} alt="" />Consumer Durables</p>
          <p className='flex gap-3'><img src={icon3} alt="" />Logistics</p>
          <p className='flex gap-3'><img src={icon4} alt="" />Travel</p>
          <p className='flex gap-3'><img src={icon2} alt="" />Fintech</p>
        </div>

      </div>

      <div className='flex flex-col items-center lg:w-[50%] gap-7 text-white w-full bg-[#714BFF] pb-20'>
        <img className='w-[198px] pt-14 pb-9' src={about} alt="" />

        <p className='w- px-[7rem] pb-3 text-center poppins-regular text-base sm:text-xl leading-[28px]'>Embark on a digital commerce revolution with <span className='poppins-bold'>XXXX</span>. We infuse confidence into your online ventures, securing transactions, optimizing logistics, and ensuring unparalleled customer satisfaction</p>

        <p className='w-full px-[7rem] text-center poppins-regular text-base sm:text-xl leading-[28px]'>
        From cart to door, <span className='poppins-bold'>XXXX</span> transforms challenges into opportunities, making your Ecommerce journey not just secure but extraordinary. Elevate your business with the <span className='poppins-bold'>XXXX</span> touch and navigate the Ecommerce landscape with confidence and innovation
        </p>
        
      </div>

    </div>
  )
}

export default About
