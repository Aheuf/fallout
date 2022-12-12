import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { PlayerContextType, IPlayer } from '../../@types/player';

const Origins: React.FC = () => {
  const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
  const origins: string[] = [
    'initié de la confrérie',
    'goule',
    'super mutant',
    'mister handy',
    'survivant',
    'habitant de l\'abri'
  ];

  const handleChange = (event:React.FormEvent<HTMLSelectElement>): void => {
    let player:IPlayer = {
      origin:''
    }
    let value = event.currentTarget.value;
    try {
      player.origin = value;
      savePlayer(player)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>choisir une origine</h1>
      <p>{player.origin}</p>
      <select name="select origines" id="origines" onChange={handleChange}>
        <option value="default">Choisir une origine</option>
        {origins.map((origine: string) => {
          return (<option key={origins.indexOf(origine)} value={origine}>{origine}</option>)
        })}
      </select>
    </div>
  )
}

export default Origins
