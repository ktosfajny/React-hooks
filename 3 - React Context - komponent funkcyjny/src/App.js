import React, { useState } from 'react';
import './App.css';


import { AppContext, defaultObject } from './AppContext'; // importujemy sobie context (AppContext) oraz defaultowe wartości
import UserInfo from './UserInfo';
import Button from './Button';



const App = () => {

  // tworzymy stete z booleana isuserLogged który jest domyślnie zdefiniowany w defaultObject
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
  const [isUserAdult, setIsUserAdult] = useState(true);


  // teraz tworzymy funkcje które z wykorzystaniem funkcji zmieniających stan będą zmieniać state TEJ FUNKCJI APP 
  const toggleLoggedState = () => setIsUserLogged(prevValue => !prevValue);
  const handleToggleStateisAdult = () => setIsUserAdult(prevValue => !prevValue);


  return (
    <div>
      {/* pakujemy komponenty w AppContext.rpovider i do propa value przekazujemy obiekt z tymi wartościami któe chcemy przekazywać */}
      <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
        <UserInfo />
        <Button />
      </AppContext.Provider>


      <AppContext.Provider value={{
        isUserLogged: isUserAdult,
        toggleLoggedState: handleToggleStateisAdult,
      }}>
        <UserInfo />
        <Button />
      </AppContext.Provider>
    </div>
  );


}


export default App;