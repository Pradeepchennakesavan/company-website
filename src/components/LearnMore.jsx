import React from 'react'
import design from '../assets/design.png'
import learnmore from '../assets/learnmore.png'
import arrow from '../assets/arrow.png'
import { IoIosArrowRoundForward } from "react-icons/io";


const LearnMore = () => {
  return (
    <div className='relative flex flex-col justify-between overflowhidden md:flex-row bg-[#714BFF] pt-[3.5rem] pb-[0.5rem] -mx-[6vw] lg:pb-15  mt-[6rem]'>

      <img className='absolute sm:-top-5 overflowhidden' src={design} alt="" />

      <div className='pt-[1rem] text-white px-10  md:px-[5.7rem] lg:mt-16'>
        <p className='poppins-semibold text-white sm:text-4xl text-3xl'>Unlock Seamless Travels with XXXX</p>
        <div className='poppins-regular my-7 text-base '>
          <p className='flex gap-2 items-center py-2'><IoIosArrowRoundForward />Global Assistance, Local Expertise</p>
          <p className='flex gap-2 items-center py-2'><IoIosArrowRoundForward />Emergency Response Excellence</p>
          <p className='flex gap-2 items-center py-2'><IoIosArrowRoundForward />Tailored Travel Protection Plans</p>
        </div>
        <p className='poppins-light'>Experience a new level of travel confidence with XXXX dedicated solutions</p>
        <button className='text-[#361263] poppins-semibold my-8 text-base bg-white py-3 px-5 rounded-[1.5rem]'>Learn more</button>
      </div>

      <div className='flex items-center justify-center md:mr-[6rem]'>
        <img src={learnmore} className='' alt="" />
      </div>
    </div>
  )
}

export default LearnMore
