'use client';
import React from 'react';
import TypeFunctions from '../data/pokemonTypes'
import Image from 'next/image'

import ArrowIcon from '../images/icons/down-arrow.png';

export default function ArrowBubble({ onClickFunction, rotation, direction }: any) {


    return (
        <div className={`p-4 h-20 w-20 bg-slate-300 rounded-full ring-4 ring-blue-300 shadow-2xl m-auto ${rotation ? rotation : ''}`}>
            <Image
                className=" bg-transparent m-auto"
                src={ArrowIcon}
                width="200"
                alt="pokemon card"
                height="200"
                onClick={() => { onClickFunction(direction) }}
            />
        </div>
    )
}
