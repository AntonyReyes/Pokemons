import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import HeaderPoke from './shared/HeaderPoke'

import './styles/pokedex.css'
import './styles/navigation.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
  const [navigation, setNavigation] = useState('https://pokeapi.co/api/v2/pokemon')
  const [statusChange, setStatusChange] = useState('a')

  useEffect(() => {

    if (optionType !== 'All') {
      // Aquí se hace la lógica de cuando el usuario quieres filtrar por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({ results: arr })
        })
        .catch(err => console.log(err))
    } else if (pokeSearch) {
      // Aquí se hace la lógica cuando el usuario busca por el input
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{ url }]
      }
      setPokemons(obj)
    } else {
      // Aquí se hace la lógica cuando el usuario quiere todos los pokemons


      axios.get(navigation)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType, navigation])

  const nameTrainer = useSelector(state => state.nameTrainer)

  return (
    <div className='CARD-CONTENEDOR-MODO-MOBIL'>
      <div className='cardGeneral'>
        <HeaderPoke />
        <div className='welcome'>
          <div className='welcome__form'>
            <h2 className='welcome__title'><span className='Welcome_span'>Welcome {nameTrainer}</span>, Catch them all.</h2>
            <div className='xxxxx1'><SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType} /></div>
            <div className='xxxxx2'>
              <SelectType
                optionType={optionType}
                setOptionType={setOptionType}
                setPokeSearch={setPokeSearch}
              />
            </div>
          </div>
        </div>
        <div className='cards-container'>
          {
            pokemons?.results.map(pokemon => (
              <PokemonCard
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>

        {
          optionType === 'All' ?
            <div className='cardNavigation'>
              {
                statusChange === 'a' ?

                  <ul className='cardNavigation_ul'>
                    <li className='cardNavigation_li' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon")}>1</li>
                    <li className='cardNavigation_li' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")}>2</li>
                    <li className='cardNavigation_li' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=40&limit=20")}>3</li>
                    <li className='cardNavigation_li' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=60&limit=20")}>4</li>
                    <li className='cardNavigation_li' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=80&limit=20")}>5</li>
                    <li className='cardNavigation_li' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=100&limit=20")}>6</li>
                    <li className='cardNavigation_li' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=120&limit=20")}>7</li>
                    <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('b')}> &#8250;</li>
                  </ul>

                  :
                  statusChange === 'b' ?

                    <ul className='cardNavigation_ul'>
                      <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('a')}>&#8249;</li>
                      <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=140&limit=20")}>8</li>
                      <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")}>9</li>
                      <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=160&limit=20")}>10</li>
                      <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=180&limit=20")}>11</li>
                      <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=200&limit=20")}>12</li>
                      <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=220&limit=20")}>13</li>
                      <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=240&limit=20")}>14</li>
                      <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('c')}> &#8250;</li>
                    </ul>

                    :
                    statusChange === 'c' ?

                      <ul className='cardNavigation_ul'>
                        <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('b')}>&#8249;</li>
                        <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=260&limit=20")}>15</li>
                        <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=280&limit=20")}>16</li>
                        <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=300&limit=20")}>17</li>
                        <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=320&limit=20")}>18</li>
                        <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=340&limit=20")}>19</li>
                        <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=360&limit=20")}>20</li>
                        <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=380&limit=20")}>21</li>
                        <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('d')}> &#8250;</li>
                      </ul>

                      :
                      statusChange === 'd' ?

                        <ul className='cardNavigation_ul'>
                          <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('c')}>&#8249;</li>
                          <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=400&limit=20")}>22</li>
                          <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=420&limit=20")}>23</li>
                          <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=440&limit=20")}>24</li>
                          <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=460&limit=20")}>25</li>
                          <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=480&limit=20")}>26</li>
                          <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=500&limit=20")}>27</li>
                          <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=520&limit=20")}>28</li>
                          <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('e')}> &#8250;</li>
                        </ul>

                        :

                        statusChange === 'e' ?

                          <ul className='cardNavigation_ul'>
                            <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('d')}>&#8249;</li>
                            <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=540&limit=20")}>29</li>
                            <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=560&limit=20")}>30</li>
                            <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=580&limit=20")}>31</li>
                            <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=600&limit=20")}>32</li>
                            <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=620&limit=20")}>33</li>
                            <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=640&limit=20")}>34</li>
                            <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=660&limit=20")}>35</li>
                            <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('f')}> &#8250;</li>
                          </ul>

                          :

                          statusChange === 'f' ?

                            <ul className='cardNavigation_ul'>
                              <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('e')}>&#8249;</li>
                              <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=680&limit=20")}>36</li>
                              <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=720&limit=20")}>37</li>
                              <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=740&limit=20")}>38</li>
                              <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=760&limit=20")}>39</li>
                              <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=780&limit=20")}>40</li>
                              <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=800&limit=20")}>41</li>
                              <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=820&limit=20")}>42</li>
                              <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('g')}> &#8250;</li>
                            </ul>

                            :

                            statusChange === 'g' ?

                              <ul className='cardNavigation_ul'>
                                <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('f')}>&#8249;</li>
                                <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=840&limit=20")}>43</li>
                                <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=860&limit=20")}>44</li>
                                <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=880&limit=20")}>45</li>
                                <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=900&limit=20")}>46</li>
                                <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=920&limit=20")}>47</li>
                                <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=940&limit=20")}>48</li>
                                <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=960&limit=20")}>49</li>
                                <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('h')}> &#8250;</li>
                              </ul>

                              :

                              statusChange === 'h' ?

                                <ul className='cardNavigation_ul'>
                                  <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('g')}>&#8249;</li>
                                  <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=980&limit=20")}>50</li>
                                  <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=1000&limit=20")}>51</li>
                                  <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=1020&limit=20")}>52</li>
                                  <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=1040&limit=20")}>53</li>
                                  <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=1060&limit=20")}>54</li>
                                  <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=1080&limit=20")}>55</li>
                                  <li className='cardNavigation_li_1' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=1100&limit=20")}>56</li>
                                  <li className='cardNavigation_li_btn_sig' onClick={() => setStatusChange('i')}> &#8250;</li>
                                </ul>

                                :

                                statusChange === 'i' ?

                                  <ul className='cardNavigation_ul_final'>
                                    <li className='cardNavigation_li_btn_final' onClick={() => setStatusChange('h')}>&#8249;</li>
                                    <li className='cardNavigation_li_Final' onClick={() => setNavigation("https://pokeapi.co/api/v2/pokemon?offset=1120&limit=20")}>57</li>
                                  </ul>

                                  :


                                  ''

              }
            </div>

            :
            ''
        }


        {/* <div className='footer_P'>
          <div className='footer_p_1'>
            <h1>footer</h1>
          </div>
        </div> */}


      </div>
    </div>
  )
}

export default Pokedex