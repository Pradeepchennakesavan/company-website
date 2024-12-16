import React from 'react'
import gift from '../assets/gift.png'
import hand from '../assets/hand.png'
import heart from '../assets/heart.png'
import cal from '../assets/cal.png'
import protection from '../assets/protection.png'

const SolutionHover = ({open,setOpen}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[2fr_2fr_2fr] px-[2rem] py-[1rem] lg:py-[2.5rem] w-[23rem] lg:w-[60rem] lg:gap-6 bg-[#F0F5F9] rounded-[9px]'>
      <div className='py-4 flex items-center '>
        <img src={gift} alt="" />
        <div className='px-3'>
          <p className='text-[#260255] poppins-medium text-sm'>Assistance</p>
          <p className='poppins-regular text-[#677489] text-xs'>Segments with perfect target</p>
        </div>
      </div>

      <div className='py-4 flex items-center'>
        <img src={protection} alt="" />
        <div className='px-3'>
          <p className='text-[#260255] poppins-medium text-sm'>Protection & warranties</p>
          <p className='poppins-regular text-[#677489] text-xs'>Segments with perfect target</p>
        </div>
      </div>

      <div className='py-4 flex items-center'>
        <img src={cal} alt="" />
        <div className='px-3'>
          <p className='text-[#260255] poppins-medium text-sm'>Digital Theft</p>
          <p className='poppins-regular text-[#677489] text-xs'>Segments with perfect target</p>
        </div>
      </div>

      <div className='py-4 flex items-center'>
        <img src={hand} alt="" />
        <div className='px-3'>
          <p className='text-[#260255] poppins-medium text-sm'>Motor</p>
          <p className='poppins-regular text-[#677489] text-xs'>Segments with perfect target</p>
        </div>
      </div>

      <div className='py-4 flex items-center'>
        <img src={heart} alt="" />
        <div className='px-3'>
          <p className='text-[#260255] poppins-medium text-sm'>Health</p>
          <p className='poppins-regular text-[#677489] text-xs'>Segments with perfect target</p>
        </div>
      </div>

    </div>
  )
}

export default SolutionHover
