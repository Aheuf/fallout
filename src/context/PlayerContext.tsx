import React, { PropsWithChildren, useState } from 'react';
import { PlayerContextType, IPlayer } from '../@types/player';

export const PlayerContext = React.createContext<PlayerContextType | null>(null);

const PlayerProvider: React.FC<PropsWithChildren<IPlayer>> = ({ children }) => {
    const [player, setPlayer] = useState<IPlayer>({
        origin:'',
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
        atouts:[]
    })

    const savePlayer = (updatedPlayer:IPlayer) => {
        const newPlayer: IPlayer = {
            origin: updatedPlayer.origin,
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