import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { PlayerContextType, IPlayer } from '../../@types/player';
import SurvivorOption from './survivorOption/SurvivorOption';
import MisterHandyOptions from './misterHandyOptions/MisterHandyOptions';
import BrotherHoodOptions from './brotherhood/BrotherhoodOptions';

const Origins: React.FC = () => {
  const {player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
  const origins: string[] = [
    'initié de la confrérie',
    'goule',
    'super mutant',
    'mister handy',
    'survivant',
    'habitant de l\'abri'
  ];

  const handleChange = (event:React.FormEvent<HTMLSelectElement>): void => {
    let updatedPlayer = player;
    let value = event.currentTarget.value;
    try {
      updatedPlayer.origin = value;
      if(value === 'goule'){
        updatedPlayer.atouts.map(atout => {
          atout.name === 'survie' ? atout.value = 2 : atout.value = 0;
        })
      } else {
        updatedPlayer.atouts.map(atout => {
          atout.value = 0;
        })
      }
      savePlayer(updatedPlayer)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCheck = (): void => {
    let updatedPlayer = player;
    updatedPlayer.postHuman = !updatedPlayer.postHuman
    if(updatedPlayer.postHuman){
      updatedPlayer.atouts.map(atout => {
        atout.name === 'survie' ? atout.value = 2 : atout.value = 0;
      })
    } else {
      updatedPlayer.atouts.map(atout => {
        atout.value = 0;
      })
    }
    savePlayer(updatedPlayer)
  }

  return (
    <div>
      <h1>choisir une origine</h1>
      <select name="select origines" id="origines" onChange={handleChange}>
        <option value="default">Choisir une origine</option>
        {origins.map((origine: string) => {
          return (<option key={origins.indexOf(origine)} value={origine}>{origine}</option>)
        })}
      </select>
      <div hidden={player.origin === 'habitant de l\'abri' ? false : true}>
        <input type="checkbox" name="postHuman" id="postHuman" onChange={handleCheck}/>
        <label htmlFor="postHuman">post humain</label>
      </div>
      {player.origin === 'survivant' ? <SurvivorOption />: null}
      {player.origin === 'mister handy' ? <MisterHandyOptions />:null}
      {player.origin === 'initié de la confrérie' ? <BrotherHoodOptions/>:null}
    </div>
  )
}

export default Origins
