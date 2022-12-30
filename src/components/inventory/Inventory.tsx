import React, { useContext, useEffect, useState } from 'react';
import { PlayerContextType } from '../../@types/player';
import { PlayerContext } from '../../context/PlayerContext';
import { PackContext } from '../../context/PackContext';
import { IPack, PackContextType } from '../../@types/pack';

const Inventory: React.FC = () => {
  const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
  const { packs } = useContext(PackContext) as PackContextType;
  const [ originPacks, setOriginPacks ] = useState<IPack[]>([]);

  useEffect(()=>{
      setOriginPacks([]);
      packs.map(pack => {
        switch(player.origin){
          case 'goule' || 'survivant':
            pack.type === 'habitant des terres désolés' ? console.log(pack):null
            pack.type === 'habitant des terres désolés' ? setOriginPacks([...originPacks,pack]):null
            break;
          case 'super mutant':
            pack.type === 'super mutant' ? setOriginPacks([...originPacks,pack]):null
            break;
          case 'mister handy':
            pack.type === 'mister handy' ? setOriginPacks([...originPacks,pack]):null
            break;
          case 'initié de la confrérie':
            pack.type === 'confrérie' ? setOriginPacks([...originPacks,pack]):null
            break;
          case 'habitant de l\'abri':
            player.origin === 'habitant de l\'abri' && !player.postHuman ?
            pack.type === 'habitant de l\'abri' ? setOriginPacks([...originPacks,pack]):null :
            pack.type === 'habitant des terres désolés' ? setOriginPacks([...originPacks,pack]):null
            break;
        }
      })
  },[player.origin])

  return (
    <div>
      <h1>pack de démarrage pour {player.origin}</h1>
      <select name="" id="">
        <option value="default">choisir un pack de démarrage</option>
        {originPacks.map((pack) => {
          return ( <option value={pack.name}>{pack.name}</option>)
        })}
      </select>
    </div>
  );
}

export default Inventory