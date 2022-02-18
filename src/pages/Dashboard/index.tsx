import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Title, Input, Box, Box2, Error } from './styles'

interface Pokemon {
  url_image: string;
  name: string;
  abilities: string[];
}

const Dashboard: React.FC = () => {
  const [newPokemon, setNewPokemon] = useState('')
  const [inputError, setInputError] = useState('')
  const [arrayPokemon, setPokemons] = useState<Pokemon[]>(() => {
    const storagePokemon = localStorage.getItem('@Pokemons')

    if (storagePokemon) {
      return JSON.parse(storagePokemon)
    }

    mostraPokemon()
    return []
  })

  const pesquisaPokemon = async () => {
    if (!newPokemon) {
      setInputError('Digite o nome ou um número de Pokémon para pesquisar!!!')
      return
    }

    try {
      const response = await api.get(`pokemon/${newPokemon}/`)
      const pokemon = response.data

      const abilities = pokemon.abilities.map((ability: any) => {
        return ability.ability.name
      })

      const carregaPokemon = {
        url_image: `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`,
        name: pokemon.name,
        abilities,
      }

      setPokemons([carregaPokemon, ...arrayPokemon])
      setNewPokemon('')
    } catch (err) {
      setInputError('Ops! Nenhum Pokémon foi encontrado!!!')
      setNewPokemon('')
    }
  }

  async function mostraPokemon() {
    const carregaPokemon = []

    for (let id = 1; id <= 30; id++) {
      const response = await api.get(`pokemon/${id}/`)
      const pokemon = response.data

      const abilities = pokemon.abilities.map((ability: any) => {
        return ability.ability.name
      })

      carregaPokemon.push({
        url_image: `https://cdn.traction.one/pokedex/pokemon/${id}.png`,
        name: pokemon.name,
        abilities,
      })
    }

    setPokemons([...arrayPokemon, ...carregaPokemon])
  }

  useEffect(() => {
    localStorage.setItem('@Pokemons', JSON.stringify(arrayPokemon))
  }, [arrayPokemon])

  return (
    <>
      <Title>
        <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="" /></h1>
      </Title>

      <Input>
        <input
          value={newPokemon}
          onChange={e => setNewPokemon(e.target.value.toLowerCase())}
          type="text"
          placeholder="Digite um nome ou número de um Pokémon..."
        />
        <button onClick={pesquisaPokemon}>Pesquisar</button>
      </Input>

      {inputError && <Error>{inputError}</Error>}

      <Box>
        {arrayPokemon.map(pokemon => (
          <Box2>
              <div className="box">
                <div className="nome">
                  <img src={pokemon.url_image}/>
                  <h2>Nome</h2>
                  <p>{pokemon.name}</p>
                </div>

                <div className="box">
                  <div id='habilidade'>
                    <h2>Habilidade</h2>
                    <p>{pokemon.abilities.join(' - ')}</p>
                  </div>
                </div>
              </div>
          </Box2>
        ))}
      </Box>
    </>
  )
}

export default Dashboard