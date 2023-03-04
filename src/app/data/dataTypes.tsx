
export interface PokemonType {
    slot: number,
    name: string
}

export interface PokemonOverview {
    id: number,
    name: string,
    types: PokemonType[],
    imageUrl: string
}

export interface PokemonDetails {
    id: number,
    name: string,
    types: PokemonType[],
    imageUrl: string,
    description: string,
    height: number,
    weight: number,
    abilities: string[],
    moves: string[],
    galleryUrls: string[],
    extraDataFetched: Boolean
}

export interface PokemonSearchDetails {
    name: string,
    id: number,
    types: any
}