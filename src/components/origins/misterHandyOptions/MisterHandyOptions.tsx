import React, { useState } from 'react'

const MisterHandyOptions = () => {
  const [count, setCount] = useState(3)
  return (
    <div>
      <h2>choisir {count} options</h2>
      <input type="checkbox" name="emetteur laser" />
      <label htmlFor="emetteur laser">emetteur laser</label><br />
      <input type="checkbox" name="lance-flammes" />
      <label htmlFor="lance-flammes">lance-flammes</label><br />
      <input type="checkbox" name="pince" />
      <label htmlFor="pince">pince</label><br />
      <input type="checkbox" name="pistolet auto 10mm" />
      <label htmlFor="pistolet auto 10mm">pistolet auto 10mm</label><br />
      <input type="checkbox" name="scie circulaire" />
      <label htmlFor="scie circulaire">scie circulaire</label><br />
    </div>
  )
}
//TODO: FINISH THIS OPTION
export default MisterHandyOptions