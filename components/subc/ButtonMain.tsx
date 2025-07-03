import React from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function ButtonMain() {
    return (
        <>
   {/* Ícone com radar e texto ao lado */}
                    <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                            {/* Onda 1 - loop infinito suave */}
                            <motion.span
                                className="absolute w-16 h-16 rounded-full bg-RedP/80"
                                style={{ zIndex: 0 }}
                                animate={{ 
                                    scale: [0.8, 2.5], 
                                    opacity: [0, 0.3, 0] 
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    ease: "linear"
                                }}
                            />
                            {/* Onda 2 com delay - loop infinito suave */}
                            <motion.span
                                className="absolute w-16 h-16 rounded-full bg-red-500/40"
                                style={{ zIndex: 0 }}
                                animate={{ 
                                    scale: [0.8, 2.5], 
                                    opacity: [0, 0.3, 0] 
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    ease: "linear",
                                    delay: 1 
                                }}
                            />
                            {/* Onda 3 para mais fluidez - loop infinito suave */}
                            <motion.span
                                className="absolute w-16 h-16 rounded-full bg-red-500/25"
                                style={{ zIndex: 0 }}
                                animate={{ 
                                    scale: [0.8, 2.8], 
                                    opacity: [0, 0.2, 0] 
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    ease: "linear",
                                    delay: 2 
                                }}
                            />
                            {/* Ícone central fixo */}
                            <div className="relative z-10 bg-RedP rounded-full flex items-center justify-center shadow-lg">
                                <FaCirclePlay className='text-6xl text-white' />
                            </div>
                        </div>
                        <p className='text-white uppercase text-sm font-medium tracking-wide'>Ouça agora</p>
                    </div>
        </>
    );
}