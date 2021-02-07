import React, { useRef, useEffect, createRef, useState } from 'react';
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

  const numberInputRef = createRef(true);

  const focusOnInput = () => textInputRef.current.focus();


  // useState i zmiana stanu tego komponentu App aby pokazać że createRef towrzy od nowa referencję przy każdym rerenderze
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter(counter + 1);
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



  // wyswietlimy sobie czym tak czym różni się useRef od CreateRef: do useRef możemy przypisać jakąś wartosć która bedzie wartością domyslną (dlatego jeżeli nic nie przypisaliśmy to jest undefined no bo nic nie daliśmy) ale do createRef nie możemy nic przypisać bo nawet jak wpisaliśmy true to nadal wykonsoluje 'null'
  console.log(textInputRef.current)
  console.log(numberInputRef.current)


  // useEffect wykona się PO zamontowaniu komponentu a więc bedziemy mieli dostęp już do referencji i od razu ustawiamy focus, czyli jest to takie jakby componentDidMount i w nim ustawiamy focus aby od razu po wejściu an stronę był focus
  useEffect(
    () => {

      textInputRef.current.focus()

    }, []
  );


  //// tak skonstruowany useEffect usuwa referencję np aby pozbyć się tego problemu z memory leak przy asynchronicznym zapytaniu do API
  // useEffect(
  //  ()=>{


  //   return ()=> textInputRef.current = false;
  //  }, []
  // )


  return (
    <div>
      <input ref={textInputRef} type="text" />
      <input ref={numberInputRef} type="number" />
      <button onClick={focusOnInput}>Ustaw Focus na input</button>

      {/* poniższy button przerenderuje  ten komponent App aby pokazać że useRef po przerenderowaniu będzie już miało referencję z poprzedniego renderowania tego komponentu App a createRef nadal będzie null bo createRef po przerenderowaniu tworzy referencję od nowa a useRef tylko przy 1 renderowaniu i potem już ją trzyma */}
      <button onClick={increaseCounter}>Przerenderuj komponent</button>
    </div>
  )


};





export default App;