import React, { createRef } from 'react';
import { PureComponent } from 'react';
import './App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// createRef jest zamianst używania web API np document.querySelector itd
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



class App extends PureComponent {


  textInput = createRef(); // utworzymy referencję. ta referencja to jest po prostu obiekt który ma rózne własciwości

  paragraphElement = createRef();

  render() {

    console.log(this.textInput)

    return (
      <div>
        <input type="text"
          ref={this.textInput} // mamy inputa któremu ustawiamy referencję więc od teraz textInput będzie referencję do tego inputa
        />

        <p ref={this.paragraphElement}>Hello</p>

        <button onClick={this.focusTextinput}>Ustaw focus na input</button>

        <button onClick={this.addChar}>Dodaj wykorzyknij "!"</button>
      </div>
    )
  }

  focusTextinput = () => this.textInput.current.focus(); // to textInput to jest obiekt (referencja) do tego do czego została użyta (input jej użyl więc jest referencją do tego inputa) i ona ma właściwość current która wskazuje na ten element (input) i na nim możemy wywołaś metodę focus() która spowoduje że zostanie ustawiony focus na tym inpucie

  addChar = () => this.paragraphElement.current.textContent += '!';
};





export default App;