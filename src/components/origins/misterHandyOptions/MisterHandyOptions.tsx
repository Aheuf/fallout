import React, { useState, useContext, useEffect } from 'react'
import { PlayerContextType } from '../../../@types/player';
import { PlayerContext } from '../../../context/PlayerContext';

const MisterHandyOptions = () => {
  const {player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
  const [count, setCount] = useState(3);

  const disable = (event:React.FormEvent<HTMLInputElement>):boolean => {
    return !event.currentTarget.checked && count === 0;
  }

  const handleChange = (event:React.FormEvent<HTMLInputElement>):void => {
    let updatedPlayer = player;
    if(event.currentTarget.checked){
      updatedPlayer.misterHandyOptions.push(event.currentTarget.value);
      savePlayer(updatedPlayer);
      setCount(count-1);
    }else{
      let index:number = updatedPlayer.misterHandyOptions.indexof(event.currentTarget.value);
      updatedPlayer.misterHandyOptions.splice(index,1);
      savePlayer(updatedPlayer);
      setCount(count+1);
    }
  }

  return (
    <div>
      <h2>choisir {count} options</h2>
      <form>
        <input type="checkbox" name="emetteur laser" disabled={count === 0} onChange={handleChange}/>
        <label htmlFor="emetteur laser">emetteur laser</label><br />
        <input type="checkbox" name="lance-flammes" disabled={count === 0} onChange={handleChange}/>
        <label htmlFor="lance-flammes">lance-flammes</label><br />
        <input type="checkbox" name="pince" disabled={count === 0} onChange={handleChange}/>
        <label htmlFor="pince">pince</label><br />
        <input type="checkbox" name="pistolet auto 10mm" disabled={count === 0} onChange={handleChange}/>
        <label htmlFor="pistolet auto 10mm">pistolet auto 10mm</label><br />
        <input type="checkbox" name="scie circulaire" disabled={count === 0} onChange={handleChange}/>
        <label htmlFor="scie circulaire">scie circulaire</label><br />
      </form>
      {count === 0 && !player.misterHandyOptions.includes('pince') ?<p>attention: pas de pince, pas de "combat à main nue"</p> : null}
    </div>
  )
}
//FIXME: DISABLE ONLY UNCHECKED CASE IF COUNT === 0
export default MisterHandyOptions