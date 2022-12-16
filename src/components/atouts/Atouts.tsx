import { current } from '@reduxjs/toolkit';
import React, { useState, useContext } from 'react';
import { PlayerContextType } from '../../@types/player';
import { PlayerContext } from '../../context/PlayerContext';

const Atouts: React.FC = () => {
    const [count, setCount] = useState(3);
    const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;

    const handleCheck = (event:React.FormEvent<HTMLInputElement>):void => {
        let updatedPlayer = player;
        let value: string = event.currentTarget.value
        updatedPlayer.atouts.map(atout => {
            if(atout.name === value){
                atout.checked = !atout.checked;
                if(atout.checked){
                    atout.value = atout.value+2;
                    setCount(count-1);
                } else {
                    atout.value = atout.value-2;
                    setCount(count+1);
                }
            }
        })
        savePlayer(updatedPlayer)
    }

    return (
    <div>
        <h1>Atouts</h1>
        <p>choisir {count} atouts personnels</p>
        <form action="#">
            {player.atouts.map((atout:{name:string, value:number, checked:boolean}) =>{
                return (
                <div key={player.atouts.indexOf(atout)}>
                    <input name={atout.name} type="checkbox" value={atout.name} disabled={count === 0 && !atout.checked} onChange={handleCheck}/>
                    <label htmlFor={atout.name}>{atout.name}</label>
                    <input type="number" name={`${atout.name}Points`} defaultValue={atout.value} min="0" max="6"/>
                </div>
                )
            })}
        </form>
    </div>
    )
}

export default Atouts