import React from 'react'
import assistance from '../assets/assistance.png'
import doctor from '../assets/doctor.png'
import yoga from '../assets/yoga.png'
import arrowleft from '../assets/arrowleft.png'
import arrowright from '../assets/arrowright.png'


const Results = () => {
  return (
    <div className='-mx-[6vw] px-[100px] mb-[70px]'>
      <div className='flex flex-col justify-center items-center px-[200px] text-center'>
        <p className='poppins-semibold text-[37px] text-black'>Explore our solutions</p>
        <p className='poppins-regular text-[19px] text-[#958F8F] pt-2'>
        We provide the widest range of assistance and, bespoke solutions to our individual customers and corporate clients across the world</p>
      </div>

      <div className='flex items-center gap-5'>
        <img className='bg-[#EFC7FD] px-5 py-5 rounded-[50%] cursor-pointer' src={arrowleft} alt="" />
        <div className='flex flex-col items-center gap-3'>
            <img className='w-[252px] ' src={assistance} alt="" />
            <p className='poppins-semibold text-[21px] text-[#361263]'>Assistance</p>
            <p className='poppins-regular items-center text-center text-[15px] text-[#958F8F]'>No more paperwork. Manage employee
                memberships real time on the Teamsure
                dashboard.</p>
        </div>

        <div className='flex flex-col items-center  gap-3'>
            <img className='w-[384px]' src={yoga} alt="" />
            <p className='poppins-semibold text-[21px] text-[#361263]'>Protection & Warranties</p>
            <p className='poppins-regular items-center text-center text-[15px] text-[#958F8F]'>Zero annual commitments. Save business
            costs with India’s first monthly billing
            membership.</p>
        </div>

        <div className='flex flex-col items-center gap-3'>
            <img src={doctor} alt="" />
            <p className='poppins-semibold text-[21px] text-[#361263]'>Digital Health</p>
            <p className='poppins-regular items-center text-center text-[15px] text-[#958F8F]'>Dedicated claim support. Let go of
            operational hasseles with personalized,
            end to end claims assistance and.</p>
        </div>
        <img className='bg-[#EFC7FD] px-5 py-5 rounded-[50%] cursor-pointer' src={arrowright} alt="" />
      </div>
    </div>
  )
}

export default Results

