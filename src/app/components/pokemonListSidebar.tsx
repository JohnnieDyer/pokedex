'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';

// custom component
import PokemonCard from './pokemonCard';
import PokemonSearch from './pokemonSearch';

// data
import { PokemonOverview } from '../data/dataTypes';



export const PokemonListSidebar: FunctionComponent<any> = ({ data, filteredPokemonIds, showResetButton, clearSearchResults, onPokemonSelected, onScrolledToBottom, onFilterResultsClicked }) => {

    const [ pokemonList, setPokemonList ] = useState<PokemonOverview[]>();

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
                onFilterResultsClicked={onFilterResultsClicked}
            >
            </PokemonSearch>
            <div className="w-full grow overflow-auto scrollbar-hide rounded-xl"
                onScroll={handleScroll}
            >
                <ul >
                    {(pokemonList && pokemonList.length) && (
                        pokemonList.map(x => {
                            if (filteredPokemonIds?.includes(x.id) || !filteredPokemonIds?.length) {
                                return <PokemonCard
                                    id={x.id}
                                    key={x.id}
                                    name={x.name}
                                    imageUrl={x.imageUrl}
                                    types={x.types}
                                    onClickFunction={pokemonSelected}
                                >
                                </PokemonCard>
                            }
                        })
                    )}
                </ul>
            </div>
            {showResetButton == true && (
                <div className={`bg-transparent pl-2 h-10 flex border-t-2 border-solid w-full border-slate-900 pt-3`}>
                    <div className={`rounded-full h-10 w-48 py-2 px-10 text-center bg-sky-900 text-white m-auto cursor-pointer`}
                        onClick={clearSearchResults}
                    >
                        Clear Search
                    </div >
                </div >
            )}
        </div >
    )
}

export default PokemonListSidebar;
