import React from 'react';
import Navbar from './subc/Nabbar';



export default function Header() {
    return (
        <>
            <header className='py-6'>
                <div className='maxW flex justify-between items-center'>
                    <a className='text-2xl font-medium uppercase' href="">Sua<span className='font-extrabold text-RedP'>Logo</span></a>
                    <Navbar />
                </div>
            </header>
        </>
    );
}