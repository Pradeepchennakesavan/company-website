import React from 'react'
import procedure from '../assets/procedure.png'
import partner from '../assets/partner.png'

const Procedure = () => {
  return (
    <div className='mt-10'>

      <div className='flex flex-col  items-center justify-center pb-5'>
        <p className='poppins-semibold text-3xl sm:text-4xl mb-3 text-[#361263]'>How it works</p>
        <p className='poppins-regular text-[18px] text-[#361263D9]'>Simplifying the <span className='poppins-bold'>XXXX</span> Experience</p>
      </div>

      <div className='flex flex-col w-full md:flex-row gap-6 pt-9'>
        <div className=''>
          <img className='w-full h-full' src={procedure} alt="" />
        </div>
        <div className='flex flex-col justify-between text-[#361263D9] gap-3 w-full md:w-[65%] h-full'>
            <p className='flex items-center gap-8 bg-[#EBE5FF] px-12 py-[2rem] rounded-[25px]'><span className='text-[36px] poppins-light'>01</span>Speak to Expert</p>
            <p className='flex items-center gap-8 bg-[#EBE5FF] px-12 py-[2rem] rounded-[25px]'><span className='text-[36px] poppins-light'>02</span>Understand the probelm</p>
            <p className='flex items-center gap-8 bg-[#EBE5FF] px-12 py-[2rem] rounded-[25px]'><span className='text-[36px] poppins-light'>03</span>Tailor made solutions</p>
            <p className='flex items-center gap-8 bg-[#EBE5FF] px-12 py-[2rem] rounded-[25px]'><span className='text-[36px] poppins-light'>04</span>Continuous Monitoring and Enhancement</p>
        </div>
      </div>

      {/* partners logos section */}
      <div className='mt-[5rem]'>
        <div className='flex flex-col items-center text-center justify-center gap-7 '>
          <p className='poppins-semibold text-3xl sm:text-4xl text-[#361263]'>Proudly backed by</p>
          <p className='poppins-light text-[#9F9C9C] text-base sm:text-xl'>Our esteemed partners and longstanding relationships ensure emergency services <br /> and duty of care wherever you may be</p>
        </div>
        <img className='mt-9 overflow-hidden' src={partner} alt="" />
      </div>
    </div>
  )
}

export default Procedure
