'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';
import Image from 'next/image'

// custom components
import TypeBubble from './typeBubble';

// other
import HelperFunctions from '../helperFunctions';



export const PokemonDetailsTab1: FunctionComponent<any> = ({ pokemonDetails }) => {

    const [ selectedTabIndex, setSelectedTabindex ] = useState<number>(1);

    // type bubble colours
    const type1Name: string = pokemonDetails?.types[ 0 ].name || '';
    const type2Name: string = (pokemonDetails && pokemonDetails?.types.length > 1) ? pokemonDetails?.types[ 1 ].name : '';
    return (
        <div className="w-full h-full py-4">
            <div className="flex">
                <div className="pl-4 pb-2 ml-auto">
                    {/*height according to pokemondb are give height / 10 in m*/}
                    {/* weights according to pokemondb are given weight / 10 in kg*/}
                    <span className="text-sm pr-5">Height: {pokemonDetails.height / 10} m</span>
                    <span className="text-sm">Weight: {pokemonDetails.weight / 10} kg</span>
                </div>
            </div>

            <div className="">
                <div className="pl-4 pb-2">
                    <span className="text-sm">Description: </span><br></br>
                </div>
                <div className="">
                    <span className="text-m">{pokemonDetails.description}</span>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetailsTab1;
