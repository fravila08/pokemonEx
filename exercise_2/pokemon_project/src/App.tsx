import { useEffect, useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { PokemonCard } from './components/pokemonCard'

export interface IPokemon {
  name : string;
  img : string; 
}


export async function getPokemon(): Promise<IPokemon>{
  let response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
  return { 
    name : response.data['name'],
    img : response.data['sprites']['front_default']
  }
}

function App() {
  const [pokemon, setPokemon] = useState<IPokemon>({name:'none', img:'none'})
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const myPokemon =async () => {
      let pokeObject = await getPokemon()
      setPokemon(pokeObject)
      setShow(true)
    }
    myPokemon()
  },[])

  useEffect(()=>{
    console.log(pokemon)
  }, [pokemon])

  return (
    <Container className="App">
      <h1 id='titleHeader'>Pokemon API EX</h1>
      {show ?
       <PokemonCard pokemon={pokemon} />
       :
       null
      }
    </Container>
  )
}

export default App
