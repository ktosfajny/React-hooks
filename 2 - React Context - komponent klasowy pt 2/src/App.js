import React, { PureComponent } from 'react';
import './App.css';


import { AppContext, defaultObject } from './AppContext';
import UserInfo from './UserInfo';
import Button from './Button';



class App extends PureComponent {

  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true, // dodajemy nową wartość którą przekażemy do drugiego buttona
  }

  handleToggleStateIsLogged = () => {
    this.setState(prevState => ({
      isUserLogged: !prevState.isUserLogged
    }));
  }


  handleToggleStateisAdult = () => { // funkcja do zmiany state w tym App która to funkcja zostanie przekazana do <Button/>  tego drugiego
    this.setState(prevState => ({
      isUserAdult: !prevState.isUserAdult
    }));
  }



  render() {
    return (
      <div>
        <div>
          {/* do tych userInfo i Button nic nie przekazujemy więc zostaną wzięte wartości domyslne z AppContext */}
          <UserInfo />
          <Button />
        </div>


        <AppContext.Provider value={{
          isUserLogged: this.state.isUserAdult,
          toggleLoggedState: this.handleToggleStateisAdult,
        }}>
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }

}


export default App;