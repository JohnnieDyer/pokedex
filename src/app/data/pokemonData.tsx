'use client';
import React, {FunctionComponent, useState, useEffect} from 'react';
import DataLoader from '../data/dataLoader';

// data types
import {PokemonOverview, PokemonDetails} from '../data/dataTypes';

export const PokemonData: FunctionComponent<any> = () => {

    const [ isLoading, setIsLoading ] = useState<Boolean>(false);

    return (
        <div className={`w-full h-full absolute z-50 bg-black/${isLoading ? '50 block ' : '/0 hidden '} `}>

        </div>
    )
}

export default PokemonData;
