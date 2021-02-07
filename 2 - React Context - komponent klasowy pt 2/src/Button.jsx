import React, {PureComponent} from 'react';

import { AppContext } from './AppContext'; // importujemy ReactContext aby mieć dostep do tych danych

class Button extends PureComponent {

  static contextType = AppContext; // jak rzypiszemy do takiej zmiennej contextType kontext z którego korzystamy to nie trzeba pisać wtedy tego:
  // {
  //   (props)=>(
  //     )
  // }


    render(){
        return (    
          // tutaj zwróć uwagę że odwłujesz się do this.context ale nigdzie takiego czegoś nie deklarowałeś, dekalrowałes contextType ale nie odwołujesz isę do niego
          <button onClick={this.context.toggleLoggedState}>Przełącz stan użytkownika</button>
        )
    }

}

export default Button;


