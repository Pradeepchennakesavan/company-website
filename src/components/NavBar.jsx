import React from 'react'
import Logo from '../assets/Logo.png';
import dropdown from '../assets/dropdown.png';
import HoverDetails from './HoverDetails';
import SolutionHover from './SolutionHover';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-3 w-full  border-b-2'>
      <img className='cursor-pointer' src={Logo}  alt="" />
      <div className="flex gap-[28px] text-[#361263] text-[15px] font-medium">
        <div className="flex items-center cursor-pointer">
          <p>Industries</p>
          <img src={dropdown} alt="Dropdown Icon" className="h-4 w-4" />
        </div>
        <div className="flex items-center cursor-pointer">
          <HoverDetails 
            title={"Solution"}
            hoverComponent={SolutionHover}
          />
        </div>
        <div className="flex items-center cursor-pointer">
          <p>Partners</p>
          <img src={dropdown} alt="Dropdown Icon" className="h-4 w-4" />
        </div>
        <div className="flex items-center cursor-pointer">
          <p>About Us</p>
          <img src={dropdown} alt="Dropdown Icon" className="h-4 w-4" />
        </div>
        <div className='flex items-center cursor-pointer pl-6'>
          <p>Contact us</p>
        </div>
      </div>

      <button className='px-4 py-2 cursor-pointer text-1 text-[#FAFBFD] text-white font-medium bg-gradient-to-r from-[#724CFF] to-[#69D6F9] rounded-[95px]'>
        Talk to an Expert
      </button>

    </nav>
  )
}

export default NavBar
