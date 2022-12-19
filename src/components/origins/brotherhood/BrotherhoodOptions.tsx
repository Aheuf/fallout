import React, { useContext } from 'react';
import { PlayerContextType } from '../../../@types/player';
import { PlayerContext } from '../../../context/PlayerContext';

const BrotherHoodOptions: React.FC = () => {
    const {player, savePlayer } = useContext(PlayerContext) as PlayerContextType;

    const handleChange = (event:React.FormEvent<HTMLFormElement>):void => {
        let updatedPlayer = player;

        updatedPlayer.atouts.map(atout => {
            switch(atout.name){
                case '':
                case '':
                case '':
            }
        })

    }
  return (
    <form action="#" onChange={handleChange}>
      <input type="radio" name="atout" id="arme à énergie" />
      <label htmlFor="arme à énergie">armes a energie</label>
      <input type="radio" name="atout" id="science" />
      <label htmlFor="science">science</label>
      <input type="radio" name="atout" id="réparation" />
      <label htmlFor="réparation">reparation</label>
    </form>
  );
}

export default BrotherHoodOptions;