import React from 'react';
import Navbar from './subc/Navbar';



export default function Header() {
    return (
        <>
            <header className='py-6 z-50 relative'>
                <div className='maxW flex justify-between items-center'>
                    <a className='text-2xl font-medium uppercase' href="">Sua<span className='font-extrabold text-RedP'>Logo</span></a>
                    <Navbar />
                </div>
            </header>
        </>
    );
}