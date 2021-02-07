import React, { createRef } from 'react';
import { PureComponent } from 'react';
import './App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// createRef jest zamianst używania web API np document.querySelector itd
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



class App extends PureComponent {


  paragraphElement = createRef(); // tworzysz właściwość w klasie App która będzie referencją (to do czego będzie referencją zależy od tego jaki element wykorzysta to)

  render() {

    console.log(this.paragraphElement)

    return (
      <div>

        {/* ten <p> tworzy referencję i podaje tę właściwość paragraphElement więc to paragraphElement edzie referencją do tego <p> */}
        <p ref={this.paragraphElement}>Hello</p>

        <button onClick={this.addChar}>Dodaj wykorzyknij "!"</button>
      </div>
    )
  }

  // tworzysz metodę która odwołuje się do tej referencji. ta referencja to po prsotu obiekt który ma różne właściwości no i trzeba użyc .current aby wskazać ten element, ta to działa niestety
  addChar = () => this.paragraphElement.current.textContent += '!';
};





export default App;