import React, { PureComponent } from 'react';

import { AppContext } from './AppContext'; // importujemy ReactContext aby mieć dostep do tych danych


class UserInfo extends PureComponent {



  render() {
    return (
      //AppContext.Consumer będzie pobierał dane od najbliższego Provider'a. W tym przypadku bedzie to Provider rodzica UserInfo czyli App.js
      <AppContext.Consumer>

        {/* trzeba to tak owbinąć w nawiasy { }  a w nich zrobić jednąfunkcję z propsem, tak się z tego korzysta */}

        {
          ({ isUserLogged }) => ( //to jest zwykła funkcja która od razu coś zwraca, dlateog ()=>() ale można by też ()=>{ return ( ) }
            <div>
              {console.log(isUserLogged)}

              <p>Użytkownik jest...{!isUserLogged ? 'niezalogowany' : 'zalogowany'}</p>

            </div>
          )
        }

      </AppContext.Consumer>
    )
  }
}


export default UserInfo;

