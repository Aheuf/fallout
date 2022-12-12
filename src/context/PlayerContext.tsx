import React, { PropsWithChildren, useState } from 'react';
import { PlayerContextType, IPlayer } from '../@types/player';

export const PlayerContext = React.createContext<PlayerContextType | null>(null);

const PlayerProvider: React.FC<PropsWithChildren<IPlayer>> = ({ children }) => {
    const [player, setPlayer] = useState<IPlayer>({
        origin:'',
        survivorOption:''
    })

    const savePlayer = (updatedPlayer:IPlayer) => {
        const newPlayer: IPlayer = {
            origin: updatedPlayer.origin,
            survivorOption: updatedPlayer.survivorOption
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