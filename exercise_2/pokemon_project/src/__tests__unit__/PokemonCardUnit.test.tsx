import {describe, it , expect, } from "vitest";
import TestRenderer from 'react-test-renderer';
import { IPokemon } from "../App";
import { PokemonCard } from "../components/pokemonCard";


describe("PokemonCard", ()=>{
    it("Create snapshot of component", ()=>{
        let pokemon = {
            name : 'name',
            img : 'img'
        }
        const pokemonCard = TestRenderer.create(
            <PokemonCard pokemon={pokemon}/>
        )
        expect(pokemonCard).toMatchSnapshot();
    })
})