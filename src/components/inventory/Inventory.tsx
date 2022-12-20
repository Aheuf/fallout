import React, { useContext } from 'react';
import { PlayerContextType } from '../../@types/player';
import { PlayerContext } from '../../context/PlayerContext';

const Inventory = () => {
    const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;

  return (
    <div>
      <h1>pack de démarrage pour {player.origin}</h1>
    </div>
  );
}

export default Inventory