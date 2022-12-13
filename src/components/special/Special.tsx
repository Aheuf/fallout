import React, { useContext, useEffect, useState } from 'react';
import { PlayerContextType } from '../../@types/player';
import { PlayerContext } from '../../context/PlayerContext';

const Special: React.FC = () => {
    const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
    const [ points, setPoints ] = useState(5);

    useEffect(() => {
        let updatedPlayer = player
        if(player.origin === 'super mutant'){
            updatedPlayer.special.s = updatedPlayer.special.s+2;
            updatedPlayer.special.e = updatedPlayer.special.e+2;
            savePlayer(updatedPlayer);
        }
    },[player.origin]);

    const handleChange = (event:React.FormEvent<HTMLInputElement>): void => {
        let updatedPlayer = player
        event.preventDefault();
        //FIXME: fix inputs behaviors when no more points, can spam and distribute more point than it can be distribute
        switch(event.currentTarget.name){
            case 's':
                if(updatedPlayer.special.s < event.currentTarget.valueAsNumber){
                    if(points > 0){
                        updatedPlayer.special.s = event.currentTarget.valueAsNumber;
                        setPoints(points-1);
                    } else {
                        alert('pas assez de points !');
                        event.currentTarget.valueAsNumber = player.special.s
                    }
                } else {
                    updatedPlayer.special.s = event.currentTarget.valueAsNumber;
                    setPoints(points+1);
                }
                break;
            case 'p':
                if(updatedPlayer.special.p < event.currentTarget.valueAsNumber){
                    if(points > 0){
                        updatedPlayer.special.p = event.currentTarget.valueAsNumber;
                        setPoints(points-1);
                    } else {
                        alert('pas assez de points !');
                        event.currentTarget.valueAsNumber = player.special.p
                    }
                } else {
                    updatedPlayer.special.p = event.currentTarget.valueAsNumber;
                    setPoints(points+1);
                }
                break;
            case 'e':
                if(updatedPlayer.special.e < event.currentTarget.valueAsNumber){
                    if(points > 0){
                        updatedPlayer.special.e = event.currentTarget.valueAsNumber;
                        setPoints(points-1);
                    } else {
                        alert('pas assez de points !');
                        event.currentTarget.valueAsNumber = player.special.e
                    }
                } else {
                    updatedPlayer.special.e = event.currentTarget.valueAsNumber;
                    setPoints(points+1);
                }
                break;
            case 'c':
                if(updatedPlayer.special.c < event.currentTarget.valueAsNumber){
                    if(points > 0){
                        updatedPlayer.special.c = event.currentTarget.valueAsNumber;
                        setPoints(points-1);
                    } else {
                        alert('pas assez de points !');
                        event.currentTarget.valueAsNumber = player.special.c
                    }
                } else {
                    updatedPlayer.special.c = event.currentTarget.valueAsNumber;
                    setPoints(points+1);
                }
                break;
            case 'i':
                if(updatedPlayer.special.i < event.currentTarget.valueAsNumber){
                    if(points > 0){
                        updatedPlayer.special.i = event.currentTarget.valueAsNumber;
                        setPoints(points-1);
                    } else {
                        alert('pas assez de points !');
                        event.currentTarget.valueAsNumber = player.special.i
                    }
                } else {
                    updatedPlayer.special.i = event.currentTarget.valueAsNumber;
                    setPoints(points+1);
                }
                break;
            case 'a':
                if(updatedPlayer.special.a < event.currentTarget.valueAsNumber){
                    if(points > 0){
                        updatedPlayer.special.a = event.currentTarget.valueAsNumber;
                        setPoints(points-1);
                    } else {
                        alert('pas assez de points !');
                        event.currentTarget.valueAsNumber = player.special.a
                    }
                } else {
                    updatedPlayer.special.a = event.currentTarget.valueAsNumber;
                    setPoints(points+1);
                }
                break;
            case 'l':
            if(updatedPlayer.special.l < event.currentTarget.valueAsNumber){
                if(points > 0){
                    updatedPlayer.special.l = event.currentTarget.valueAsNumber;
                    setPoints(points-1);
                } else {
                    alert('pas assez de points !');
                    event.currentTarget.valueAsNumber = player.special.l
                }
            } else {
                updatedPlayer.special.l = event.currentTarget.valueAsNumber;
                setPoints(points+1);
            }
            break;
        }
        savePlayer(updatedPlayer)
    }

    return (
    <div>
        <h1>S.P.E.C.I.A.L</h1>
        <p>il vous reste {points}pts à distribuer</p>
        <table>
            <tr>
                <td>S.trength</td>
                <td><input key={`s${player.special.s}`} type="number" name="s" defaultValue={player.special.s}
                    max={player.origin === 'super mutant' ? "12": "10"} min={player.origin === 'super mutant' ? "6": "4"}
                    onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>P.erception</td>
                <td><input key={`p${player.special.p}`} type="number" name="p" defaultValue={player.special.p} max="10" min="4" onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>E.ndurance</td>
                <td><input key={`e${player.special.e}`} type="number" name="e" defaultValue={player.special.e}
                    max={player.origin === 'super mutant' ? "12": "10"} min={player.origin === 'super mutant' ? "6": "4"}
                    onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>C.harism</td>
                <td><input key={`c${player.special.c}`} type="number" name="c" defaultValue={player.special.c} max="10" min="4" onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>I.ntelligence</td>
                <td><input key={`i${player.special.i}`} type="number" name="i" defaultValue={player.special.i} max="10" min="4" onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>A.thletism</td>
                <td><input key={`a${player.special.a}`} type="number" name="a" defaultValue={player.special.a} max="10" min="4" onChange={handleChange}/></td>
            </tr>
            <tr>
                <td>L.uck</td>
                <td><input key={`l${player.special.l}`} type="number" name="l" defaultValue={player.special.l} max="10" min="4" onChange={handleChange}/></td>
            </tr>
        </table>
    </div>
    );
}

export default Special