import React, { PureComponent } from 'react';
import './App.css';


import { AppContext, defaultObject } from './AppContext'; // importujesz stworzony przez siebie ReactContext
import UserInfo from './UserInfo'; // importujesz komponent któremu potem przeslesz dane przez ReactContext
import Button from './Button'; // importujesz buttona do którego za pomocą ReactContext przekazujesz funkcję to zmiany stanu



class App extends PureComponent {

  state = { // to będzie state który bedziemy przesyłać pod dzieci
    isUserLogged: defaultObject.isUserLogged, // nazwa "usUserLogged" ze state nie musi byc taka sama jak właściwość w defaultObject
  }

  handleToggleStateIsLogged = () => { // funkcja do zmiany state w tym App która to funkcja zostanie przekazana do <Button/>
    this.setState(prevState => ({
      isUserLogged: !prevState.isUserLogged
    }));
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // czyli defaultowe/początkowe wartości nie są zmieniane tutaj w obiekcie state tylko w AppContext. A drugiej strony to co renderuje ta klasa App to elementy wewnątrz tego AppContext.provider bęą odwoływać się do kontekxtu tego App, czyli do tego co ma App w state 
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      // tutaj jak widać owijasz calą apkę w taki jakby provider który dostarczy tego stora. AppContext to czywiście nazwa twojego stora a Provider to juz z góry zdefiniowana metoda
      <AppContext.Provider value={{
        isUserLogged: this.state.isUserLogged,
        toggleLoggedState: this.handleToggleStateIsLogged,
      }}>

        <div>
          <UserInfo />
          {/* do UserInfo będziemy przekazywać dane z contextu zamiast przez propsy */}

          <Button />
          {/* do Button będziemy przekazywać funkcję która zmienia state w tym App dzięki czemu wyrenderuje isę inny UserInfo */}

        </div>

      </AppContext.Provider>
    );
  }

}


export default App;