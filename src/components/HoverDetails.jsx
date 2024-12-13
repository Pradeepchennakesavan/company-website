import React, { Children, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import SolutionHover from './SolutionHover';

const HoverDetails = ({title,hoverComponent}) => {

    const [open, setOpen] = useState(false);
    const showLayout = open && hoverComponent

  return (
    <div
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
    className={`relative h-fit w-fit flex  items-center cursor-pointer transition-all duration-300 ${
        open ? "mt-3" : "mt-0"
      }`}
      
    >
      <a href="" >{title}</a>
      <FaChevronDown 
      className={`transition-transform ${
          open ? "rotate-180" : ""
        }`} />
        {showLayout && (
            <div 
            className='absolute left-1/2 top-12 -translate-x-1/2 z-50'>
                <div className='absolute left-0 right-0 h-6 bg-transparent -top-6' />
                <SolutionHover />
            </div>
        )}
    </div>
  )
}

export default HoverDetails
