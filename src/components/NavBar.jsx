import React, { useState } from 'react'
import Logo from '../assets/Logo.png';
import dropdown from '../assets/dropdown.png';
import HoverDetails from './HoverDetails';
import SolutionHover from './SolutionHover';
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";



const NavBar = () => {

  const [visible, setVisible] = useState(false)

  return (
    <nav className='flex items-center justify-between py-3 w-full  border-b-2'>
      <img className='cursor-pointer w-28 sm:w-40' src={Logo}  alt="" />
      <div className="hidden lg:flex gap-7 text-[#361263] text-sm sm:text-base font-medium">
        <div className="flex items-center cursor-pointer">
          <HoverDetails 
            title={"Industies"}
          />
        </div>

        <div className="flex items-center cursor-pointer">
          <HoverDetails 
            title={"Solution"}
            hoverComponent={SolutionHover}
          />
        </div>

        <div className="flex items-center cursor-pointer">
          <HoverDetails 
            title={"Partners"}
          />
        </div>

        <div className="flex items-center cursor-pointer">
          <HoverDetails 
            title={"About Us"}
          />
        </div>
        <div className='flex items-center cursor-pointer '>
          <a href="">Contact Us</a>
        </div>
      </div>

      <div className='flex items-center '>
        <button className='px-3 py-1 lg:px-4 lg:py-2 text-sm cursor-pointer text-[#FAFBFD] text-white font-medium bg-gradient-to-r from-[#724CFF] to-[#69D6F9] rounded-[95px]'>
          Talk to an Expert
        </button>
        <IoMdMenu onClick={() => setVisible(true)} className='lg:hidden text-xl w-8 px'/>
      </div>

      {/* Side bar menu */}
      {
        visible && (
          <div className={`absolute top-0 right-0 z-10 bottom-0 overflow-hidden text-[#361263] bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
            <div  className='flex flex-col cursor-pointer'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                    <IoMdArrowBack />
                    <p>Back</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-3'>
                  <p><HoverDetails title={"Industies"}/></p>
                  <p><HoverDetails title={"Solutions"} hoverComponent={SolutionHover}/></p>
                  <p><HoverDetails title={"Parntners"}/></p>
                  <p><HoverDetails title={"About Us"}/></p>
                  <p><HoverDetails title={"Contact Us"}/></p>
                </div>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default NavBar
