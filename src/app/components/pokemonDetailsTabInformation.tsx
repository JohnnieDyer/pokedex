'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';



export const PokemonDetailsTabInformation: FunctionComponent<any> = ({ pokemonDetails }) => {
    return (
        <div className="w-full h-full py-4">
            <div className="flex">
                <div className="pl-4 pb-2 ml-auto">
                    {/*height according to pokemondb are give height / 10 in m*/}
                    {/* weights according to pokemondb are given weight / 10 in kg*/}
                    <span className="text-sm pr-5">Height: {pokemonDetails.height / 10} m</span>
                    <span className="text-sm">Weight: {pokemonDetails.weight / 10} kg</span>
                </div>
            </div>

            <div className="pb-20 pt-4">
                <div className="bg-white rounded-xl text-slate-700 p-4">
                    <div className="pl-4 pb-2 ">
                        <span className="text-sm">Description: </span><br></br>
                    </div>
                    <div className="">
                        <span className="text-m">{pokemonDetails.description}</span>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="bg-white rounded-xl text-slate-700 p-4">
                    <div className="pl-4 pb-2">
                        <span className="text-sm">Abilities: </span><br></br>
                    </div>
                    <div className="">
                        {pokemonDetails.abilities.map((x: string) => {
                            return <div className="capitalize" key={x}>
                                <span className="text-m">{x}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetailsTabInformation;
