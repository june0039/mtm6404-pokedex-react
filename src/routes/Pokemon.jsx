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
        <h1>{params.name}</h1>
    )
}

export default Pokemon