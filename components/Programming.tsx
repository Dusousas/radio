import React from 'react';
import Newsletter from './Newsletter';

export default function Programming() {
    return (
        <>
            <section className='py-40 bg-black relative '>
                <img className='absolute bottom-0 w-[80%]' src="/RED-BG.png" alt="" />
                <div className='maxW '>
                    <article className='flex flex-col gap-y-20 gap-10 lg:flex-row'>
                        {/* CONTAINER SINGLE 1 */}
                        <div className='relative lg:mt-20 lg:w-[30%]'>
                            <img className='rounded-xl h-[340px] object-cover relative' src="/service1.jpg" alt="" />
                            <div className='bg-white w-[80%] bottom-[-40px] right-[10px] rounded-xl py-6 px-6 absolute'>
                                <h1 className='font-bold uppercase tracking-wide text-lg'>Programa matinal</h1>
                                <p className='text-[#b0b0b0] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* CONTAINER SINGLE 2 */}
                        <div className='relative lg:w-[30%]'>
                            <img className='rounded-xl h-[340px] object-cover relative' src="/service1.jpg" alt="" />
                            <div className='bg-white w-[80%] bottom-[40px] right-[10px] rounded-xl py-6 px-6 absolute'>
                                <h1 className='font-bold uppercase tracking-wide text-lg'>Programa matinal</h1>
                                <p className='text-[#b0b0b0] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* CONTAINER SINGLE 3 */}
                        <div className='relative lg:mt-20 lg:w-[30%]'>
                            <img className='rounded-xl h-[340px] object-cover relative' src="/service1.jpg" alt="" />
                            <div className='bg-white w-[80%] bottom-[-40px] right-[10px] rounded-xl py-6 px-6 absolute'>
                                <h1 className='font-bold uppercase tracking-wide text-lg'>Programa matinal</h1>
                                <p className='text-[#b0b0b0] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </article>

                    <article className='flex flex-col items-center gap-y-20 gap-10 mt-20 lg:flex-row'>
                        {/* CONTAINER SINGLE 4 */}
                        <div className='relative lg:w-[30%]'>
                            <img className='rounded-xl h-[340px] object-cover relative' src="/service1.jpg" alt="" />
                            <div className='bg-white w-[80%] bottom-[-40px] right-[10px] rounded-xl py-6 px-6 absolute'>
                                <h1 className='font-bold uppercase tracking-wide text-lg'>Programa matinal</h1>

                                <p className='text-[#b0b0b0] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* CONTAINER SINGLE 5 */}
                        <div className='bgService relative h-[500px] rounded-xl lg:w-[30%]'>
                            <div className="absolute inset-0 bg-RedP/80 rounded-xl z-0" />
                            <div className='relative z-10 flex flex-col items-center justify-center h-full px-8'>
                                <h1 className='font-bold uppercase text-white tracking-wide text-lg'>Explore nossa programação</h1>
                                <p className='text-white text-center mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, obcaecati!</p>

                            </div>
                        </div>

                        {/* CONTAINER SINGLE 6 */}
                        <div className='relative lg:w-[30%] '>
                            <img className='rounded-xl h-[340px] object-cover relative' src="/service1.jpg" alt="" />
                            <div className='bg-white w-[80%] bottom-[-40px] right-[10px] rounded-xl py-6 px-6 absolute'>
                                <h1 className='font-bold uppercase tracking-wide text-lg'>Programa matinal</h1>
                                <p className='text-[#b0b0b0] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </article>
                </div >
            </section >

        </>
    );
}