'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';
import Image from 'next/image'
import pokeball from '../images/pokeball.png';

export const Loader: FunctionComponent<any> = ({loading}) => {

    return (
        <div className={`w-full h-full absolute z-50 flex bg-black/${loading ? '50 block ' : '/0 hidden '} `}>
            <Image
                className="object-scale-down bg-transparent animate-bounce m-auto"
                src={pokeball}
                width="200"
                alt="pokemon card"
                height="200"
            />
        </div>
    )
}

export default Loader;
