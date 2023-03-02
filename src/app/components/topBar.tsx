'use client';
import React from 'react';
import Image from 'next/image'
import logoImage from '../images/logo.png';

export default function TopBar() {
    return (
        <header className = "p-2 w-full h-24 2xl:h-32 4xl:h-40 bg-sky-600 z-50 drop-shadow-xl shadow-lg shadow-sky-700/70 flex justify-center absolute" >
            <Image
                className="object-scale-down"
                src={logoImage}
                width={2000}
                height={727}
                alt="pokemon logo"
            />
        </header >
    )
}
