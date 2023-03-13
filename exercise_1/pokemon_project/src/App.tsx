import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from 'react-bootstrap'
import axios from 'axios'


export const getPokemon = async() =>{
  let response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
  return { 
    name : response.data['name'],
    img : response.data['sprites']['front_default']
  }
}

function App() {
  const [pokemon, setPokemon] = useState({})
  
  useEffect(()=>{
    const myPokemon =async () => {
      let pokeObject = await getPokemon()
      setPokemon(pokeObject)
    }
    myPokemon()
  },[])

  useEffect(()=>{
    console.log(pokemon)
  }, [pokemon])

  return (
    <Container className="App">
      <h1 id='titleHeader'>Pokemon API EX</h1>
    </Container>
  )
}

export default App
