import React from 'react';

export default function Newsletter() {
    return (
        <>
  
                <div className='flex flex-col items-center justify-center rounded-xl bg-white shadow-lg py-8 px-4 mx-auto lg:px-10 max-w-[1100px] lg:flex-row'>
                   <article className='lg:w-1/2'>
                        <p className='text-RedP font-semibold uppercase text-center lg:text-left'>Newsletter</p>
                        <h1 className='text-2xl uppercase font-bold mt-2 text-center lg:text-left'>Subscribe our Newsletter</h1>
                        <p className='text-[#B0B0B0] mt-2 text-center lg:text-left lg:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in sequi voluptas maxime recusandae eius earum corporis officiis enim explicabo.</p>
                   </article>

                   <article className='mt-10 lg:w-1/2 lg:mt-0'>
                    <div className='flex flex-col gap-4 lg:flex-row'>
                        <input className='py-4 px-8 rounded-xl border w-full border-[#b0b0b0]/60' placeholder='Email' type="text" />
                        <button className='bg-RedP px-8 text-white rounded-xl py-4 lg:py-0'>Subscribe</button>
                    </div>
                   </article>
                </div>
      
        </>
    );
}