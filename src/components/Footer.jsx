import React from 'react';
import arrow2 from '../assets/arrow2.png';
import captcha from '../assets/captcha.png';
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#411A74] -mx-[6vw] sm:px-20 px-10'>
      <div className='grid lg:grid-cols-[1fr_1fr_1fr_1fr_2fr] md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-3 lg:gap-[3rem] gap-[2rem] py-14 sm:py-[7rem] border-b'>
        
        {/* Logo and Placeholder */}
        <div className='flex flex-col gap-4 '>
          <div className='w-[102px] h-[105px] bg-[#D9D9D9]'></div>
          <div className='w-[128px] h-[29px] bg-[#D9D9D9]'></div>
        </div>

        {/* Industries Section */}
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

        {/* Solutions Section */}
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

        {/* Company Section */}
        <div className='text-white text-base poppins-light'>
          <p className='mb-[1rem] text-[#FFFFFFB2]'>COMPANY</p>
          <ul className='flex flex-col gap-[1rem]'>
            <li>About Us</li>
            <li>Raise a Request</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>

        
        <div className='text-white text-base w-full poppins-light'>
          <p className='mb-[1rem] text-[#FFFFFFB2]'>GET THE LATEST</p>
          <p>Sign up to receive benefits news and insights in your inbox once a month</p>
          <div className='flex items-center  justify-between border '>
            <input type="email" className='bg-transparent  px-2 py-3' placeholder='Email*'/>
            <div className=''><FaArrowRight className='bg-white w-12 h-12 text-black '/></div>
          </div>
          <img className='w-full mt-5 overflow-hidden' src={captcha} alt="captcha" />
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className='sm:text-base text-xs text-white poppins-light pt-5 sm:pt-[4rem] pb-[3rem] leading-[19px]'>
        <p className='sm:pb-[5.5rem] pb-4'>
          A huge differentiator between corporate medical insurance plans is the waiting period. A group mediclaim insurance for employees doesn’t have this limitation. By paying a small amount, employees get group medical coverage for pre-existing diseases from the first day of the policy. This waived-off waiting period is extended to your spouse as well. With corporate group insurance, the primary difference is the requirement for pre-medical tests. A best group mediclaim policy in India doesn’t require it and even without it, the policies are valid.Unlike individual insurance, group health care plans come with a range of added benefits such as free and unlimited primary health care, maternity benefit, pre and post-hospitalization costs, room and boarding, surgical fees, drugs, and medicines, ambulance charges, etc.
        </p>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div>
            <p className='py-4'>XXXX</p>
            <p>IRDAI Registration No. 585 Valid up to 19/02/2023</p>
          </div>
          <p className='sm:pt-[3rem] pt-3'>Privacy  |  Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
