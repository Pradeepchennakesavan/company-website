import React from 'react'
import arrow2 from '../assets/arrow2.png'
import captcha from '../assets/captcha.png'

const Footer = () => {
  return (
    <div className='bg-[#411A74] h-[54rem] -mx-[6vw] px-[6vw] '>
    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-[3rem] py-[7rem] border-b'>
      <div className='flex flex-col gap-4 items-center'>
        <div className='w-[102px] h-[105px] bg-[#D9D9D9]'></div>
        <div className='w-[128px] h-[29px] bg-[#D9D9D9]'></div>
      </div>

      <div className='text-white text-base poppins-light'>
        <p className='mb-[1rem] text-[#FFFFFFB2]'>INDUSTRIES</p>
        <ul className='flex flex-col gap-[1rem]'>
            <li>Ecommerce</li>
            <li>Consumer Durables</li>
            <li>Logistics</li>
            <li>Travel</li>
            <li>Fintech</li>
            <li>Health</li>
        </ul>
      </div>

      <div className='text-white text-base poppins-light'>
        <p className='mb-[1rem] text-[#FFFFFFB2]'>SOLUTIONS</p>
        <ul className='flex flex-col gap-[1rem]'>
            <li>Assistance</li>
            <li>Protection & warranties</li>
            <li>Digital Theft</li>
            <li>Motor</li>
            <li>Health</li>
        </ul>
      </div>

      <div className='text-white text-base poppins-light'>
        <p className='mb-[1rem] text-[#FFFFFFB2]'>COMPANY</p>
        <ul className='flex flex-col gap-[1rem]'>
            <li>About Us</li>
            <li>Raise a Request</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
      </div>

      <div className='text-white text-base poppins-light'>
        <p className='mb-[1rem] text-[#FFFFFFB2]'>GET THE LATEST</p>
        <p>Sign up to receive benefits news and insights in your inbox once a month</p>
        <div className='flex items-center justify-between border mt-5'>
            <input className='text-base py-4 px-5 bg-transparent' type="email" placeholder='Email*' />
            <button className='px-4 py-[1.5rem] bg-white cursor-pointer'><img className='w-[2rem]' src={arrow2} alt="" /></button>
        </div>
        <img className='w-full mt-5' src={captcha} alt="" />
      </div>
      </div>

      <div className='text-base text-white poppins-light pt-[4rem] pb-[3rem] leading-[19px]'>
        <p className='pb-[5.5rem]'>A huge differentiator between corporate medical insurance plans is the waiting period. A group mediclaim insurance for employees doesn’t have this limitation. By paying a small amount, employees get group medical coverage for pre-existing diseases from the first day of the policy. This waived-off waiting period is extended to your spouse as well. With corporate group insurance, the primary difference is the requirement for pre-medical tests. A best group mediclaim policy in India doesn’t require it and even without it, the policies are valid.Unlike individual insurance, group health care plans come with a range of added benefits such as free and unlimited primary health care, maternity benefit, pre and post-hospitalization costs, room and boarding, surgical fees, drugs, and medicines, ambulance charges, etc.</p>
        <div className='flex justify-between'>
            <div>
                <p className='py-4'>XXXX</p>
                <p>IRDAI Registration No. 585 Valid up to 19/02/2023</p>
            </div>
            <p className='pt-[3rem]'>Privacy  |  Terms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
