import React from 'react';
import { LuRadioTower } from 'react-icons/lu';

export default function CardsAbout() {
    return (
        <>
            <section className='pt-70 lg:pt-20'>
                <div className='maxW flex flex-col items-center gap-10 justify-center lg:flex-row'>
                    <div className='group border border-[#b0b0b0] rounded-xl py-10 px-8 flex-col items-center justify-center hover:bg-RedP lg:w-[30%] transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-RedP/20 hover:-translate-y-2 hover:scale-105 cursor-pointer'>
                        <LuRadioTower className='text-RedP text-4xl mx-auto group-hover:text-white transition-all duration-500 ease-in-out group-hover:scale-110' />
                        <h1 className='text-center font-bold uppercase tracking-wide text-xl mt-6 group-hover:text-white transition-all duration-500 ease-in-out'>
                            Notícias
                        </h1>
                        <p className='text-[#b0b0b0] mt-6 text-center group-hover:text-white transition-all duration-500 ease-in-out'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum natus earum itaque architecto dolorem.
                        </p>
                    </div>

                    <div className='group border border-[#b0b0b0] rounded-xl py-10 px-8 flex-col items-center justify-center hover:bg-RedP lg:w-[30%] transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-RedP/20 hover:-translate-y-2 hover:scale-105 cursor-pointer'>
                        <LuRadioTower className='text-RedP text-4xl mx-auto group-hover:text-white transition-all duration-500 ease-in-out group-hover:scale-110' />
                        <h1 className='text-center font-bold uppercase tracking-wide text-xl mt-6 group-hover:text-white transition-all duration-500 ease-in-out'>
                            Notícias
                        </h1>
                        <p className='text-[#b0b0b0] mt-6 text-center group-hover:text-white transition-all duration-500 ease-in-out'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum natus earum itaque architecto dolorem.
                        </p>
                    </div>

                    <div className='group border border-[#b0b0b0] rounded-xl py-10 px-8 flex-col items-center justify-center hover:bg-RedP lg:w-[30%] transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-RedP/20 hover:-translate-y-2 hover:scale-105 cursor-pointer'>
                        <LuRadioTower className='text-RedP text-4xl mx-auto group-hover:text-white transition-all duration-500 ease-in-out group-hover:scale-110' />
                        <h1 className='text-center font-bold uppercase tracking-wide text-xl mt-6 group-hover:text-white transition-all duration-500 ease-in-out'>
                            Notícias
                        </h1>
                        <p className='text-[#b0b0b0] mt-6 text-center group-hover:text-white transition-all duration-500 ease-in-out'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum natus earum itaque architecto dolorem.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}