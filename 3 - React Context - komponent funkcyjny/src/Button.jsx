import React, {useContext} from 'react';

import { AppContext } from './AppContext'; // importujemy ReactContext aby mieć dostep do tych danych

const Button = () => {

  const {toggleLoggedState} = useContext(AppContext); // używamy hooka do wyodrębnienia interesującej nas funkcji z contextu

  // dzięki używaniu hooka useContext nie trzeba wgl pisać tych ciezkich metod z {} itd

    return ( 
      <button onClick={toggleLoggedState}>Przełącz stan użytkownika</button>
    )
}

export default Button;


