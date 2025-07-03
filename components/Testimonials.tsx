'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem quod odit ad ratione sequi doloribus est tempore praesentium eligendi!',
    name: 'Eduardo Sousa',
    role: 'Desenvolvedor'
  },
  {
    quote: 'Programação de qualidade e com locutores incríveis. Parabéns!',
    name: 'Ana Paula',
    role: 'Ouvinte'
  },
  {
    quote: 'A melhor rádio da cidade. Sempre atualizada com as melhores músicas.',
    name: 'Carlos Mendes',
    role: 'Publicitário'
  }
];



export default function Testimonials() {
  return (
    <section className="relative bgDepo py-20">
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 maxW text-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="px-4">
                <FaQuoteLeft className="text-center mx-auto text-RedP text-4xl" />
                <p className="text-center w-[80%] lg:w-[60%] mx-auto mt-8">{item.quote}</p>
                <h1 className="text-RedP font-bold text-xl uppercase text-center mt-6">{item.name}</h1>
                <p className="text-center mt-2 uppercase text-sm">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
