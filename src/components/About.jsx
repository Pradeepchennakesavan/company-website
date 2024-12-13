import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className='flex h-[655px] mb-[84px] -mx-[6vw]'>
      <div className='pt-[100px] w-[50%] bg-[#EBE5FF] pl-[85px]'>
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

      <div className='flex flex-col items-center gap-7 text-white px-[60px] w-[50%] bg-[#714BFF]'>
        <img className='w-[198px] pt-14 pb-9' src={about} alt="" />
        <p className='w-[460px] pb-3 text-center poppins-regular text-[19px] leading-[28px]'>Embark on a digital commerce revolution with <span className='poppins-bold'>XXXX</span>. We infuse confidence into your online ventures, securing transactions, optimizing logistics, and ensuring unparalleled customer satisfaction</p>
        <p className='w-[484px] text-center poppins-regular text-[19px] leading-[28px]'>
        From cart to door, <span className='poppins-bold'>XXXX</span> transforms challenges into opportunities, making your Ecommerce journey not just secure but extraordinary. Elevate your business with the <span className='poppins-bold'>XXXX</span> touch and navigate the Ecommerce landscape with confidence and innovation
        </p>
      </div>

    </div>
  )
}

export default About
