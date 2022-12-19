import React, { useContext, useEffect, useState } from 'react';
import { PlayerContextType } from '../../@types/player';
import { PlayerContext } from '../../context/PlayerContext';

const Special: React.FC = () => {
    const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
    const [ points, setPoints ] = useState(5);
    //TODO: change luck stat to l-1 if origin is gifted survivor
    useEffect(() => {
        player.survivorOption === 'doué' ? setPoints(points+2): null;
        let updatedPlayer = player
        if(player.origin === 'super mutant'){
            updatedPlayer.special.s = updatedPlayer.special.s+2;
            updatedPlayer.special.e = updatedPlayer.special.e+2;
            savePlayer(updatedPlayer);
        }
    },[player.origin, player.survivorOption]);

    const handleChange = (event:React.FormEvent<HTMLInputElement>): void => {
        let updatedPlayer = player
        let value: number = event.currentTarget.valueAsNumber

        switch(event.currentTarget.name){
            case 's':
                if(updatedPlayer.special.s < value && points > 0){
                    updatedPlayer.special.s = value
                    setPoints(points-1)
                } else  if (updatedPlayer.special.s > value){
                    updatedPlayer.special.s = value
                    setPoints(points+1)
                } else {
                    alert('pas assez de points')
                    event.currentTarget.valueAsNumber -= 1;
                }
                break;
            case 'p':
                if(updatedPlayer.special.p < value && points > 0){
                    updatedPlayer.special.p = value
                    setPoints(points-1)
                } else  if (updatedPlayer.special.p > value){
                    updatedPlayer.special.p = value
                    setPoints(points+1)
                } else {
                    alert('pas assez de points')
                    event.currentTarget.valueAsNumber -= 1;
                }
                break;
            case 'e':
                if(updatedPlayer.special.e < value && points > 0){
                    updatedPlayer.special.e = value
                    setPoints(points-1)
                } else  if (updatedPlayer.special.e > value){
                    updatedPlayer.special.e = value
                    setPoints(points+1)
                } else {
                    alert('pas assez de points')
                    event.currentTarget.valueAsNumber -= 1;
                }
                break;
            case 'c':
                if(updatedPlayer.special.c < value && points > 0){
                    updatedPlayer.special.c = value
                    setPoints(points-1)
                } else  if (updatedPlayer.special.c > value){
                    updatedPlayer.special.c = value
                    setPoints(points+1)
                } else {
                    alert('pas assez de points')
                    event.currentTarget.valueAsNumber -= 1;
                }
                break;
            case 'i':
                if(updatedPlayer.special.i < value && points > 0){
                    updatedPlayer.special.i = value
                    setPoints(points-1)
                } else  if (updatedPlayer.special.i > value){
                    updatedPlayer.special.i = value
                    setPoints(points+1)
                } else {
                    alert('pas assez de points')
                    event.currentTarget.valueAsNumber -= 1;
                }
                break;
            case 'a':
                if(updatedPlayer.special.a < value && points > 0){
                    updatedPlayer.special.a = value
                    setPoints(points-1)
                } else  if (updatedPlayer.special.a > value){
                    updatedPlayer.special.a = value
                    setPoints(points+1)
                } else {
                    alert('pas assez de points')
                    event.currentTarget.valueAsNumber -= 1;
                }
                break;
            case 'l':
                if(updatedPlayer.special.l < value && points > 0){
                    updatedPlayer.special.l = value
                    setPoints(points-1)
                } else  if (updatedPlayer.special.l > value){
                    updatedPlayer.special.l = value
                    setPoints(points+1)
                } else {
                    alert('pas assez de points')
                    event.currentTarget.valueAsNumber -= 1;
                }
                break;
        }
        savePlayer(updatedPlayer)
    }

    return (
    <div>
        <h1>S.P.E.C.I.A.L</h1>
        <p>il vous reste {points}pts à distribuer</p>
        <form action="#">
            <label htmlFor="s">S.trength</label>
            <input key={`s${player.special.s}`} type="number" name="s" defaultValue={player.special.s}
            max={player.origin === 'super mutant' ? "12": "10"} min={player.origin === 'super mutant' ? "6": "4"}
            onChange={handleChange}/><br/>

            <label htmlFor="p">P.erception</label>
            <input key={`p${player.special.p}`} type="number" name="p" defaultValue={player.special.p} max="10" min="4"
            onChange={handleChange}/><br/>

            <label htmlFor="e">E.ndurance</label>
            <input key={`e${player.special.e}`} type="number" name="e" defaultValue={player.special.e}
            max={player.origin === 'super mutant' ? "12": "10"} min={player.origin === 'super mutant' ? "6": "4"}
            onChange={handleChange}/><br/>

            <label htmlFor="c">C.harism</label>
            <input key={`c${player.special.c}`} type="number" name="c" defaultValue={player.special.c} max={player.origin === 'super mutant' ? "6":"10"} min="4"
            onChange={handleChange}/><br/>

            <label htmlFor="i">I.ntelligence</label>
            <input key={`i${player.special.i}`} type="number" name="i" defaultValue={player.special.i} max={player.origin === 'super mutant' ? "6":"10"} min="4"
            onChange={handleChange}/><br/>

            <label htmlFor="a">A.thletism</label>
            <input key={`a${player.special.a}`} type="number" name="a" defaultValue={player.special.a} max="10" min="4"
            onChange={handleChange}/><br/>

            <label htmlFor="l">L.uck</label>
            <input key={`l${player.special.l}`} type="number" name="l" defaultValue={player.special.l} max="10" min="4"
            onChange={handleChange}/><br/>
        </form>
    </div>
    );
}

export default Special