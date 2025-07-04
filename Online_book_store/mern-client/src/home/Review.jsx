import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Review.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg"


const Review = () => {
    return(
        <div className="my-12 px-4 lg:px-24">
            <h1 className="text-center text-5xl font-bold mb-10 leading-snug ">Our Cusomer's Review</h1>

            <div>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border custom-width'><div className='space-y-6' >
    <div className='text-amber-500 flex gap-2'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
    {/* text  */}
    <div className='mt-7 '> 
        <p className='text-base '>CEO, ABC</p>
        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio quod, velit quo libero eligendi facere neque delectus voluptatem molestiae soluta quis, perspiciatis similique illo sed veritatis non dicta! Quam?</p>
        <Avatar img={proPic} rounded bordered 
        className='w-10 mb-4'/> 

         <h5 className='text-lg font-medium '>Mark Ping</h5>
        <p className='text-base '>CEO, ABC</p>

    </div>
</div></SwiperSlide>
<SwiperSlide className='custom-width shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
    <div className='text-amber-500 flex gap-2'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
    {/* text  */}
    <div className='mt-7 '> 
        <p className='text-base '>CEO, ABC</p>
        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio quod, velit quo libero eligendi facere neque delectus voluptatem molestiae soluta quis, perspiciatis similique illo sed veritatis non dicta! Quam?</p>
        <Avatar img={proPic} rounded bordered 
        className='w-10 mb-4'/> 

         <h5 className='text-lg font-medium '>Mark Ping</h5>
        <p className='text-base '>CEO, ABC</p>

    </div>
</div></SwiperSlide>
<SwiperSlide className='custom-width shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
    <div className='text-amber-500 flex gap-2'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
    {/* text  */}
    <div className='mt-7 '> 
        <p className='text-base '>CEO, ABC</p>
        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio quod, velit quo libero eligendi facere neque delectus voluptatem molestiae soluta quis, perspiciatis similique illo sed veritatis non dicta! Quam?</p>
        <Avatar img={proPic} rounded bordered 
        className='w-10 mb-4'/> 

         <h5 className='text-lg font-medium '>Mark Ping</h5>
        <p className='text-base '>CEO, ABC</p>

    </div>
</div></SwiperSlide>
<SwiperSlide className='custom-width shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
    <div className='text-amber-500 flex gap-2'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
    {/* text  */}
    <div className='mt-7 '> 
        <p className='text-base '>CEO, ABC</p>
        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio quod, velit quo libero eligendi facere neque delectus voluptatem molestiae soluta quis, perspiciatis similique illo sed veritatis non dicta! Quam?</p>
        <Avatar img={proPic} rounded bordered 
        className='w-10 mb-4'/> 

         <h5 className='text-lg font-medium '>Mark Ping</h5>
        <p className='text-base '>CEO, ABC</p>

    </div>
</div></SwiperSlide>
<SwiperSlide className='custom-width shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
    <div className='text-amber-500 flex gap-2'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
    {/* text  */}
    <div className='mt-7 '> 
        <p className='text-base '>CEO, ABC</p>
        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio quod, velit quo libero eligendi facere neque delectus voluptatem molestiae soluta quis, perspiciatis similique illo sed veritatis non dicta! Quam?</p>
        <Avatar img={proPic} rounded bordered 
        className='w-10 mb-4'/> 

         <h5 className='text-lg font-medium '>Mark Ping</h5>
        <p className='text-base '>CEO, ABC</p>

    </div>
</div></SwiperSlide>
<SwiperSlide className='custom-width shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
    <div className='text-amber-500 flex gap-2'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
    {/* text  */}
    <div className='mt-7 '> 
        <p className='text-base '>CEO, ABC</p>
        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio quod, velit quo libero eligendi facere neque delectus voluptatem molestiae soluta quis, perspiciatis similique illo sed veritatis non dicta! Quam?</p>
        <Avatar img={proPic} rounded bordered 
        className='w-10 mb-4'/> 

         <h5 className='text-lg font-medium '>Mark Ping</h5>
        <p className='text-base '>CEO, ABC</p>

    </div>
</div></SwiperSlide>
<SwiperSlide className='custom-width shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
    <div className='text-amber-500 flex gap-2'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
    {/* text  */}
    <div className='mt-7 '> 
        <p className='text-base '>CEO, ABC</p>
        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio quod, velit quo libero eligendi facere neque delectus voluptatem molestiae soluta quis, perspiciatis similique illo sed veritatis non dicta! Quam?</p>
        <Avatar img={proPic} rounded bordered 
        className='w-10 mb-4'/> 

         <h5 className='text-lg font-medium '>Mark Ping</h5>
        <p className='text-base '>CEO, ABC</p>

    </div>
</div></SwiperSlide>
<SwiperSlide className='custom-width shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
    <div className='text-amber-500 flex gap-2'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
    {/* text  */}
    <div className='mt-7 '> 
        <p className='text-base '>CEO, ABC</p>
        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio quod, velit quo libero eligendi facere neque delectus voluptatem molestiae soluta quis, perspiciatis similique illo sed veritatis non dicta! Quam?</p>
        <Avatar img={proPic} rounded bordered 
        className='w-10 mb-4'/> 

         <h5 className='text-lg font-medium '>Mark Ping</h5>
        <p className='text-base '>CEO, ABC</p>

    </div>
</div></SwiperSlide>
      </Swiper>
            </div>
        </div>
    )
}

export default Review