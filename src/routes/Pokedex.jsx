import { useState, useEffect } from 'react'
import Row from '../components/Row'
import Col from '../components/Col'
import PokemonCard from '../components/PokemonCard'

function Pokedex() {

    const [pokedex, setPokedex] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(json => { setPokedex(json.results) })
    }, [])

    return (
        <h1>Pokedex</h1>
    )
}

export default Pokedex