'use client';
import React, {FunctionComponent, useState, useEffect} from 'react';
import PokemonCard from './pokemonCard';
import DataLoader from '../data/dataLoader';
import PokemonData from '../data/pokemonData';

// data types
import {PokemonOverview, PokemonDetails} from '../data/dataTypes';

export const PokemonListSidebar: FunctionComponent<any> = ({data, onPokemonSelected}) => {

    const [ isLoading, setIsLoading ] = useState<Boolean>(false);
    const [ pokemonList, setPokemonList ] = useState<PokemonOverview[]>();
    const [ selectedPokemonId, setSelectedPokemonId ] = useState<Number>(1);
    const [ selectedPokemonDetails, setSelectedPokemonDeetails ] = useState<PokemonDetails>();

    useEffect(() => {
        setPokemonList(data);
    }, [ data ]);

    const pokemonSelected = (id: number) => {
        onPokemonSelected(id);
    }

    return (
        <div className="w-1/3 h-full bg-gray-900 z-20 p-8 rounded-l-xl shadow-2xl shadow-black/50">
            <div className="w-full h-full overflow-auto scrollbar-hide">
                <ul>
                    {(pokemonList && pokemonList.length) && (
                        pokemonList.map(x => {
                            return <PokemonCard
                                id={x.id}
                                key={x.id}
                                name={x.name}
                                imageUrl={x.imageUrl}
                                types={x.types}
                                onClickFunction={pokemonSelected}
                            >
                            </PokemonCard>
                        })
                    )}
                </ul>
            </div>
        </div >
    )
}

export default PokemonListSidebar;
