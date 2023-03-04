'use client';
import React, { FunctionComponent } from 'react';

// custom components
import MoveBubble from './moveBubble';



export const PokemonDetailsTabBattle: FunctionComponent<any> = ({ pokemonDetails }) => {
    return (
        <div className="w-full h-full flex">
            <div className="bg-white rounded-xl text-slate-700 p-4 w-full h-96 m-auto">
                <div className="p-2 h-full w-full overflow-y-auto flex flex-wrap gap-4">
                    {pokemonDetails.moves.map((x: any) => {
                        return <MoveBubble key={x} className="" moveName={x}>
                        </MoveBubble>
                    })}
                </div>
            </div>
        </div>
    )
}

export default PokemonDetailsTabBattle;
