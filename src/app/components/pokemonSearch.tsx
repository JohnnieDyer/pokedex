
'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';

// custom components
import SearchResult from './searchResultObject';

// data
import { PokemonSearchTerms } from '../data/pokemonSearchTerms';



export const PokemonSearch: FunctionComponent<any> = ({ data, onPokemonSelected, onFilterResultsClicked }) => {

    const [ searchResults, setSearchResults ] = useState<any>();
    const [ searchTerm, setSearchTerm ] = useState<string>('');
    const [showBackdrop, setShowBackdrop] = useState<Boolean>(false);


    useEffect(() => {
        if (searchTerm != '') {
            filterPokemonBySearchTerm();
        }
        else {
            resetSearch();
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

        setShowBackdrop(false)
    }

    const onPokemonSelectedHandler = (id: number) => {
        onPokemonSelected(id);
        resetSearch();
    }

    const onFilterResultsHandler = () => {
        onFilterResultsClicked(searchResults);        
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
                    <div className="max-h-72 w-96 absolute pr-3 py-3 bg-slate-200 shadow-2xl shadow-black/50 rounded-xl border-black border-solid border-2">
                        <div className="max-h-48 w-full bg-slate-200 p-2 overflow-auto ">
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

                        {/* clicking this will only show search results in the sidebar*/}
                        <div className={"pl-2 pt-2"}>
                            <div className={`bg-transparent pl-2 flex border-t-2 border-solid w-full border-slate-900 pt-3`}>
                                <div className={`rounded-full h-10 w-48 py-2 px-10 text-center bg-sky-900 text-white m-auto cursor-pointer`}
                                    onClick={onFilterResultsHandler}
                                >
                                    Show Results
                                </div >
                            </div >
                        </div>
                    </div>
                )}
            </div>
            {(searchResults && searchResults.length > 0) && (
                <div className={"bg-slate-800/50 absolute h-full w-full z-20 top-0 left-0"}
                    onClick={resetSearch}>
                </div>
            )}
        </div >
    )
}


export default PokemonSearch;