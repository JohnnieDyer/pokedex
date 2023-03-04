'use client';
import React from 'react';
import TypeFunctions from '../data/pokemonTypes'

export default function TypeBubble({ typeName, small }: any) {

    const backgroundColour = TypeFunctions.getTypeSolidColour(typeName);
    const textColour = TypeFunctions.getTypeTextColour(typeName);
    
    return (
        <div className={`${small ? ' w-full h-8 text-sm' : ' w-full h-10 '} z-20 m-auto pt-1 bg-slate-900 rounded-xl shadow-2xl shadow-black/50  flex ${backgroundColour}`}>
            <span className={textColour + ' m-auto pb-1'}>
                {typeName}
            </span>
        </div>
    )
}
