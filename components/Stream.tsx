import React from 'react';

export default function Stream() {
    return (
        <section className='py-20'>
            <div className='maxW flex flex-col lg:flex-row items-center justify-center gap-10'>
                {/* Texto */}
                <article className='lg:w-1/2'>
                    <p className='text-RedP font-semibold uppercase text-center lg:text-left'>Ao vivo</p>
                    <h1 className='text-4xl uppercase font-bold mt-4 text-center lg:text-left'>Ouça nossa rádio ao vivo</h1>
                    <p className='text-[#B0B0B0] mt-6 text-center lg:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias voluptates soluta fugiat ducimus magnam veritatis qui saepe dolorem natus, iusto ad repellat dolorum ullam beatae eaque facere officia! Molestiae.
                    </p>
                    <p className='text-[#B0B0B0] mt-2 text-center lg:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias voluptates soluta fugiat ducimus magnam veritatis qui saepe dolorem natus, iusto ad repellat dolorum ullam beatae eaque facere officia! Molestiae.
                    </p>
                </article>

                <article className='lg:w-1/2 flex justify-center relative'>
                    <img className='absolute w-[400px] lg:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' src="/megacircle.png" alt="Círculo vermelho"/>
                    {/* Celular por cima com efeito de vibração */}
                    <img className='relative w-[200px] lg:w-[350px] z-10 phone-vibration' src="/stream-cel.png" alt="Celular com rádio"/>
                </article>
            </div>
            
            <style jsx>{`
                @keyframes phoneVibration {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    10% { transform: translate(-1px, -1px) rotate(-0.5deg); }
                    20% { transform: translate(1px, -1px) rotate(0.5deg); }
                    30% { transform: translate(-1px, 1px) rotate(-0.5deg); }
                    40% { transform: translate(1px, 1px) rotate(0.5deg); }
                    50% { transform: translate(-1px, -1px) rotate(-0.5deg); }
                    60% { transform: translate(1px, -1px) rotate(0.5deg); }
                    70% { transform: translate(-1px, 1px) rotate(-0.5deg); }
                    80% { transform: translate(1px, 1px) rotate(0.5deg); }
                    90% { transform: translate(-1px, -1px) rotate(-0.5deg); }
                }
                
                .phone-vibration {
                    animation: phoneVibration 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}