'use client';
import React from 'react';
import Image from 'next/image'

// custom components
import TypeBubble from './typeBubble';

// other
import HelperFunctions from '../helperFunctions';
import TypeFunctions from '../data/pokemonTypes';



export default function PokemonCard({ id, name, imageUrl, types, onClickFunction }: any) {

    // get colours based on type(s)
    const backgroundColour = TypeFunctions.getTypeBackgroundColour(types[ 0 ].name);
    const textColour = TypeFunctions.getTypeTextColour(types[ 0 ].name);

    const type1Name: string = types[ 0 ].name;
    const type2Name: string = types.length > 1 ? types[ 1 ].name : '';


    return (
        <div className={`p-2 h-28 z-50 drop-shadow-xl flex justify-items-center rounded-lg first:mt-0 last:mb-0 mt-4 mb-4 overflow-hidden ${backgroundColour} cursor-pointer capitalize `}
            onClick={() => { onClickFunction(id) }}>
            <div className="bg-white h-fit rounded-full p-6 -left-8 -top-4 absolute">
                <Image
                    className="object-scale-down"
                    src={imageUrl}
                    width="100"
                    alt="pokemon card"
                    height="100"
                />
            </div>
            <div className={`h-full pl-32 text-xl  ${textColour}`}>
                <div className="row h-1/3">
                    {name}
                </div>
                <div className="row h-1/3">
                    # {HelperFunctions.getFormattedIdNumber(id)}
                </div>
                <div className="row h-1/3 columns-2">
                    <div className="h-full">
                        <TypeBubble typeName={type1Name}
                            small={true}>

                        </TypeBubble>
                    </div>
                    <div className="h-full">
                        {types.length > 1 &&
                            <TypeBubble typeName={type2Name}
                                small={true}>
                            </TypeBubble>
                        }
                    </div>
                </div>
            </div>
            {/* <img src="./images/logo.png" className="w-[50px] h-[50px] animate-bounce" alt="" /> */}
        </div >
    )
}
