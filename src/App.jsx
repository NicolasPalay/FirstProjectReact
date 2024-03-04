import { useState } from 'react'
import MyTitle from './components/MyTitle'
import PokemonCard from './components/PokemonCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  const[ pokemonIndex, setPokemonIndex] = useState(0);
const previousPokemon = () => {
  setPokemonIndex(pokemonIndex - 1);
}
const nextPokemon = () => {
  setPokemonIndex(pokemonIndex + 1);
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MyTitle />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>     
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
      </div>
      <div>
      <PokemonCard  pokemon={pokemonList[pokemonIndex]} />

      </div>
            <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={previousPokemon}>précédent</button><button onClick={nextPokemon}>suivant</button>
    </>
  )
}

export default App
