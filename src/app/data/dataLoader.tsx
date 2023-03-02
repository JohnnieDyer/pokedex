'use client';
import axios from 'axios';
import {PokemonDetails} from './dataTypes';
import PokemonType from './pokemonTypes';

const baseURl = "https://pokeapi.co/api/v2";
const numOfPokemonPerSet = 5;

const DataLoader = {

    // load a set of pokemon. amount = numOfPokemonPerSet
    loadSetOfPokemonData(firstID: number, lastID: number, callback: Function) {
        const urls = [];

        // build a list of urls to fetch with each id number at the end
        for (let i: number = firstID; i < lastID; i++) {
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
                            imageUrl: data.sprites?.other['official-artwork']['front_default']
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

    getSinglePokemonData: (id: Number) => {
        axios.get(`${baseURl}/pokemon/${id}`)
            .then(response => {
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default DataLoader;