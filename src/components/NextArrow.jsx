import React from 'react'
import { GoArrowRight } from "react-icons/go";


const NextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className='absolute hidden lg:block right-12 top-[11rem]'>
        <div className='bg-transparent text-2xl border-[2px] border-black h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <GoArrowRight />
        </div>
    </div>
  )
}

export default NextArrow
