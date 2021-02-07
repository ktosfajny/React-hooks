import React, { createRef } from 'react';
import { PureComponent } from 'react';
import './App.css';


import Counter from './Counter';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// createRef jest zamianst używania web API np document.querySelector itd
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



class App extends PureComponent {

  state = {
    isCounterVisible: true,
  }

  paragraphElement = createRef();



  render() {

    console.log(this.paragraphElement)

    const counterElement = this.state.isCounterVisible
      ? <Counter />
      : null;

    return (
      <div>
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.addChar}>Dodaj wykorzyknij "!"</button>
        <button onClick={this.toggleVisibilitycounter}>pokaż/ukryj counter</button>
        {counterElement}
      </div>
    )
  }

  toggleVisibilitycounter = () => this.setState(prevState => ({
    isCounterVisible: !prevState.isCounterVisible,
  }));

  addChar = () => this.paragraphElement.current.textContent += '!';
};





export default App;