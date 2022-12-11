import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

const Origins: FunctionComponent = () => {
  const dispatch = useDispatch()
  const origins: string[] = [
    'initié de la confrérie',
    'goule',
    'super mutant',
    'mister handy',
    'survivant',
    'habitant de l\'abri'
  ];

  function handleChange(event:React.FormEvent<HTMLSelectElement>){
    try {

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>choisir une origine</h1>
      <select name="select origines" id="origines" onChange={handleChange}>
        <option value="default">Choisir une origine</option>
        {origins.map((origine: string) => {
          return (<option key={origins.indexOf(origine)} value={origine}>{origine}</option>)
        })}
      </select>
    </div>
  )
}

export default Origins