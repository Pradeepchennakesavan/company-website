import React from 'react'
import procedure from '../assets/procedure.png'
import partner from '../assets/partner.png'

const Procedure = () => {
  return (
    <div>

      <div className='flex flex-col items-center justify-center pb-10'>
        <p className='poppins-semibold text-[42px] mb-3 text-[#361263]'>How it works</p>
        <p className='poppins-regular text-[18px] text-[#361263D9]'>Simplifying the <span className='poppins-bold'>XXXX</span> Experience</p>
      </div>

      <div className='flex gap-9 pt-9'>
        <div className='w-[675px]'>
          <img src={procedure} alt="" />
        </div>
        <div className='flex flex-col justify-between text-[#361263D9] text-[] gap-3 w-full h-[456px]'>
            <p className='flex items-center gap-8 bg-[#EBE5FF] px-12 py-[30px] rounded-[25px]'><span className='text-[36px] poppins-light'>01</span>Speak to Expert</p>
            <p className='flex items-center gap-8 bg-[#EBE5FF] px-12 py-[30px] rounded-[25px]'><span className='text-[36px] poppins-light'>02</span>Understand the probelm</p>
            <p className='flex items-center gap-8 bg-[#EBE5FF] px-12 py-[30px] rounded-[25px]'><span className='text-[36px] poppins-light'>03</span>Tailor made solutions</p>
            <p className='flex items-center gap-8 bg-[#EBE5FF] px-12 py-[30px] rounded-[25px]'><span className='text-[36px] poppins-light'>04</span>Continuous Monitoring and Enhancement</p>
        </div>
      </div>

      {/* partners logos section */}
      <div className='mt-[97px] '>
        <div className='flex flex-col items-center text-center justify-center gap-7 '>
          <p className='poppins-semibold text-[37px] text-[#361263]'>Proudly backed by</p>
          <p className='poppins-light text-[#9F9C9C]'>Our esteemed partners and longstanding relationships ensure emergency services <br /> and duty of care wherever you may be</p>
        </div>
        <img className='mt-9' src={partner} alt="" />
      </div>
    </div>
  )
}

export default Procedure
