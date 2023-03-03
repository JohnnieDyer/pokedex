'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';

// custom components
import TopBar from './components/topBar';
import PokemonListSidebar from './components/pokemonListSidebar';
import PokemonDetailsPanel from './components/pokemonDetailsPanel';

// data
import PokemonData from './data/pokemonData';
import DataLoader from './data/dataLoader';
import { PokemonOverview, PokemonDetails } from './data/dataTypes';



export default function Home() {

  const [ isLoading, setIsLoading ] = useState<Boolean>(true);
  const [ pokemonDataList, setPokemonDataList ] = useState<PokemonDetails[]>();
  const [ selectedPokemonId, setSelectedPokemonId ] = useState<number>();
  const [ selectedPokemonData, setSelectedPokemonData ] = useState<PokemonDetails>();

  // use effects

  // load initial data
  useEffect(() => {
    DataLoader.loadSetOfPokemonData(pokemonDataList?.length || 1, buildPokemonList);
  }, []);

  // pokemon data is loaded but an extra set of data can be loaded per pokemon, these arent loaded until a pokemon is clicked at which point this data will be fetched and stored
  useEffect(() => {
    // get the data object for this id from the pokemon data list
    const thisPokemon = pokemonDataList?.find(x => x.id == selectedPokemonId);

    if (thisPokemon) {
      setSelectedPokemonData(thisPokemon);
    }
  }, [ selectedPokemonId ]);

  // when selected pokemon data is changed check if we have all the data including extra
  useEffect(() => {
    if (selectedPokemonId && !selectedPokemonData?.extraDataFetched) {
      fetchExtraDataForSelectedPokemon(selectedPokemonId);
    }
  }, [ selectedPokemonData ]);

  const buildPokemonList = (data: any) => {
    setPokemonDataList(data);
    setIsLoading(false);
    setSelectedPokemonId(1);
  }

  // load extra data for each pokemon - eg description
  const fetchExtraDataForSelectedPokemon = (id: number) => {
    DataLoader.loadExtraDataForSinglePokemon(id, (data: any) => {
      if (data && selectedPokemonData) {
        console.log(pokemonDataList)
        // current pokemonDataList backup, add new data into the specific pokemon, then set pokemonDataLIst
        const currentPokemonDataList = JSON.parse(JSON.stringify(pokemonDataList));
        // find the object for the selected pokemon
        const thisPokemonsData = currentPokemonDataList.find((x: any) => x.id == selectedPokemonId);

        if (thisPokemonsData) {
          /// set the extra bits of data on this pokemon
          thisPokemonsData.description = data.flavor_text_entries[ 0 ].flavor_text || '';
          thisPokemonsData.extraDataFetched = true;

          setPokemonDataList(currentPokemonDataList);
        }
      }
    });
  }

  return (
    <main className="bg-gray-800 h-full w-full overflow-hidden">
      <TopBar></TopBar>
      <PokemonData></PokemonData>
      <div className="w-screen h-screen bg-slate-800 p-20 flex justify-center pt-44 2xl:pt-52 4xl:pt-64">

        {/* inside page */}
        <div className="flex w-full 3xl:w-3/4 4xl:w-1/2h-full 3xl:max-w-[1400px]">

          <PokemonListSidebar data={pokemonDataList}
            onPokemonSelected={(id: number) => { setSelectedPokemonId(id); }}>
          </PokemonListSidebar>

          <div className="w-3/4 h-full bg-sky-700 z-10 p-4 rounded-r-xl shadow-2xl shadow-black/50">
            <PokemonDetailsPanel pokemonDetails={selectedPokemonData}></PokemonDetailsPanel>
          </div>
        </div>
      </div>
    </main >
  )
}
