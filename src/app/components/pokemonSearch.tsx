
'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';

// custom components
import SearchResult from './searchResultObject';

// data
import { PokemonSearchTerms } from '../data/pokemonSearchTerms';



export const PokemonSearch: FunctionComponent<any> = ({ data, onPokemonSelected }) => {

    const [ searchResults, setSearchResults ] = useState<any>();
    const [ searchTerm, setSearchTerm ] = useState<string>('');


    useEffect(() => {
        if (searchTerm != '') {
            filterPokemonBySearchTerm();
        }
    }, [ searchTerm ]);


    let searchInput: any;
    let timeout: any;


    // throttle search input

    const handleSearchInputChange = (e: any) => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            setSearchTerm(e.target.value || '');
        }, 500);
    }

    const filterPokemonBySearchTerm = () => {
        setSearchResults(PokemonSearchTerms.filter(x => x.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    const resetSearch = () => {
        setSearchResults([]);
        setSearchTerm('');

        if (searchInput) {
            searchInput.value = '';
        }
    }

    const onPokemonSelectedHandler = (id: number) => {
        onPokemonSelected(id);
        resetSearch();
    }



    return (
        <div className="w-full flex">
            <div className={"z-30 w-full mx-auto"}>
                {/* search input */}
                <div className={`bg-transparent py-4`}>
                    <div className={`bg-slate-200 rounded-full h-10 py-2 px-10`}>
                        <input id="pokemonSearchInput"
                            className="h-full w-full bg-slate-200 text-slate-900 !outline-none"
                            type="text"
                            placeholder="Search for a Pokemon..."
                            onChange={handleSearchInputChange}
                            ref={ref => searchInput = ref}
                        >
                        </input>
                    </div >
                </div >

                {/* search results */}
                {(searchResults && searchResults.length > 0) && (
                    <div className="max-h-60 w-96 absolute pr-3 py-3 bg-slate-200 shadow-2xl shadow-black/50 rounded-xl">
                        <div className="max-h-52 w-full bg-slate-200 p-2 overflow-auto ">
                            <div className=" bg-slate-200 rounded-xl pl-2 overflow-y-auto space-y-2 hiden">
                                {
                                    searchResults.map((x: any) => {
                                        return <SearchResult
                                            key={x.id}
                                            pokemonData={x}
                                            onPokemonSelected={(id: number) => { onPokemonSelectedHandler(id); }}
                                        >
                                        </SearchResult>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}


export default PokemonSearch;