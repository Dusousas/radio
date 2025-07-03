'use client';
import React from 'react';
import ButtonMain from './subc/ButtonMain';


export default function Main() {
    return (
        <section className='relative bgMain'>
            <div className="absolute inset-0 bg-black/60 z-0" />

            <img className='absolute bottom-0 w-[80%]' src="/RED-BG.png" alt="" />
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
        </section>
    );
}