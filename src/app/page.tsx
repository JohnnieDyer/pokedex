import { Inter } from 'next/font/google';
import TopBar from './components/topBar';
import PokemonListSidebar from './components/pokemonListSidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className="bg-gray-800 h-full w-full overflow-hidden">
      <TopBar></TopBar>
      <div className="w-screen h-screen bg-slate-800 p-20 flex justify-center pt-44 2xl:pt-52 4xl:pt-64">

        {/* inside page */}
        <div className="flex w-full 3xl:w-3/4 4xl:w-1/2h-full 3xl:max-w-[1400px]">

        <PokemonListSidebar></PokemonListSidebar>

          <div className="w-3/4 h-full bg-sky-700 z-10 p-4 rounded-r-xl shadow-2xl shadow-black/50">

          </div>
        </div>
      </div>
    </main>
  )
}
