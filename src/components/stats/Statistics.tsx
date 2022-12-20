import React, { useContext } from 'react';
import { PlayerContextType } from '../../@types/player';
import { PlayerContext } from '../../context/PlayerContext';


const Statistics: React.FC = () => {
    const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;

    return (
        <div>
            <h1>statistiques dérivées</h1>
            <ul>
                <li>charge maximale : {75 + (player.special.s*5)}kg</li>
                <ul>
                    <li>résistance aux dégats</li>
                    <li>dégâts balistique : {player.defence.balistique}</li>
                    <li>dégats énergetique : {player.defence.energetique}</li>
                    <li>dégâts radiation : {player.defence.radiation}</li>
                    <li>dégâts poison : {player.defence.poison}</li>
                </ul>
                <li>défence: {player.special.a <= 8 ? 1 : 2}</li>
                <li>initiative : {player.special.p + player.special.a}</li>
                <li>vie : {player.special.e + player.special.c}</li>
                {
                    player.special.s > 10 ? 
                    <li>bonus de dégats au corps à corps 3d6</li> : player.special.s > 8 ? 
                    <li>bonus de dégats au corps à corps 2d6</li> : 
                    <li>bonus de dégats au corps à corps 1d6</li>
                }
            </ul>
        </div>
    );
}

export default Statistics