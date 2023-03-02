

export interface PokemonDetails {
    id: number,
    name: string,
    types: PokemonType[],
    imageUrl: string
}

export interface PokemonType {
    slot: number,
    name: string
}