import React from 'react'
import gift from '../assets/gift.png'
import hand from '../assets/hand.png'
import heart from '../assets/heart.png'
import cal from '../assets/cal.png'
import protection from '../assets/protection.png'

const SolutionHover = ({open,setOpen}) => {
  return (
    <div 
    className='grid grid-cols-[1fr_1fr_1fr] gap-[2rem] py-[3rem] px-[4rem] w-[57rem] h-[14rem] text-sm bg-[#F0F5F9]
     border rounded-[8px]'>
      <div >
        <div className='flex items-center gap-3 pb-[3rem]'>
            <img className='pb-5' src={gift} alt="" />
            <div>
                <p className='poppins-medium text-black'>Assistance</p>
                <p className='text-[#677489]'>Segments with perfect target</p>
            </div>
        </div>

        <div className='flex items-center gap-3 '>
            <img className='pb-5' src={hand} alt="" />
            <div>
                <p className='poppins-medium text-black'>Motor</p>
                <p className='text-[#677489]'>Segments with perfect target</p>
            </div>
        </div>
      </div>

      <div>
        <div className='flex items-center gap-3 pb-[2rem]'>
            <img className='pb-5' src={protection} alt="" />
            <div>
                <p className='poppins-medium text-black'>Protection & warranties</p>
                <p className='text-[#677489]'>Segments with perfect target</p>
            </div>
        </div>

        <div className='flex items-center gap-3'>
            <img className='pb-5' src={heart} alt="" />
            <div>
                <p className='poppins-medium text-black'>Health</p>
                <p className='text-[#677489]'>Segments with perfect target</p>
            </div>
        </div>
      </div>

      <div>
      <div className='flex items-center gap-3'>
            <img className='pb-5' src={cal} alt="" />
            <div>
                <p className='poppins-medium text-black'>Digital Theft</p>
                <p className='text-[#677489]'>Segments with perfect target</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionHover
