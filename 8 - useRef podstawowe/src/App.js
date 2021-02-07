import React, { useRef } from 'react';
import './App.css';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// useRef jest zamianst używania web API np document.querySelector itd
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - -RÓŻNICE MIĘDZY useRef a CreateRef  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 1 - do useRef możemy podać jakąś wartość początkową, np true (createRef zawsze zwróci null)
// 2 - useRef zawsze bedzie odwoływał się do tego samego komponentu, createRef tylko do casu przerenderowania
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const App = () => {


  const textInputRef = useRef(true); // tworzysz referencję ale za pomocją useRef a nie createRef, ustawiliśmy true jako wartość domyslną ale oczywiście nietrzeba nic przypisywać


  const focusOnInput = () => textInputRef.current.focus();

  return (
    <div>
      <input ref={textInputRef} type="text" />
      <button onClick={focusOnInput}>Ustaw Focus na input</button>
    </div>
  )


};





export default App;