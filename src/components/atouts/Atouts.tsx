import React, { useState, useContext } from 'react';
import { PlayerContextType } from '../../@types/player';
import { PlayerContext } from '../../context/PlayerContext';

const Atouts: React.FC = () => {
    const [count, setCount] = useState(3);
    const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
    const [listAtout,setListAtout]=useState([
        {
            name:'armes à énergie',
            checked:false
        },
        {
            name:'armes de corps à corps',
            checked:false
        },
        {
            name:'armes légères',
            checked:false
        },
        {
            name:'armes lourdes',
            checked:false
        },
        {
            name:'athlétisme',
            checked:false
        },
        {
            name:'crochetage',
            checked:false
        },
        {
            name:'discours',
            checked:false
        },
        {
            name:'discrétion',
            checked:false
        },
        {
            name:'explosifs',
            checked:false
        },
        {
            name:'mains nues',
            checked:false
        },
        {
            name:'médecine',
            checked:false
        },
        {
            name:'pilotage',
            checked:false
        },
        {
            name:'projectiles',
            checked:false
        },
        {
            name:'réparation',
            checked:false
        },
        {
            name:'science',
            checked:false
        },
        {
            name:'survie',
            checked:false
        },
        {
            name:'troc',
            checked:false
        }
    ])

    const handleChange = (event:React.FormEvent<HTMLInputElement>):void => {
        let updatedPlayer = player;
        let value:string = event.currentTarget.value;
        listAtout.map(atout => {
            if(atout.name === value){
                atout.checked = !atout.checked
                setListAtout(listAtout)
            }
        })

        if(event.currentTarget.checked){
            updatedPlayer.atouts.push(value);
            setCount(count-1)
        } else {
            let index:number = updatedPlayer.atouts.indexOf(value);

            updatedPlayer.atouts.splice(index,1);
            setCount(count+1)
        }
        savePlayer(updatedPlayer);
        console.log(listAtout)
    }

    return (
    <div>
        <h1>Atouts</h1>
        <p>choisir {count} atouts personnels</p>
        <form action="#">
            {listAtout.map((atout:{name:string,checked:boolean}) =>{
                return (
                <div key={listAtout.indexOf(atout)}>
                    <input name={atout.name} type="checkbox" value={atout.name} onChange={handleChange} disabled={count === 0 && !atout.checked}/>
                    <label htmlFor={atout.name}>{atout.name}</label>
                </div>
                )
            })}
        </form>
    </div>
    )
}

export default Atouts