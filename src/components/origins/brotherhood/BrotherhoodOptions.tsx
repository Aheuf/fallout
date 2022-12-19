import React, { useContext } from 'react';
import { PlayerContextType } from '../../../@types/player';
import { PlayerContext } from '../../../context/PlayerContext';

const BrotherHoodOptions: React.FC = () => {
    const {player, savePlayer } = useContext(PlayerContext) as PlayerContextType;

    const handleChange = (event:React.FormEvent<HTMLInputElement>):void => {
        let updatedPlayer = player;

        updatedPlayer.atouts.map(atout => {
          atout.name === event.currentTarget.id ? atout.value = 2 : atout.value = 0;
        })

        savePlayer(updatedPlayer);
    }
  return (
    <form action="#">
      <input type="radio" name="atout" id="arme à énergie" onChange={handleChange}/>
      <label htmlFor="arme à énergie">armes à énergie</label>
      <input type="radio" name="atout" id="science" onChange={handleChange}/>
      <label htmlFor="science">science</label>
      <input type="radio" name="atout" id="réparation" onChange={handleChange}/>
      <label htmlFor="réparation">réparation</label>
    </form>
  );
}

export default BrotherHoodOptions;