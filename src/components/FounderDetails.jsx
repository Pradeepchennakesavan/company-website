import React from 'react';
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo from '../assets/photo.png';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';


const FounderDetails = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    
  };

  const data = [
    {
      name: 'Amet Minimnon ',
      img: photo,
      name2: 'Co-Founder at Max',
      desc: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'
    },

    {
      name: 'Amet Minimnon ',
      img: photo,
      name2: 'Co-Founder at Max',
      desc: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'
    }
  ]


  return (
    <div className='mt-10 -mx-[2rem] -mx-[6vw]  flex flex-col py-[5rem] sm:px-[4rem]  px-[2rem] bg-[#D2F3FD80]'>
      <Slider {...settings} className=''>
      {data.map((d) => (
       <div>
          <div className='flex flex-col lg:flex-row gap-12 lg:py-[6rem] items-center justify-center'>
            <div className='flex flex-col items-center justify-center  '>
              <div className='w-[7rem] py-4'><img src={d.img} alt="" /></div>
              <p className='poppins-semibold text-lg'>{d.name}</p>
              <p className='text-xs poppins-regular'>{d.name2}</p>
            </div>

            <div className=' w-full lg:max-w-[50%]  text-center bg-[#724CFF2B] poppins-regular rounded-[1.5rem]  text-sm md:text-xl'>
            <p className='px-10 py-11'>{d.desc}</p>
            </div>
          </div>
        </div>
     ))}
     
     </Slider>
    </div>
  );
};

export default FounderDetails;
