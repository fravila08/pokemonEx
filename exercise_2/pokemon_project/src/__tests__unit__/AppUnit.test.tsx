import {describe, it , expect, vi, Mocked} from "vitest";
import TestRenderer from 'react-test-renderer';
import App from "../App";
import axios from "axios";
import { getPokemon } from "../App";

vi.mock("axios")

describe("App", () => {

    describe("getPokemon()", ()=>{

        it("Return name and sprite of pokemon", async() =>{
            
            const mockedAxios = axios as Mocked<typeof axios>;
            mockedAxios.get.mockResolvedValue({data : { 
                name : "name", 
                sprites : { front_default : 'img_url' }
            }})

            const pokemon = await getPokemon();
            expect(pokemon).toStrictEqual({ name : 'name', img : 'img_url'})
        })
    })

    it("create html snapshot", () => {
        const app = TestRenderer.create(<App />)
        expect(app).toMatchSnapshot();
    })

})