import React from 'react'

const CustomerService = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-[6rem] bg-[#B5B8F2] sm:h-[40rem] py-20 -mx-[6rem] text-[#361263]'>
      <p className='poppins-semibold text-3xl px-20 md:text-5xl'>Ready to Optimize Your Business with <br /> XXXX Solutions?</p>
      <p className='poppins-light text-sm sm:text-xl px-20 py-[2rem] px-6 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />
      sint. Velit officia consequat duis enim velit mollit.</p>
      <div className='flex sm:gap-[2rem] gap-5 sm:text-xl text-base poppins-medium'>
        <button className='py-[15px] px-[30px] rounded-[7.8rem] bg-white'>Talk to an Expert</button>
        <button className='py-[15px] px-[30px] rounded-[7.8rem] bg-white'>View Our Plans</button>
      </div>
    </div>
  )
}

export default CustomerService
