import React from 'react';
import TypeFunctions from '../data/types'

export default function TypeBubble(props: { typeName: string }) {

    const backgroundColour = TypeFunctions.getTypeDarkColour(props.typeName);
    const textColour = TypeFunctions.getTypeTextColour(props.typeName);

    return (
        <div className={`w-24 h-8 z-20 m-auto pt-1 d-flex bg-slate-900 rounded-xl shadow-2xl shadow-black/50 text-base text-center align-middle ${backgroundColour}`}>
            <span className={textColour}>
                {props.typeName}
            </span>
        </div>
    )
}
