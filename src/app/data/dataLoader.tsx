'use client';
import axios from 'axios';
import HelperFunctions from '../helperFunctions';
import { PokemonDetails } from './dataTypes';

const baseURl = "https://pokeapi.co/api/v2";

const DataLoader = {

    // load a set of pokemon. list of ids is set by page and passed to this to avoid loading duplicate data
    loadSetOfPokemonData(listOfIdsToLoad: number[], callback: Function) {
        const urls = [];
        const extraDataUrls = [];

        // build a list of urls to fetch with each id number at the end
        for (const i of listOfIdsToLoad) {
            urls.push(`${baseURl}/pokemon/${i}`);
            extraDataUrls.push(`${baseURl}/pokemon-species/${i}`);
        }

        // fetch all urls
        const requests = urls.map(x => axios.get(x));
        const secondaryRequests = extraDataUrls.map(x => axios.get(x));

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
                            imageUrl: data.sprites?.other[ 'official-artwork' ][ 'front_default' ] || '',
                            description: '',
                            height: data.height,
                            weight: data.weight,
                            abilities: [],
                            moves: [],
                            galleryUrls: [],
                            extraDataFetched: false
                        };

                        // add types
                        for (let t of data.types) {
                            pokemonDetails.types.push({ slot: t.slot, name: t.type.name });
                        }

                        // add moves
                        for (let a of data.moves) {
                            pokemonDetails.moves.push(a.move.name);
                        }

                        // add abilities
                        for (let a of data.abilities) {
                            pokemonDetails.abilities.push(a.ability.name);
                        }

                        // add gallery urls
                        data.sprites.front_default ? pokemonDetails.galleryUrls.push(data.sprites.front_default) : null;
                        data.sprites.back_default ? pokemonDetails.galleryUrls.push(data.sprites.back_default) : null;
                        data.sprites.back_shiny ? pokemonDetails.galleryUrls.push(data.sprites.back_shiny) : null;
                        data.sprites.front_shiny ? pokemonDetails.galleryUrls.push(data.sprites.front_shiny) : null;

                        // add to array
                        pokemonList.push(pokemonDetails);
                    }
                }

                // now load extra data
                axios.all(secondaryRequests)
                    .then(response => {
                        for (const r of response) {
                            if (r && r.data) {
                                let data = r.data;

                                // find the first part of the data for this pokemon
                                const thisPokemon = pokemonList.find((x: any) => x.id == data.id);

                                if (thisPokemon) {

                                    // find the first description in english
                                    let i = 0;
                                    while (i < data.flavor_text_entries.length) {
                                        if (data.flavor_text_entries[ i ].language.name == 'en') {
                                            thisPokemon.description = HelperFunctions.removeSymbolsFromText(data.flavor_text_entries[ i ].flavor_text);
                                            break;
                                        }

                                        i++
                                    }

                                    thisPokemon.extraDataFetched = true;
                                }
                            }
                        }

                        if (callback) {
                            callback(pokemonList);
                        }
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }
}

export default DataLoader;