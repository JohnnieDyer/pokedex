'use client';
import React from 'react';
import TypeFunctions from '../data/pokemonTypes'

export default function TypeBubble({ typeName, small }: any) {

    const backgroundColour = TypeFunctions.getTypeSolidColour(typeName);
    const textColour = TypeFunctions.getTypeTextColour(typeName);
    
    return (
        <div className={`${small ? ' w-full h-8 text-sm' : ' w-full h-10 '} z-20 m-auto pt-1 bg-slate-900 rounded-xl shadow-2xl shadow-black/50 flex overflow-x-hidden ${backgroundColour}`}>
            <span className={textColour + ' m-auto px-1 pb-1 text-ellipsis overflow-x-hidden'}>
                {typeName}
            </span>
        </div>
    )
}
