import React, { useContext } from 'react';

import { AppContext } from './AppContext';

const UserInfo = () => {

  const { isUserLogged } = useContext(AppContext);

  // zakładając że ten komponent korzysta z kilku kontekstów to można tutaj zdestrukturyzować dane z wieli providerów np z COnfigContext (nie ma go stwrzoonego ale podaję tylko przykład)
  // const {isDarkMode} = useContext(ConfigContext);

  const userLoggedInfo = isUserLogged
    ? "zalogowany"
    : 'niezalogowany';

  return (
    <p>Użytkownik jest...{userLoggedInfo}</p>
  )
}


export default UserInfo;

