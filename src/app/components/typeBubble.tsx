'use client';
import React from 'react';
import TypeFunctions from '../data/pokemonTypes'

export default function TypeBubble({ typeName, small }: any) {

    const backgroundColour = TypeFunctions.getTypeSolidColour(typeName);
    const textColour = TypeFunctions.getTypeTextColour(typeName);

    return (
        <div className={`${small ? 'w-24 h-8' : 'w-28 h-12'} z-20 m-auto pt-1 d-flex bg-slate-900 rounded-xl shadow-2xl shadow-black/50 text-base flex ${backgroundColour}`}>
            <span className={textColour + ' m-auto'}>
                {typeName}
            </span>
        </div>
    )
}
