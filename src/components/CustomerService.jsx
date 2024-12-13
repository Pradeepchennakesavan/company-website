import React from 'react'

const CustomerService = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-[6rem] bg-[#B5B8F2] h-[40rem] -mx-[6vw] text-[#361263]'>
      <p className='poppins-semibold text-[54px] '>Ready to Optimize Your Business with <br /> XXXX Solutions?</p>
      <p className='poppins-light text-xl py-[2rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />
      sint. Velit officia consequat duis enim velit mollit.</p>
      <div className='flex gap-[2rem] text-xl poppins-medium'>
        <button className='py-[15px] px-[30px] rounded-[7.8rem] bg-white'>Talk to an Expert</button>
        <button className='py-[15px] px-[30px] rounded-[7.8rem] bg-white'>View Our Plans</button>
      </div>
    </div>
  )
}

export default CustomerService
