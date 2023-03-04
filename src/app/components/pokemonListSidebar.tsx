'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';

// custom component
import PokemonCard from './pokemonCard';
import PokemonSearch from './pokemonSearch';

// data
import { PokemonOverview, PokemonDetails } from '../data/dataTypes';



export const PokemonListSidebar: FunctionComponent<any> = ({ data, onPokemonSelected, onScrolledToBottom }) => {

    const [ isLoading, setIsLoading ] = useState<Boolean>(false);
    const [ pokemonList, setPokemonList ] = useState<PokemonOverview[]>();
    const [ selectedPokemonId, setSelectedPokemonId ] = useState<Number>(1);
    const [ selectedPokemonDetails, setSelectedPokemonDeetails ] = useState<PokemonDetails>();

    useEffect(() => {
        setPokemonList(data);
    }, [ data ]);


    // functions

    const pokemonSelected = (id: number) => {
        onPokemonSelected(id);
    }

    // detect reaching the bottom and load more data
    const handleScroll = (e: any) => {
        const atBottom = (e.target.scrollHeight - e.target.scrollTop) == e.target.clientHeight;

        if (atBottom) {
            onScrolledToBottom();
        }
    }

    return (
        <div className="w-1/3 h-full flex flex-col bg-gray-900 z-20 p-8 rounded-l-xl shadow-2xl">
            <PokemonSearch
                data={pokemonList}
                onPokemonSelected={pokemonSelected}
            >
            </PokemonSearch>
            <div className="w-full grow overflow-auto scrollbar-hide rounded-xl"
                onScroll={handleScroll}>
                <ul >
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
        </div>
    )
}

export default PokemonListSidebar;
