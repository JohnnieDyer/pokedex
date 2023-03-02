'use client';
import React from 'react';
import Image from 'next/image'
import logoImage from '../images/4.png';
import TypeFunctions from '../data/pokemonTypes';
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

export default function PokemonCard({ idx, name, id, imageUrl, types }: any) {

    // get colours based on type(s)
    const backgroundColour = TypeFunctions.getTypeBackgroundColour(types[0].name);
    const textColour = TypeFunctions.getTypeTextColour(types[0].name);

    const type1Name: string = types[0].name;
    const type2Name: string = types.length > 1 ? types[1].name : '';

    return (
        <div className={`p-2 h-28 z-50 drop-shadow-xl flex justify-items-center rounded-lg first:mt-0 last:mb-0 mt-4 mb-4 overflow-hidden ${backgroundColour}`}>
            <div className="bg-white h-fit rounded-full p-6 -left-8 -top-4 absolute">
                <Image
                    className="object-scale-down"
                    src={imageUrl}
                    width="100"
                    alt="pokemon card"
                    height="100"
                />
            </div>
            <div className={`h-full pl-32 text-xl ${textColour}`}>
                <div className="row">
                    {name}
                </div>
                <div className="row">
                    #004
                </div>
                <div className="columns-2">
                    <div>
                        <TypeBubble typeName={type1Name}></TypeBubble>
                    </div>
                    <div>
                        {types.length > 1 &&
                            <TypeBubble typeName={type2Name}></TypeBubble>
                        }
                    </div>
                </div>
            </div>
            {/* <img src="./images/logo.png" className="w-[50px] h-[50px] animate-bounce" alt="" /> */}
        </div >
    )
}
