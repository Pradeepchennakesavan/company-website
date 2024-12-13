import React from 'react'
import arrowleft from '../assets/arrowleft.png'
import arrowright from '../assets/arrowright.png'
import casestudy1 from '../assets/casestudy1.png'
import casestudy2 from '../assets/casestudy2.png'

const CaseStudy = () => {
  return (
    <div className='mt-[7rem] flex justify-between mb-[9rem ]'>
      <div className='pt-8'>
        <p className='text-xs text-[#361263] font-weight-400 '>FEATURED POSTS</p>
        <p className='text-4xl text-[#361263] poppins-semibold py-8'>The Latest from
        Better <br /> Benefits</p>
        <button className='text-white bg-[#6C33B5] py-[11px] px-[22px] rounded-[95px] cursor-pointer text-base poppins-semibold'>
            View all
        </button>
        <div className='py-8'>
            <button className='w-[3rem] bg-white h-[3rem] rounded-full' ><img src={arrowleft} alt="" /></button>
            <button className='w-[3rem] bg-white h-[3rem] rounded-full'><img src={arrowright} alt="" /></button>
        </div>
      </div>

      <div className='flex gap-[4rem]'>
        <div>
            <img src={casestudy1} alt="" />
            <p className='text-xs poppins-light text-[#361263] py-4'>CASE STUDIES</p>
            <p className='text-[#361263] poppins-medium text-xl w-[20rem]'>How we Helped Employees take Control of thier Coverage</p>
        </div>

        <div>
            <img src={casestudy2} alt="" />
            <p className='text-xs poppins-light text-[#361263] py-4'>CASE STUDIES</p>
            <p className='text-[#361263] poppins-medium text-xl w-[20rem]'>How we Helped This Employer Reimagine Their Health Benefits Strategy</p>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
