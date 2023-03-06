'use client';
import React, { useState, useEffect } from 'react';

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



let firstLoad: Boolean = true;

export default function Home() {

  const [ isLoading, setIsLoading ] = useState<Boolean>(false);
  const [ pokemonDataList, setPokemonDataList ] = useState<PokemonDetails[]>();
  const [ filteredPokemonIds, setFilteredPokemonIds ] = useState<PokemonDetails[]>();
  const [ selectedPokemonId, setSelectedPokemonId ] = useState<number>(0);
  const [ selectedPokemonData, setSelectedPokemonData ] = useState<PokemonDetails>();
  const [ dataPageNum, setDataPageNum ] = useState<number>(0);

  // variables

  const pokemonPerPage = 50;
  const maxPokemonId = 151;

  // use effects

  // load initial data
  useEffect(() => {
    if (firstLoad) {
      firstLoad = false;
      
      setSelectedPokemonId(0);
      const listOfIdsToLoad = getListOfIdsToLoadThisPage();
      DataLoader.loadSetOfPokemonData(listOfIdsToLoad, (data: any) => {
        setDataPageNum(1);
        buildPokemonList(data);
      });
    }
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

  const getListOfIdsToLoadThisPage = () => {
    const idsToLoad = [];
    const allLoadedPokemonIds = pokemonDataList?.map(x => x.id) || [];
    let startId = firstLoad ? 1 : (pokemonPerPage * dataPageNum) + 1;
    let lastId = firstLoad ? pokemonPerPage : (pokemonPerPage * dataPageNum) + pokemonPerPage;

    // check were within the range of pokmon ids
    if (startId > maxPokemonId) {
      return [];
    }

    lastId = lastId > maxPokemonId ? maxPokemonId : lastId;

    for (let i = startId; i < lastId + 1; i++) {
      if (!allLoadedPokemonIds.includes(i)) {
        idsToLoad.push(i);
      }
    }

    return idsToLoad;
  }

  const buildPokemonList = (data: any) => {
    setPokemonDataList(data);
    setSelectedPokemonId(1);

    // hide loader
    setIsLoading(false);
  }

  // this will set the filteredPokemonIds to all ids in the search results and fetch data for ones we dont already have
  const onFilterSearchResults = (searchResults: any) => {
    if (searchResults && searchResults.length) {
      // list of IDs in results
      const searchResultIds = searchResults.map((x: any) => x.id);
      const allLoadedPokemonIds = pokemonDataList?.map(x => x.id) || [];

      // ids we dont have data for
      const idsToFetchDataFor = searchResultIds.filter((x: number) => !allLoadedPokemonIds.includes(x));

      for (const i of idsToFetchDataFor) {
        fetchSinglePokemonsData(i);
      }

      setFilteredPokemonIds(searchResultIds);
    }
  }

  const onClearSearchResults = () => {
    setFilteredPokemonIds([]);
  }


  // get data functions

  // fetch data for a pokemon that hasnt been loaded yet
  const fetchSinglePokemonsData = (id: number) => {
    if (id > 151) {
      return;
    }
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
    // check if we need more data or we have the full set
    if (pokemonDataList && pokemonDataList.length < 151) {
      // show loader
      setIsLoading(true);
      const listOfIdsToLoad = getListOfIdsToLoadThisPage();

      DataLoader.loadSetOfPokemonData(listOfIdsToLoad, (data: PokemonDetails[]) => {

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

          if (pokemonDataList.length + 1 < maxPokemonId) {
            setDataPageNum(dataPageNum + 1);
          }
        }

        // hide loader
        setIsLoading(false);
      }
      );
    }
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
            onFilterResultsClicked={onFilterSearchResults}
            filteredPokemonIds={filteredPokemonIds}
            showResetButton={(filteredPokemonIds && filteredPokemonIds.length) ? true : false}
            clearSearchResults={onClearSearchResults}
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
