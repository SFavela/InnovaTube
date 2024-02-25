"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const SideBar = () => {
    const [open, setOpen] = useState(false)
    return (
    <div>
        <button className='mr-4 text-white' onClick={() => setOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>
        <div className={`${open ? "w-80" : "w-0"} bg-stone-950 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
            <div className={`${!open && "hidden"} pt-3`}>
                <button className='ml-4 text-white mb-14 z-10' onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <Link href="/"><div className='text-center text-white text-xl hover:bg-neutral-700 cursor-pointer py-3 mb-2 z-10'>Inicio</div></Link>
                <Link href="/views/favoritos"><div className='text-center text-white text-xl hover:bg-neutral-700 cursor-pointer py-3 mb-2 z-10'>Favoritos</div></Link>
                <Link href="/login"><div className='text-center text-white text-xl hover:bg-neutral-700 cursor-pointer py-3 mb-2 z-10'>Acceder</div></Link>
            </div>
        </div>
    </div>
)
}

export default SideBar