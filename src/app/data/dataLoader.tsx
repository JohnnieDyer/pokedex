'use client';
import axios from 'axios';
import { PokemonDetails } from './dataTypes';
import PokemonType from './pokemonTypes';

const baseURl = "https://pokeapi.co/api/v2";
const numOfPokemonPerSet = 50;

const DataLoader = {

    // load a set of pokemon. amount = numOfPokemonPerSet
    loadSetOfPokemonData(firstId: number, callback: Function) {
        const urls = [];

        // work out the last and last ids needed for this page of data
        const lastId = firstId + numOfPokemonPerSet > 251 ? 251 : firstId + numOfPokemonPerSet;

        // build a list of urls to fetch with each id number at the end
        for (let i: number = firstId; i < lastId; i++) {
            urls.push(`${baseURl}/pokemon/${i}`);
        }

        // fetch all urls
        const requests = urls.map(x => axios.get(x));

        // array to build pokemon objects into
        const pokemonList: any = [];

        axios.all(requests)
            .then(response => {
                for (const i of response) {
                    if (i && i.data) {
                        let data = i.data;

                        // build a pokemon details object and push to array
                        let pokemonDetails: PokemonDetails = {
                            id: data.id,
                            name: data.name,
                            types: [],
                            imageUrl: data.sprites?.other[ 'official-artwork' ][ 'front_default' ],
                            description: '',
                            abilities: [],
                            extraDataFetched: false
                        };

                        // add types
                        for (let t of data.types) {
                            pokemonDetails.types.push({ slot: t.slot, name: t.type.name });
                        }

                        // add to array
                        pokemonList.push(pokemonDetails);
                    }
                }

                if (callback) {
                    callback(pokemonList);
                }
            })
            .catch(error => {
                console.log(error)
            })

    },

    loadExtraDataForSinglePokemon: (id: Number, callback: Function) => {
        axios.get(`${baseURl}/pokemon-species/${id}`)
            .then(response => {
                if (callback) {
                    callback(response.data || {});
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
}

export default DataLoader;