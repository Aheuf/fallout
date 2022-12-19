import React, { PropsWithChildren, useState } from 'react';
import { PlayerContextType, IPlayer } from '../@types/player';

export const PlayerContext = React.createContext<PlayerContextType | null>(null);

const PlayerProvider: React.FC<PropsWithChildren<IPlayer>> = ({ children }) => {
    const [player, setPlayer] = useState<IPlayer>({
        origin:'',
        postHuman:false,
        survivorOption:'',
        misterHandyOptions:[],
        special:{
            s:5,
            p:5,
            e:5,
            c:5,
            i:5,
            a:5,
            l:5
        },
        atouts:[
            {name:'arme à énergie', value:0, checked:false},
            {name:'arme de corps à corps', value:0, checked:false},
            {name:'arme légère', value:0, checked:false},
            {name:'armes lourdes', value:0, checked:false},
            {name:'athlétisme', value:0, checked:false},
            {name:'crochetage', value:0, checked:false},
            {name:'discours', value:0, checked:false},
            {name:'discrétion', value:0, checked:false},
            {name:'explosifs', value:0, checked:false},
            {name:'mains nues', value:0, checked:false},
            {name:'médecine', value:0, checked:false},
            {name:'pilotage', value:0, checked:false},
            {name:'projectiles', value:0, checked:false},
            {name:'réparation', value:0, checked:false},
            {name:'science', value:0, checked:false},
            {name:'survie', value:0, checked:false},
            {name:'troc', value:0, checked:false}
        ]
    })

    const savePlayer = (updatedPlayer:IPlayer) => {
        const newPlayer: IPlayer = {
            origin: updatedPlayer.origin,
            postHuman: updatedPlayer.postHuman,
            survivorOption: updatedPlayer.survivorOption,
            misterHandyOptions: updatedPlayer.misterHandyOptions,
            special: updatedPlayer.special,
            atouts: updatedPlayer.atouts
        }
        setPlayer(newPlayer)
    }

    return(
        <PlayerContext.Provider value={{player, savePlayer}}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider;