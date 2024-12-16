import React from 'react'
import assistance from '../assets/assistance.png'
import doctor from '../assets/doctor.png'
import yoga from '../assets/yoga.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Results = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={className}
      style={{
        ...style,
        background: "#EFC7FD",
        width: "55px",
        height: "55px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",  // optional, for rounded button
      }}
      onClick={onClick}
    >
    </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#EFC7FD",
          width: "55px",
          height: "55px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",  // optional, for rounded button
        }}
        onClick={onClick}
      />
    );
  }

  const data=[
    {
      name:'Assistance',
      img: assistance,
      content: "No more paperwork. Manage employee memberships real time on the Teamsure dashboard"
    },
    {
      name:'Protection & Warranties',
      img: yoga,
      content: "Zero annual commitments. Save business costs with India’s first monthly billing membership."
    },
    {
      name:'Digital Health',
      img: doctor,
      content: "No more paperwork. Manage employee memberships real time on the Teamsure dashboard"
    },
    {
      name:'Services',
      img: assistance,
      content: "No more paperwork. Manage employee memberships real time on the Teamsure dashboard"
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {
        breakpoint: 800, // Tailwind's `sm` screen size breakpoint
        settings: {
          slidesToShow: 2, // Show 1 slide on small screens
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Show navigation dots
        },
      }
    ],
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center '>
        <p className='text-4xl poppins-semibold text-[#361263]'>Explore our solutions</p>
        <p className='poppins-regular text-[#9F9C9C]  sm:text-xl text-center py-6'>We provide the widest range of assistance and, bespoke solutions to our individual <br /> customers and corporate clients across the world</p>
      </div>

      <div className='mt-10'>
      <Slider {...settings}>
        {data.map((d) => (
          <div className='h-[500px] flex flex-col items-center justify-center'>
            <div className='h-[18rem] flex items-center justify-center'>
              <img className='' src={d.img} alt="" />
            </div>

            <div className='flex flex-col items-center text-center py-8 px-8 justify center py-3'>
              <p className='poppins-semibold  text-[#361263]  text-xl'>{d.name}</p>
              <p className='poppins-regular text-[#958F8F] text-sm sm:text-base py-4'>{d.content}</p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default Results

