import { IPokemon } from "../App"
import Card from 'react-bootstrap/Card';

export interface PokemonCardProps{
    pokemon : IPokemon;
}

export const PokemonCard : React.FC<PokemonCardProps> = ({pokemon}) =>{

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img id="pokemonIMG" variant="top" src={pokemon.img} />
            <Card.Body>
                <Card.Title id="pokemonName">{pokemon.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}