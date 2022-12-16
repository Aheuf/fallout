import { current } from '@reduxjs/toolkit';
import { readlink } from 'fs/promises';
import React, { useState, useContext } from 'react';
import { updateLanguageServiceSourceFile } from 'typescript';
import { PlayerContextType } from '../../@types/player';
import { PlayerContext } from '../../context/PlayerContext';

const Atouts: React.FC = () => {
    const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
    const [count, setCount] = useState(3);
    const [points,setPoints] = useState(player.special.i + 9);

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

    const handleChange = (event:React.FormEvent<HTMLInputElement>):void => {
        let updatedPlayer = player;
        let value = event.currentTarget.valueAsNumber;
        updatedPlayer.atouts.map(atout => {
            if(`${atout.name}Points` === event.currentTarget.name){
                if(atout.value < value && points > 0){
                    atout.value = value;
                    setPoints(points-1);
                    return;
                } else if (atout.value > value) {
                    atout.value = value;
                    setPoints(points+1);
                    return;
                } else {
                    alert('pas assez de points');
                    event.currentTarget.valueAsNumber-=1;
                    return;
                }
            }
        })
        savePlayer(updatedPlayer);
    }

    return (
    <div>
        <h1>Atouts</h1>
        <p>choisir {count} atouts personnels et distribuer en tout {points} dans la liste</p>
        <form action="#">
            {player.atouts.map((atout:{name:string, value:number, checked:boolean}) =>{
                return (
                <div key={player.atouts.indexOf(atout)}>
                    <input name={atout.name} type="checkbox" value={atout.name} disabled={count === 0 && !atout.checked}
                    onChange={handleCheck}/>
                    <label htmlFor={atout.name}>{atout.name}</label>
                    <input key={`${atout.name}${atout.value}`} type="number" name={`${atout.name}Points`} defaultValue={atout.value} min="0" max="6"
                    onChange={handleChange}/>
                </div>
                )
            })}
        </form>
    </div>
    )
}

export default Atouts