'use client';

export const typeColours: { [key: string]: any } = {
    normal: {
        backgroundColour: 't-col-normal',
        textColour: 'text-slate-900',
        solidColour: 't-col-normal-solid',
        solidColourName: 'bg-slate-200',
    },
    fire: {
        backgroundColour: 't-col-fire',
        textColour: 'text-white',
        solidColour: 't-col-fire-solid',
        solidColourName: 'bg-orange-500',
    },
    water: {
        backgroundColour: 't-col-water',
        textColour: 'text-white',
        solidColour: 't-col-water-solid',
        solidColourName: 'bg-sky-500',
    },
    grass: {
        backgroundColour: 't-col-grass',
        textColour: 'text-slate-900',
        solidColour: 't-col-grass-solid',
        solidColourName: 'bg-emerald-300',
    },
    electric: {
        backgroundColour: 't-col-electric',
        textColour: 'text-slate-900',
        solidColour: 't-col-electric-solid',
        solidColourName: 'bg-yellow-400',
    },
    ice: {
        backgroundColour: 't-col-ice',
        textColour: 'text-slate-900',
        solidColour: 't-col-ice-solid',
        solidColourName: 'bg-cyan-400',
    },
    fighting: {
        backgroundColour: 't-col-fighting',
        textColour: 'text-white',
        solidColour: 't-col-fighting-solid',
        solidColourName: 'bg-red-600',
    },
    poison: {
        backgroundColour: 't-col-poison',
        textColour: 'text-white',
        solidColour: 't-col-poison-solid',
        solidColourName: 'bg-purple-600',
    },
    ground: {
        backgroundColour: 't-col-ground',
        textColour: 'text-slate-900',
        solidColour: 't-col-ground-solid',
        solidColourName: 'bg-amber-200',
    },
    flying: {
        backgroundColour: 't-col-flying',
        textColour: 'text-white',
        solidColour: 't-col-flying-solid',
        solidColourName: 'bg-violet-300',
    },
    psychic: {
        backgroundColour: 't-col-psychic',
        textColour: 'text-white',
        solidColour: 't-col-psychic-solid',
        solidColourName: 'bg-pink-500',
    },
    bug: {
        backgroundColour: 't-col-bug',
        textColour: 'text-white',
        solidColour: 't-col-bug-solid',
        solidColourName: 'bg-lime-700',
    },
    rock: {
        backgroundColour: 't-col-rock',
        textColour: 'text-white',
        solidColour: 't-col-rock-solid',
        solidColourName: 'bg-yellow-700',
    },
    ghost: {
        backgroundColour: 't-col-ghost',
        textColour: 'text-white',
        solidColour: 't-col-ghost-solid',
        solidColourName: 'bg-violet-500',
    },
    dragon: {
        backgroundColour: 't-col-dragon',
        textColour: 'text-white',
        solidColour: 't-col-dragon-solid',
        solidColourName: 'bg-indigo-700',
    },
    fairy: {
        backgroundColour: 't-col-fairy',
        textColour: 'text-white',
        solidColour: 't-col-fairy-solid',
        solidColourName: 'bg-fuchsia-400',
    }
};

const TypeFunctions = {

    getTypeBackgroundColour: function (typeName: string) {

        return typeColours[typeName]?.backgroundColour  || '';
    },

    getTypeTextColour: function (typeName: string) {
        return typeColours[typeName]?.textColour  || '';
    },

    getTypeSolidColour: function (typeName: string) {
        return typeColours[typeName]?.solidColour  || '';
    },

    getTypeSolidColourName: function (typeName: string) {
        return typeColours[typeName]?.solidColourName  || '';
    }
}

export default TypeFunctions;