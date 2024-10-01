// import React from 'react'
// import desk from "../assets/bank-slider.jpg";
// import islamic from "../assets/Home-Slider.jpg";
// import sky from "../assets/Slider-Image-1.png";
// import earn from "../assets/Slider-Image-2.png";

// const Slider = () => {
//   return (
//     <>
//      <div id="default-carousel" className="relative w-full" data-carousel="slide">

//     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

//         <div className="duration-700 ease-in-out" data-carousel-item>
//             <img src={desk} className="absolute block w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>

//         <div className="duration-700 ease-in-out" data-carousel-item>
//             <img src={islamic} className="absolute block w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>

//         <div className="duration-700 ease-in-out" data-carousel-item>
//             <img src={earn} className="absolute block w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>

//         <div className="duration-700 ease-in-out" data-carousel-item>
//             <img src={sky} className="absolute block w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
//     </div>

//     <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//     </div>

//     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
//             </svg>
//             <span className="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//             </svg>
//             <span className="sr-only">Next</span>
//         </span>
//     </button>
// </div>

// </>
//   )
// }

// export default Slider

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from "../assets/Slider-1.jpg"
import slider2 from "../assets/Slider-2.jpg"
import slider3 from "../assets/Slider-Image-2.png"

const sliderItems = [
  {
    imageUrl: slider1,
    title: 'Largest collection of Financial',
    subtitle: 'Biggest List of Bank',
  },
  {
    imageUrl: slider2,
    title: 'With Our Quick & Simplified',
    subtitle: 'Grow Your BUSINESS',
  },
  {
    imageUrl: slider3,
    title: 'Leadership & Innovation',
    subtitle: 'Leading through Knowledge',
  },
];

const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === 'next'
      ? { ...style, right: '10px' }
      : { ...style, left: '10px', zIndex: '1' };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};

const HeaderText = ({ title, subtitle }) => (
  <div className=''>
    <p className="text-xl text-[#85144b] font-semibold">{subtitle}</p>
    {title.split(' ').map((word, index) => (
      <h2
        key={index}
        className={`text-4xl ${
          index === 0
            ? 'text-primary'
            : index === 1
            ? 'text-accent'
            : 'text-white'
        } font-extrabold`}
      >
        {word}
      </h2>
    ))}
    <button className="bg-primary px-3 duration-200 p-2 rounded-full text-green-400 hover:border hover:bg-[#85144b] hover:border-primary hover:text-primary"
    style={{border: "1px solid #85144b"}}
    >
      Details Now
    </button>{' '}
  </div>
);

const HeaderSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    duration:500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };

  return (
    <Slider {...settings}>
      {sliderItems.map((item, index) => (
        <div key={index}>
          <div
            className="h-[500px] flex justify-around bg-center bg-cover"
            style={{
              backgroundImage: `url('${item.imageUrl}')`,
            }}
          >
            <div></div>
            <div className="flex flex-row items-center justify-around">
              <div></div>
              <HeaderText title={item.title} subtitle={item.subtitle} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const Header = () => {
  return (
    <div className="w-full h-[500px] overflow-hidden">
      <HeaderSlider />
    </div>
  );
};

export default Header;






