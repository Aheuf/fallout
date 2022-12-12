import React, { useContext } from 'react';
import { PlayerContextType } from '../../../@types/player';
import { PlayerContext } from '../../../context/PlayerContext';

const SurvivorOption: React.FC  = () => {
  const {player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
  const options:string[] = [
    "doué",
    "éducation",
    "gringalet",
    "main lourde",
    "tir rapide"
  ]

  const handleChange = (event:React.FormEvent<HTMLSelectElement>): void => {
    let updatedPlayer:IPlayer = player;
    let value = event.currentTarget.value;
    try {
      updatedPlayer.survivorOption = value;
      savePlayer(updatedPlayer)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>traits</h2>
      <select name="survivorOption" id="survivorOption" onChange={handleChange}>
        <option value="default">choisir un trait</option>
        {options.map((option:string)=>{
          return(<option key={options.indexOf(option)}value={option}>{option}</option>)
        })}
      </select>
    </div>
  )
}

export default SurvivorOption