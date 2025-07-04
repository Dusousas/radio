'use client';
import React from 'react';
import ButtonMain from './subc/ButtonMain';
import { FaFacebook, FaInstagram, FaInstagramSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';


export default function Main() {
    return (
        <section id='home' className='relative bgMain'>
            <div className="absolute inset-0 bg-black/60 z-0" />

            <img className='absolute bottom-0 w-[80%] z-10' src="/RED-BG.png" alt="" />
            <div className="relative z-10 flex flex-col items-center justify-center h-screen max-w-6xl mx-auto px-4">
                <h1 className='text-white uppercase text-4xl font-bold text-center lg:text-6xl'>A rádio que é sucesso</h1>
                <p className='text-white text-center text-sm w-full max-w-2xl mt-6 lg:text-lg opacity-90'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo neque, unde corrupti sit ducimus illo vitae distinctio fugit nostrum possimus ab rerum minus delectus cupiditate sapiente animi, fuga eum.
                </p>
                <div className='mt-8 flex flex-col-reverse items-center gap-10 lg:flex-row'>
                    <a href='' className='bg-RedP text-white px-8 py-4 rounded-lg uppercase text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'>Entrar em contato</a>
                    <ButtonMain />
                </div>



            </div>
                    <article className='absolute top-4 flex flex-col gap-4 right-4'>
                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 group'>
                            <FaInstagram className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>

                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 group'>
                            <FaFacebook className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>

                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/25 group'>
                            <FaWhatsapp className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>
                    </article>
        </section>
    );
}