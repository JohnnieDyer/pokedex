'use client';
import React from 'react';

// other
import TypeFunctions from '../data/pokemonTypes'
import HelperFunctions from '../helperFunctions';



export default function SearchResult({ pokemonData, onPokemonSelected }: any) {

    let backgroundColour = TypeFunctions.getTypeSolidColour(pokemonData?.types[ 0 ]);
    backgroundColour = (backgroundColour && backgroundColour != 't-col-normal-solid') ? backgroundColour : 'bg-slate-300';

    // const textColour = TypeFunctions.getTypeTextColour(typeName);
    return (
        <div className={`${backgroundColour} rounded-full flex h-14 text-black cursor-pointer`}
            onClick={() => { onPokemonSelected(pokemonData.id) }}
        >
            <div className={"w-full flex m-auto columns-2"}>
                <div className="flex w-1/3">
                    <span className={' my-auto ml-auto pr-4'}>
                        # {HelperFunctions.getFormattedIdNumber(pokemonData?.id)}
                    </span>
                </div>
                <div className="flex w-2/3">
                    <span className={' my-auto mr-auto pl-4 capitalize'}>
                        {pokemonData?.name}
                    </span>
                </div>
            </div>
        </div>
    )
}
