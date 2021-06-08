import React, {useState} from 'react';
import DisplayFullCountry from './DisplayFullCountry';

const Show = ({ country }) => {
    const [show, setShow] = useState(false);
  
    const handleClick = () => setShow(!show)
    
    if(show === true) {
      return (
        <div>
          <button onClick={handleClick}>Hide</button>
          <DisplayFullCountry country={country} />
        </div>
      )
    }
    else {
      return (
        <button onClick={handleClick}>Show</button>
    )}
}

export default Show;