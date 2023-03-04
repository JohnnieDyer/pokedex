'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';

// data types
import { PokemonDetails } from "./data/dataTypes";

// custom components
import TopBar from './components/topBar';
import PokemonListSidebar from './components/pokemonListSidebar';
import PokemonDetailsPanel from './components/pokemonDetailsPanel';

// data
import Loader from './data/loader';
import DataLoader from './data/dataLoader';
import HelperFunctions from './helperFunctions';



export default function Home() {

  const [ isLoading, setIsLoading ] = useState<Boolean>(true);
  const [ pokemonDataList, setPokemonDataList ] = useState<PokemonDetails[]>();
  const [ selectedPokemonId, setSelectedPokemonId ] = useState<number>(0);
  const [ selectedPokemonData, setSelectedPokemonData ] = useState<PokemonDetails>();

  // use effects

  // load initial data
  useEffect(() => {
    setSelectedPokemonId(0);
    DataLoader.loadSetOfPokemonData(pokemonDataList?.length || 1, buildPokemonList);
  }, []);  

  // pokemon data is loaded but an extra set of data can be loaded per pokemon, these arent loaded until a pokemon is clicked at which point this data will be fetched and stored
  useEffect(() => {
    if (selectedPokemonId == 0) {
      return;
    }
    // get the data object for this id from the pokemon data list
    const thisPokemon = pokemonDataList?.find(x => x.id == selectedPokemonId);
    // if we have this pokemons data then show otherwise fetch and add to data list
    if (thisPokemon) {
      setSelectedPokemonData(thisPokemon);
    }
    else {
      if (selectedPokemonId) {
        fetchSinglePokemonsData(selectedPokemonId);
      }
    }
  }, [ selectedPokemonId ]);


  // variables


  // general functions

  const buildPokemonList = (data: any) => {
    setPokemonDataList(data);
    setSelectedPokemonId(1);

    // hide loader
    setIsLoading(false);
  }


  // data functions

  // fetch data for a pokemon that hasnt been loaded yet
  const fetchSinglePokemonsData = (id: number) => {
    setSelectedPokemonId(0);

    // show loader
    setIsLoading(true);

    // fetch
    DataLoader.loadAllDataForSinglePokemon(id, (data: any) => {

      if (data && pokemonDataList) {

        // make sure we dont already have this pokemon in the data set        
        const thisPokemonsData = pokemonDataList.find((x: any) => x.id == id);
        // if not add it
        if (!thisPokemonsData) {
          // current pokemonDataList backup, add the new pokemons data, sory, set new data
          let currentPokemonDataList = JSON.parse(JSON.stringify(pokemonDataList));
          currentPokemonDataList.push(data);
          currentPokemonDataList = HelperFunctions.sortPokemonDataByID(currentPokemonDataList);
          setPokemonDataList(currentPokemonDataList);
          setSelectedPokemonId(data.id);
        }
      }

      // hide loader
      setIsLoading(false);
    });
  }

  const loadMoreData = (scrollDiv: any) => {
    // show loader
    setIsLoading(true);

    DataLoader.loadSetOfPokemonData(pokemonDataList ? pokemonDataList.length + 1 : 1, (data: PokemonDetails[]) => {

      if (pokemonDataList) {
        // current pokemonDataList backup, add the new pokemons data, sory, set new data
        let currentPokemonDataList = JSON.parse(JSON.stringify(pokemonDataList));

        // merge the new data in - skippoing duplicates for any searched pokemon
        for (const i of data) {
          // make sure we dont already have this pokemon in the data set        
          const thisPokemonsData = pokemonDataList.find((x: any) => x.id == i.id);
          // if not add it
          if (!thisPokemonsData) {
            currentPokemonDataList.push(i);
          }
        }

        currentPokemonDataList = HelperFunctions.sortPokemonDataByID(currentPokemonDataList);
        setPokemonDataList(currentPokemonDataList);
      }

      // hide loader
      setIsLoading(false);
    }
    );
  }


  return (
    <main className="bg-gray-800 h-full w-full overflow-hidden">
      <TopBar></TopBar>
      <Loader loading={isLoading}></Loader>
      <div className="w-screen h-screen min-h-screen bg-slate-800 p-20 flex justify-center pt-44 2xl:pt-52 4xl:pt-64">

        {/* inside page */}
        <div className="flex w-full 3xl:w-3/4 4xl:w-1/2h-full 3xl:max-w-[1400px]">

          <PokemonListSidebar
            data={pokemonDataList}
            onPokemonSelected={(id: number) => { setSelectedPokemonId(id); }}
            onScrolledToBottom={loadMoreData}
          >
          </PokemonListSidebar>

          <div className="w-3/4 h-full bg-sky-700 z-10 p-4 rounded-r-xl shadow-2xl shadow-black/50">
            <PokemonDetailsPanel pokemonDetails={selectedPokemonData}></PokemonDetailsPanel>
          </div>
        </div>
      </div>
    </main >
  )
}
