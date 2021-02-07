import React, { useContext } from 'react';

import { AppContext } from './AppContext'; // importujemy ReactContext aby mieć dostep do tych danych


const UserInfo = () => {

  const { isUserLogged } = useContext(AppContext); // wyodrębniamy interesującą nas wartość isUserLogged z kontekxtu AppContext

  const userLoggedInfo = isUserLogged
    ? "zalogowany"
    : 'niezalogowany';

  return (
    <p>Użytkownik jest...{userLoggedInfo}</p>
  )
}


export default UserInfo;

