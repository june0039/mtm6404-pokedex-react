import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from '../components/Row'
import Col from '../components/Col'


function Pokemon() {
    const params = useParams()
    const [pokemon, setPokemon] = useState({
        name: '',
        id: '',
        image: '',
        abilities: []
    })

    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/pokemon/' + params.name)
            .then(response => response.json())
            .then(json => {
                setPokemon({
                    name: json.name,
                    id: json.id,
                    image: json.sprites.other['official-artwork'].front_default,
                    abilities: json.abilities
                })
            })
    })

    return (
        <>
            <Row>
                <Col>
                    <h1 className="display-4 py-3 text-capitalize">{pokemon.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="img-fluid" src={pokemon.image} alt={pokemon.name} />

                </Col>
            </Row>
            <ul>
                {pokemon.abilities.map((ability, index) => <li key={index}>{ability.ability.name}</li>)}
            </ul>
        </>
    )
}

export default Pokemon