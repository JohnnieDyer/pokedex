import React from 'react';
import PokemonCard from './pokemonCard';


let items: Number[] = [];
for (let i = 0; i < 30; i++) {
    items.push(i);
}


export default function PokemonListSidebar({ idx }: any) {
    return (
        <div className="w-1/3 h-full bg-gray-900 z-20 p-8 rounded-l-xl shadow-2xl shadow-black/50">
            <div className="w-full h-full overflow-auto scrollbar-hide">
                <ul>
                    {items.map(x => {
                        return <PokemonCard idx={x} key={x}></PokemonCard>
                    })}
                </ul>
            </div>
        </div>
    )
}
