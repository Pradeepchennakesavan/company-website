import React from 'react'
import deliver from '../assets/deliver.png'
import arrow from '../assets/arrow.png'

const Benefits = () => {
  return (
    <div className='flex mb-[71px]  gap-12 '>
      <div>
        <img className='w-full object-contain h-full' src={deliver} alt="" />
      </div>

      <div className='flex flex-col justify-end pb-5 gap-1 border-b-2 w-full '>
        <p className='poppins-light text-[13px] text-[#361263CC]'>WHY <span className='poppins-semibold' >XXXX</span></p>
        <p className='poppins-semibold pb-3 text-[36px] text-[#1A0076]'>We created XXXX to deliver you :</p>

        <div className='poppins-medium text-[18px] text-[#361263]'>
            <p className='flex items-center gap-2'><img src={arrow} alt="" />Innovative Solutions for All Needs</p>
            <p className='flex items-center gap-2'><img src={arrow} alt="" />Customer-Centric Approach</p>
            <p className='flex items-center gap-2'><img src={arrow} alt="" />Strategic Problem Resolution</p>
        </div>

    </div>
    </div>
  )
}

export default Benefits
