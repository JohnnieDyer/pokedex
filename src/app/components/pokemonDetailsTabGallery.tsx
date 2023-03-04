'use client';
import React, { FunctionComponent, useState, useEffect } from 'react';

// custom components
import Gallery from './gallery';



export const PokemonDetailsTabGallery: FunctionComponent<any> = ({ pokemonDetails }) => {

    return (
        <div className="w-full h-full flex">
            <div className="bg-white rounded-xl text-slate-700 p-4 w-full h-96 m-auto">
                <Gallery pokemonDetails={pokemonDetails}></Gallery>
            </div>
        </div>
    )
}

export default PokemonDetailsTabGallery;
