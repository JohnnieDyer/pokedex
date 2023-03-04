'use client';
import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image'

// custom components
import TypeBubble from './typeBubble';
import PokemonDetailsTabInformation from './pokemonDetailsTabInformation';
import PokemonDetailsTabBattle from './pokemonDetailsTabBattle';
import PokemonDetailsTabGallery from './pokemonDetailsTabGallery';

// other
import HelperFunctions from '../helperFunctions';



export const PokemonDetailsPanel: FunctionComponent<any> = ({ pokemonDetails }) => {

    const [ selectedTabIndex, setSelectedTabindex ] = useState<number>(1);

    // type bubble colours
    const type1Name: string = pokemonDetails?.types[ 0 ].name || '';
    const type2Name: string = (pokemonDetails && pokemonDetails?.types.length > 1) ? pokemonDetails?.types[ 1 ].name : '';

    const getTabClasses = (tabNum: number) => {
        if (tabNum == selectedTabIndex) {
            return 'border-b-2 pb-2 text-center cursor-pointer';
        }
        else {
            return 'border-b-2 pb-2 text-center cursor-pointer border-b-slate-500 text-slate-500';
        }
    }

    return (
        <div className="w-full h-full bg-transparent p-20 flex flex-col overflow-auto">
            {/* top card */}
            <div className="row w-full h-60 bg-sky-900 rounded-xl flex columns-2">
                <div className="flex w-1/2 p-8">
                    {pokemonDetails != null && (
                        <div className="bg-white m-auto rounded-full max-h-full flex p-4">
                            <Image
                                className="object-scale-down"
                                height={150}
                                width={150}
                                src={pokemonDetails.imageUrl}
                                alt="pokemon card"
                            />
                        </div>
                    )}
                </div>

                <div className="w-3/5 h-full p-6 flex">
                    {pokemonDetails != null && (
                        <div className={`text-xl text-white m-auto h-32 w-full max-w-[250px] space-between`}>
                            <div className="row h-1/3 capitalize">
                                {pokemonDetails.name}
                            </div>
                            <div className="row h-1/3">
                                # {HelperFunctions.getFormattedIdNumber(pokemonDetails.id)}
                            </div>
                            <div className="row h-1/3 columns-2 capitalize">
                                <div className="h-full flex">
                                    <TypeBubble typeName={type1Name}
                                        small={false}>
                                    </TypeBubble>
                                </div>
                                <div className="h-full flex">
                                    {pokemonDetails.types.length > 1 &&
                                        <TypeBubble typeName={type2Name}
                                            small={false}>
                                        </TypeBubble>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full bg-transparent h-10">
            </div>

            {/* bottom card */}
            <div className="w-full grow bg-transparent rounded-xl">
                <div className="w-full h-full bg-sky-900 rounded-xl">

                    {pokemonDetails != null && (
                        <div className="w-full h-full p-10 text-slate-200 flex flex-col">
                            {/* tabs row */}
                            <div className="row w-full py-6 px-10 columns-3 text-xl">
                                <div className={getTabClasses(1) + ' overflow-x-hidden'}
                                    onClick={() => { setSelectedTabindex(1) }}>
                                    Information
                                </div>
                                <div className={getTabClasses(2) + ' overflow-x-hidden'}
                                    onClick={() => { setSelectedTabindex(2) }}>
                                    Battle
                                </div>
                                <div className={getTabClasses(3) + ' overflow-x-hidden'}
                                    onClick={() => { setSelectedTabindex(3) }}>
                                    Gallery
                                </div>
                            </div>

                            <div className="w-full grow">

                                {/* tab 1 */}
                                {selectedTabIndex == 1 && (
                                    <PokemonDetailsTabInformation pokemonDetails={pokemonDetails}></PokemonDetailsTabInformation>
                                )}
                                {selectedTabIndex == 2 && (
                                    <PokemonDetailsTabBattle pokemonDetails={pokemonDetails}></PokemonDetailsTabBattle>
                                )}
                                {selectedTabIndex == 3 && (
                                    <PokemonDetailsTabGallery pokemonDetails={pokemonDetails}></PokemonDetailsTabGallery>
                                )}

                            </div>
                        </div>
                    )}
                </div>
            </div >
        </div >
    )
}

export default PokemonDetailsPanel;
