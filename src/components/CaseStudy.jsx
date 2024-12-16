import React from 'react';
import casestudy1 from '../assets/casestudy1.png';
import casestudy2 from '../assets/casestudy2.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    
    <div onClick={onClick} className='absolute -left-[28em] top-[17rem]'>
        <div className='bg-transparent text-2xl border-[2px] border-white h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <GoArrowLeft />
        </div>
    </div>
    
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className='absolute -left-[24rem] top-[17rem]'>
        <div className='bg-transparent text-2xl border-[2px] border-white h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <GoArrowRight />
        </div>
    </div>
  )
}

const CaseStudy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 640, // Tailwind's `sm` screen size breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Show navigation dots
        },
      },
    ],
  };

  const data = [
    {
      name: 'CASE STUDIES',
      des: 'How we Helped Employees take Control of their Coverage',
      img: casestudy1,
    },
    {
      name: 'CASE STUDIES',
      des: 'How we Helped This Employer Reimagine Their Health Benefits Strategy',
      img: casestudy2,
    },
    {
      name: 'CASE STUDIES',
      des: 'How we Helped Employees take Control of their Coverage',
      img: casestudy1,
    },
  ];

  return (
    <div className=" realtive flex flex-col lg:flex-row mt-10  px-4">
      {/* Left Section */}
      <div className="text-[#361263] w-full lg:w-1/3 lg:mt-14 pr-5">
        <p className="poppins-regular text-sm py-5">FEATURED POSTS</p>
        <p className="poppins-semibold text-3xl pb-5">
          The Latest from Better Benefits
        </p>
        <button className="bg-[#6C33B5] py-[11px] px-[22px] text-white text-base poppins-semibold rounded-[2rem] mb-7">
          View all
        </button>
      </div>

      {/* Slider Section */}
      <div className=" relative w-full lg:w-2/3">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="flex flex-col px-3 items-center">
              
              <div className="w-full">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-[300px] object-contain rounded-lg"
                />
              </div>
              
              <div className="flex flex-col items-start mt-4">
                <p className="font-semibold text-lg">{d.name}</p>
                <p className="text-gray-600 text-base">{d.des}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CaseStudy;
