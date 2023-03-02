'use client';
import React, { FunctionComponent, useState } from 'react';
import PokemonCard from './pokemonCard';
import DataLoader from '../data/dataLoader';

// data types
import { PokemonDetails } from '../data/dataTypes';


let items: Number[] = [];
for (let i = 0; i < 30; i++) {
    items.push(i);
}





export const PokemonListSidebar: FunctionComponent<any> = () => {

    const [pokemonList, setPokemonList] = useState<PokemonDetails[]>();






    // CHANGE pokemonList to useeffect







    const [loading, setLoading] = useState<Boolean>(false);

    const buildPokemonList = (data: any) => {
        setPokemonList(data);
    }


    // only load on initial page load when we have no data
    if (!loading && !pokemonList?.length) {
        setLoading(true);
        DataLoader.loadSetOfPokemonData(1, 10, buildPokemonList);
    }


    return (
        <div className="w-1/3 h-full bg-gray-900 z-20 p-8 rounded-l-xl shadow-2xl shadow-black/50">
            <div className="w-full h-full overflow-auto scrollbar-hide">
                <ul>
                    {(pokemonList && pokemonList.length) && (
                        pokemonList.map(x => {
                            return <PokemonCard
                                idx={x}
                                key={x.id}
                                name={x.name}
                                imageUrl={x.imageUrl}
                                types={x.types}
                                >
                            </PokemonCard>
                        })
                    )}
                </ul>
            </div>
        </div>
    )
}

export default PokemonListSidebar;
