'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Galery() {
    return (
        <section className='pb-20'>
            <div className='maxW'>
                <p className='text-RedP font-semibold uppercase text-center lg:w-[60%] mx-auto'>Galeria</p>
                <h1 className='text-4xl uppercase font-bold mt-4 text-center lg:w-[60%] mx-auto'>Nossa galeria</h1>
                <p className='text-[#B0B0B0] mt-6 text-center lg:w-[60%] mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias voluptates soluta fugiat ducimus magnam veritatis qui saepe dolorem natus, iusto ad repellat dolorum ullam beatae eaque facere officia! Molestiae.
                </p>

                <article className='flex flex-wrap gap-6 mt-10 justify-center items-center'>
                    {[...Array(6)].map((_, i) => (
                        <img key={i} className='rounded-xl shadow lg:w-[32%] ' src="/about-2.jpg" alt="" />
                    ))}
                </article>

                <p className='text-RedP font-semibold uppercase mt-20 text-center'>Parcerias</p>
                <h1 className='text-4xl uppercase font-bold text-center'>Nossas parcerias</h1>

                {/* LOOP infinito */}
                <div className="overflow-hidden mt-10">
                    <motion.article
                        className="flex gap-10 justify-center"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            duration: 10,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                    >
                        {[...Array(3)].flatMap(() => (
                            [1, 2, 3, 4].map(i => (
                                <img key={i + Math.random()} className='w-[210px]' src="/ipsum-3.png" alt="" />
                            ))
                        ))}
                    </motion.article>
                </div>
            </div>
        </section>
    );
}
