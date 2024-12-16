import React from 'react'
import { GoArrowLeft } from "react-icons/go";

const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    
    <div onClick={onClick} className='absolute hidden lg:block top-[11rem] left-[2.5rem]'>
        <div className='bg-transparent text-2xl border-[2px] border-black h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <GoArrowLeft />
        </div>
    </div>
    
  )
}

export default PrevArrow
