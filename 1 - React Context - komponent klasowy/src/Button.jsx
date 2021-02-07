import React, {PureComponent} from 'react';

import { AppContext } from './AppContext'; // importujemy ReactContext aby mieć dostep do tych danych

class Button extends PureComponent {

    render(){
        return (
          <AppContext.Consumer>
              {
                ({toggleLoggedState})=>(
                  <button onClick={toggleLoggedState}>Przełącz stan użytkownika</button>
                )
              }          
          </AppContext.Consumer>
        )
    }

}

export default Button;


