import React, { PureComponent } from 'react';

import { AppContext } from './AppContext'; // importujemy ReactContext aby mieć dostep do tych danych


class UserInfo extends PureComponent {

  static contextType = AppContext;


  render() {

    const { isUserLogged } = this.context;

    return (
      <div>
        {console.log(isUserLogged)}

        <p>Użytkownik jest...{!isUserLogged ? 'niezalogowany' : 'zalogowany'}</p>
      </div>

    )
  }
}


export default UserInfo;

