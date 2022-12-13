import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { PlayerContextType, IPlayer } from '../../@types/player';
import SurvivorOption from './survivorOption/SurvivorOption';
import MisterHandyOptions from './misterHandyOptions/MisterHandyOptions';

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
    let updatedPlayer:IPlayer = player;
    let value = event.currentTarget.value;
    try {
      updatedPlayer.origin = value;
      savePlayer(updatedPlayer)
    } catch (error) {
      console.log(error)
    }
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
      {player.origin === 'survivant' ? <SurvivorOption />: null}
      {player.origin === 'mister handy' ? <MisterHandyOptions />:null}
    </div>
  )
}

export default Origins
