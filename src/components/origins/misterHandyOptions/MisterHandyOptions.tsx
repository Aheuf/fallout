import React, { useState, useContext, useEffect } from 'react'
import { PlayerContextType } from '../../../@types/player';
import { PlayerContext } from '../../../context/PlayerContext';

const MisterHandyOptions = () => {
  const { player, savePlayer } = useContext(PlayerContext) as PlayerContextType;
  const [count, setCount] = useState(3);
  const [disable,setDisable] = useState({
    emetteurLaser:true,
    lancesFlammes:true,
    pince:true,
    pistoletAuto10mm:true,
    scieCirculaire:true
  });

  const handleChange = (event:React.FormEvent<HTMLInputElement>):void => {
    let updatedPlayer = player;
    let value:string = event.currentTarget.value;
    
    if(event.currentTarget.checked){
      updatedPlayer.misterHandyOptions.push(value);
      setDisable({...disable, [value]:false})
      savePlayer(updatedPlayer);
      setCount(count-1);
    }else{
      let index:number = updatedPlayer.misterHandyOptions.indexOf(value);

      updatedPlayer.misterHandyOptions.splice(index,1);
      setDisable({...disable, [value]:true})
      savePlayer(updatedPlayer);
      setCount(count+1);
    }
  }

  return (
    <div>
      <h2>choisir {count} options</h2>
      <form>
        <input type="checkbox" value="emetteurLaser" name="emetteur laser" disabled={disable.emetteurLaser && count === 0} onChange={handleChange}/>
        <label htmlFor="emetteur laser">emetteur laser</label><br />
        <input type="checkbox" value="lancesFlammes" name="lance-flammes" disabled={disable.lancesFlammes && count === 0} onChange={handleChange}/>
        <label htmlFor="lance-flammes">lance-flammes</label><br />
        <input type="checkbox" value="pince" name="pince" disabled={disable.pince && count === 0} onChange={handleChange}/>
        <label htmlFor="pince">pince</label><br />
        <input type="checkbox" value="pistoletAuto10mm" name="pistolet auto 10mm" disabled={disable.pistoletAuto10mm && count === 0} onChange={handleChange}/>
        <label htmlFor="pistolet auto 10mm">pistolet auto 10mm</label><br />
        <input type="checkbox" value="scieCirculaire" name="scie circulaire" disabled={disable.scieCirculaire && count === 0} onChange={handleChange}/>
        <label htmlFor="scie circulaire">scie circulaire</label><br />
      </form>
      {count === 0 && !player.misterHandyOptions.includes('pince') ?<p>attention: pas de pince, pas de "combat à main nue"</p> : null}
    </div>
  )
}

export default MisterHandyOptions