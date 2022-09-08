import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokemonDetails.css'
import HeaderPoke from './shared/HeaderPoke'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const [hp, setHp] = useState(0)

  const [attack, setAttack] = useState(0)

  const [defense, setDefense] = useState(0)

  const [speed, setSpeed] = useState(0)

  const { name } = useParams()

  const [styleHp, setStyleHp] = useState({})

  const [styleAttack, setStyleAttack] = useState({})

  const [styleDefense, setStyleDefense] = useState({})

  const [styleSpeed, setStyleSpeed] = useState({})



  const handleColor = (value = 0) => {
    if (value < 100) {
      const Obj = {
        width: value.toString() + '%',
        height: '100%',
        background: 'linear-gradient(90deg, #FCD676 -2.25%, #E6901E 133.18%)',
        'border-start-start-radius': '0.6em',
        'border-bottom-left-radius': '0.6em'
      }
      return Obj
    } else {
      const Obj = {
        width: value.toString() + '%',
        height: '100%',
        background: 'linear-gradient(90deg, #FCD676 -2.25%, #E6901E 133.18%)',
        'border-bottom-right-radius': '0.6em',
        'border-top-right-radius': '0.6em',
        'border-start-start-radius': '0.6em',
        'border-bottom-left-radius': '0.6em'
      }
      return Obj
    }
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  }, [])

  const [count, setCount] = useState(0)

  useEffect(() => {
    
    if(count<10){
      setHp(((pokeInfo?.stats[0].base_stat) * 2 / 3).toFixed(2))
      setAttack(((pokeInfo?.stats[1].base_stat * 2 / 3)).toFixed(2))
      setDefense(((pokeInfo?.stats[2].base_stat) * 2 / 3).toFixed(2))
      setSpeed(((pokeInfo?.stats[5].base_stat) * 2 / 3).toFixed(2))
  
      setStyleHp(handleColor(hp))
  
      setStyleAttack(handleColor(attack))
  
      setStyleDefense(handleColor(defense))
  
      setStyleSpeed(handleColor(speed))
      setCount(count+1)
    }

  }, [pokeInfo,styleHp,styleAttack,styleDefense,styleSpeed])


  useEffect(()=> {
    if(count===10){
      setCount(0)
    }

  },[count])

  return (

    <article className='container_general_card_PD'>
      <HeaderPoke />

      <div className='cardPD'>

        <div className=''>

          <div className='containerPD'>
            <div className={`card__header bg-${pokeInfo?.types[0].type.name}`}></div>
            <img className='card__img_pokemonDetails' src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />

          </div>
          <h2 id='cardPI__hr_h1_title_ID' className={`card__name color-text-${pokeInfo?.types[0].type.name}`}># {pokeInfo?.id}</h2>
          <div className='cardPI__hr_h1_title'>
            <hr id='cardPI_hr_h1_1' className={`card__name color-text-${pokeInfo?.types[0].type.name}`} />
            <h1 id='cardPI_hr_h1_2' className={`card__name color-text-${pokeInfo?.types[0].type.name}`}>{name}</h1>
            <hr id='cardPI_hr_h1_3' className={`card__name color-text-${pokeInfo?.types[0].type.name}`} />
          </div>

          <div className='cardPI_W_H'>
            <ul className='cardPI_W_H_ul_1'>
              <li>Weight</li>
              <li className='cardPI_W_H_ul_wh'>{pokeInfo?.weight}</li>
            </ul>

            <ul className='cardPI_W_H_ul_2'>
              <li>Height</li>
              <li className='cardPI_W_H_ul_wh'> {pokeInfo?.height} </li>
            </ul>
          </div>
        </div >

        <div className='cardPI_Abilities_container'>
          <div className='cardPI_Abilities'>

            <div className='cardType'>
              <h3 className='cardType_h3'>Type</h3>
              <div className='cardType_container'>
                <h4 className='cardType_container_h4_1'>{pokeInfo?.types[0].type.name}</h4>
                <h4 className='cardType_container_h4_2'>{pokeInfo?.types[1] ? pokeInfo?.types[1].type.name : 'unknown'}</h4>
              </div>
            </div>
            <div className='cardAbilities'>
              <h3 className='cardAbilities_h3'>Abilites</h3>
              <div className='cardAbilites_container'>
                <h4 className='cardAbilites_container_h4_1'>{ pokeInfo?.abilities[0] ? pokeInfo?.abilities[0].ability.name : 'unknown'}</h4>
                <h4 className='cardAbilites_container_h4_2'>{ pokeInfo?.abilities[1]? pokeInfo?.abilities[1].ability.name: 'unknown'}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='card_stats'>
          <h2 className='statsTitle'>Stats</h2>

          <div className='cardStats_1'>
            <ul className='cardStats_ul'>
              <li className='cardStats_li_1'>{pokeInfo?.stats[0].stat.name}</li>
              <li className='cardStats_li_1'>{pokeInfo?.stats[0].base_stat}/150</li>
            </ul>

            <div className='cardStatspercentage'>
              <div style={styleHp}><span className='cardStatspercentage_porcen'>{hp}%</span></div>
            </div>

          </div>

          <div className='cardStats_1'>
            <ul className='cardStats_ul'>
              <li className='cardStats_li_1'>{pokeInfo?.stats[1].stat.name}</li>
              <li className='cardStats_li_1'>{pokeInfo?.stats[1].base_stat}/150</li>
            </ul>

            <div className='cardStatspercentage'>
              <div style={styleAttack}>
                <span className='cardStatspercentage_porcen'>{attack}%</span>
              </div>
            </div>
          </div>

          <div className='cardStats_1'>
            <ul className='cardStats_ul'>
              <li className='cardStats_li_1'>{pokeInfo?.stats[2].stat.name}</li>
              <li className='cardStats_li_1'>{pokeInfo?.stats[2].base_stat}/150</li>
            </ul>

            <div className='cardStatspercentage'>
              <div style={styleDefense}>
                <span className='cardStatspercentage_porcen'>{defense}%</span>
              </div>
            </div>
          </div>

          <div className='cardStats_1'>
            <ul className='cardStats_ul'>
              <li className='cardStats_li_1'>{pokeInfo?.stats[5].stat.name}</li>
              <li className='cardStats_li_1'>{pokeInfo?.stats[5].base_stat}/150</li>
            </ul>

            <div className='cardStatspercentage'>
              <div style={styleSpeed}>
                <span className='cardStatspercentage_porcen'>{speed}%</span>
              </div>
            </div>
          </div>

        </div>
        {/* !! */}

      </div>
      <div className='conatiner_movements'>
        <h1 className='title_Movements'>Movements</h1>
        <ul className='card_movements_ul'>
          {
            pokeInfo?.moves[0] ?
              pokeInfo?.moves.map(poke => (
                <li className='card_movements_li'>{poke.move.name}</li>
              ))
              :
              'No movement information'
          }
        </ul>
      </div>

    </article>
  )
}

export default PokemonDetails