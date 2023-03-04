'use client';
import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image'

// custom components
import ArrowBubble from './arrowBubble';
import { NewLineKind } from 'typescript';



export const Gallery: FunctionComponent<any> = ({ pokemonDetails }) => {

    const [ currentSpriteIndex, setCurrentSpriteIndex ] = useState<number>(0);

    const spriteNamesList = [
        'Front',
        'Back',
        'Back (Shiny)',
        'Front (Shiny)'
    ];

    const arrowClicked = (direction: string) => {
        let newIndex = currentSpriteIndex;

        if (direction == 'right') {
            newIndex += 1;
            newIndex = newIndex >= pokemonDetails.galleryUrls.length ? 0 : newIndex;
        }
        else if (direction == 'left') {
            newIndex -= 1;
            newIndex = newIndex < 0 ? pokemonDetails.galleryUrls.length - 1 : newIndex;
        }

        setCurrentSpriteIndex(newIndex);
    }


    return (
        <div className="w-full h-full bg-transparent flex columns-3">
            <div className={"w-1/4 m-auto flex"}>
                <ArrowBubble
                    key={"left"}
                    rotation={"rotate-90"}
                    direction={'left'}
                    onClickFunction={arrowClicked}
                ></ArrowBubble>
            </div>
            <div className={"w-1/2 m-auto"}>
                <Image
                    className="bg-transparent m-auto"
                    src={pokemonDetails.galleryUrls[ currentSpriteIndex ]}
                    width="200"
                    alt="pokemon front image"
                    height="200"
                />
                <div className="flex">
                    <span className={"m-auto"}>{spriteNamesList[ currentSpriteIndex ]}</span></div>
            </div>
            <div className={"w-1/4 m-auto flex"}>
                <ArrowBubble
                    key={"right"}
                    rotation={"-rotate-90"}
                    direction={'right'}
                    onClickFunction={arrowClicked}
                ></ArrowBubble>
            </div>
        </div>
    )
}

export default Gallery;
