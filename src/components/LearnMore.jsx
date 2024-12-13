import React from 'react'
import design from '../assets/design.png'
import learnmore from '../assets/learnmore.png'
import arrow from '../assets/arrow.png'

const LearnMore = () => {
  return (
    <div className='relative -mx-[6vw] bg-[#714BFF] h-[662px] mb-[90px]'>
      <div className='px-[6vw]'>
        <img className='absolute left-0 bottom-0 top-0' src={design} alt="" />
        <div className='flex '>
            <div className='py-[160px] text-white'>
                <p className='w-[500px] pb-10 poppins-semibold text-[39px] text-white'>Unlock Seamless Travels with XXXX</p>
                <div className='flex flex-col gap-4 poppins-regular text-white text-[16px] pb-9 text-[#361263]'>
                    <p className='flex items-center gap-2'><img src={arrow} alt="" />Innovative Solutions for All Needs</p>
                    <p className='flex items-center gap-2'><img src={arrow} alt="" />Customer-Centric Approach</p>
                    <p className='flex items-center gap-2'><img src={arrow} alt="" />Strategic Problem Resolution</p>
                </div>
                <p>Experience a new level of travel confidence with XXXX dedicated solutions</p>
                <button>Learn more</button>
            </div>
            <div className='absolute top-[70px] right-[90px]'>
                <img src={learnmore} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default LearnMore
