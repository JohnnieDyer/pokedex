'use client';

const typeColours: { [key: string]: any } = {
    normal: {
        backgroundColour: 't-col-normal',
        textColour: 'text-slate-900',
        solidColour: 't-col-normal-solid',
    },
    fire: {
        backgroundColour: 't-col-fire',
        textColour: 'text-white',
        solidColour: 't-col-fire-solid',
    },
    water: {
        backgroundColour: 't-col-water',
        textColour: 'text-white',
        solidColour: 't-col-water-solid',
    },
    grass: {
        backgroundColour: 't-col-grass',
        textColour: 'text-slate-900',
        solidColour: 't-col-grass-solid',
    },
    electric: {
        backgroundColour: 't-col-electric',
        textColour: 'text-slate-900',
        solidColour: 't-col-electric-solid',
    },
    ice: {
        backgroundColour: 't-col-ice',
        textColour: 'text-slate-900',
        solidColour: 't-col-ice-solid',
    },
    fighting: {
        backgroundColour: 't-col-fighting',
        textColour: 'text-white',
        solidColour: 't-col-fighting-solid',
    },
    poison: {
        backgroundColour: 't-col-poison',
        textColour: 'text-white',
        solidColour: 't-col-poison-solid',
    },
    ground: {
        backgroundColour: 't-col-ground',
        textColour: 'text-slate-900',
        solidColour: 't-col-ground-solid',
    },
    flying: {
        backgroundColour: 't-col-flying',
        textColour: 'text-white',
        solidColour: 't-col-flying-solid',
    },
    psychic: {
        backgroundColour: 't-col-psychic',
        textColour: 'text-white',
        solidColour: 't-col-psychic-solid',
    },
    bug: {
        backgroundColour: 't-col-bug',
        textColour: 'text-white',
        solidColour: 't-col-bug-solid',
    },
    rock: {
        backgroundColour: 't-col-rock',
        textColour: 'text-white',
        solidColour: 't-col-rock-solid',
    },
    ghost: {
        backgroundColour: 't-col-ghost',
        textColour: 'text-white',
        solidColour: 't-col-ghost-solid',
    },
    dragon: {
        backgroundColour: 't-col-dragon',
        textColour: 'text-white',
        solidColour: 't-col-dragon-solid',
    },
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
    }
}

export default TypeFunctions;

export interface PokemonType {
    slot: number,
    name: string
}