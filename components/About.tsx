import React from 'react';
import CardsAbout from './subc/CardsAbout';

export default function About() {
    return (
        <>
            <section id='about' className='py-20'>
                <div className='maxW flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20'>
                    <article className="relative w-full lg:w-[600px] lg:h-[400px]">
                        {/* IMAGEM BASE */}
                        <img src="about-1.jpg" alt="" className="absolute object-cover rounded-xl top-0 left-0 lg:w-[600px] lg:h-[400px]"/>
                        {/* IMAGEM QUE FICA NO CANTO SUPERIOR DIREITO DA BASE */}
                        <img src="about-2.jpg" alt="" className="hidden w-[300px] h-[280px] object-cover rounded-tr-xl top-0 right-0 border-l-[12px] border-b-[12px] border-white lg:block absolute "/>
                        {/* CONTAINER QUE FICA NO CANTO INFERIOR DIREITO DA BASE */}
                        <div className="absolute w-[200px] h-[120px] bg-black border-white rounded-br-xl flex flex-col items-center justify-center lg:bottom-0 lg:right-0 lg:border-l-[12px]">
                            <h1 className="text-white text-4xl font-black flex gap-1">
                                20 <span className="text-xl text-RedP">+</span>
                            </h1>
                            <p className="text-white text-sm mt-2">Anos de experiência</p>
                        </div>
                    </article>


                    <article className='lg:w-1/2'>
                        <p className='text-RedP font-semibold uppercase text-center lg:text-left'>Sobre nós</p>
                        <h1 className='text-4xl uppercase font-bold mt-4 text-center lg:text-left'>Informação de qualidade, sempre ao seu lado</h1>
                        <p className='text-[#B0B0B0] mt-6 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias voluptates soluta fugiat ducimus magnam veritatis qui saepe dolorem natus, iusto ad repellat dolorum ullam beatae eaque facere officia! Molestiae.</p>
                        <p className='text-[#B0B0B0] mt-2 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias voluptates soluta fugiat ducimus magnam veritatis qui saepe dolorem natus, iusto ad repellat dolorum ullam beatae eaque facere officia! Molestiae.</p>
                        <div className='flex mt-6 justify-center lg:justify-start'>
                            <a href='' className='bg-RedP text-white px-8 py-4 rounded-lg uppercase text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'>Entrar em contato</a>
                        </div>
                    </article>
                </div>
                <CardsAbout />
            </section>
        </>
    );
}

