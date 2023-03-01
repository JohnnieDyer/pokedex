import React from 'react';
import Image from 'next/image'
import logoImage from '../images/4.png';
import TypeFunctions from '../data/types';
import TypeBubble from './typeBubble';

let colours = [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon'
]

export default function PokemonCard({ idx }: any) {
    const backgroundColour = TypeFunctions.getTypeBackgroundColour(colours[idx % colours.length]);
    const textColour = TypeFunctions.getTypeTextColour(colours[idx % colours.length]);
    const typeName: string = colours[idx];
    const type2Name:string = colours[Math.floor(Math.random() * colours.length)]

    return (
        <div className={`p-2 h-28 z-50 drop-shadow-xl flex justify-items-center rounded-lg first:mt-0 last:mb-0 mt-4 mb-4 overflow-hidden ${backgroundColour}`}>
            <div className="bg-white h-fit rounded-full p-6 -left-8 -top-4 absolute">
                <Image
                    className="object-scale-down"
                    src={logoImage}
                    alt="pokemon card"
                    height="100"
                />
            </div>
            <div className={`h-full pl-32 text-xl ${textColour}`}>
                <div className="row">
                    Charmander
                </div>
                <div className="row">
                    #004
                </div>
                <div className="columns-2">
                    <div className="">
                        <TypeBubble typeName={typeName}></TypeBubble>
                    </div>
                    <div className="">
                        <TypeBubble typeName={type2Name}></TypeBubble>
                    </div>
                </div>
            </div>
            {/* <img src="./images/logo.png" className="w-[50px] h-[50px] animate-bounce" alt="" /> */}
        </div >
    )
}
