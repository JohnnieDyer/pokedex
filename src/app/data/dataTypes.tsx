
export interface PokemonType {
    slot: number,
    name: string
}

export interface PokemonAbility {

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
    abilities: PokemonAbility[]
    extraDataFetched: Boolean
}

export interface PokemonSearchDetails {
    name: string,
    id: number,
    types: any
}