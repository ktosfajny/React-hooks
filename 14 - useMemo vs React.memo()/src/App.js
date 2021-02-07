import React, { useState } from 'react';
import { useMemo } from 'react';
import './App.css';

import Counter from './Counter';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// komponent App to jest komponent funkcyjny a więc jak byłby przerenderowany od nowa
// to wszystkie obliczenia które są w nim zawarte też robiłybysię od nowa co jest bez sensu
// używamy tutaj useMemo na jednym z 1 Coutnerze ale nie używamy tego na 2 kompomnencie
// efekt jest taki że ten drugi komponent ZAWSZE przerenderowuje się nawet jak zmieniają się propsy tego 1 Coutnera bo oba są w tym samym App.js
// w naszym przykładzie są to małe komponenty więc generalnie nei ma sensu używac useMemo dla obu przypadków
// ale jeśli mielibysmy koponenty z duzą ilością obliczeń, dużą logiką to lepiej używać ob to zwiększy performance
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


const App = () => {


  const [firstCounter, setFirstCounter] = useState(0); // dla 1 licznika który JEST memoizowany
  const [secondCounter, setSecondCounter] = useState(0); // dla 2 licznika który NIE JEST memoizowany (będzie się re-renderował za każdym razem)

  const increaseFirstCounter = () => setFirstCounter(firstCounter + 1)// dla 1 licznika który JEST memoizowany

  const increaseSecondCounter = () => setSecondCounter(secondCounter + 1)// dla 2 licznika który NIE JEST memoizowany


  const firstcounterComponent = useMemo(() => // używasz memo i tylko ten konkretny Counter byl memoizowany a nie każdy (jkak było z exportReact.memo() )
    < Counter counter={firstCounter} index={1} />, [firstCounter]) // na końcu też jest tablica zależności tak samo jak w useEffect, musimy tam dać te zmieniające się propsy aby ten zmemoizowany komponent mógł je otrzymać bez przerenderowania


  return (
    <div>
      <p>licznik nr 1 wynosi: {firstCounter}</p>
      <p>licznik nr 2 wynosi: {secondCounter}</p>

      {/* poniższy  firstcounterComponent to jest counter który jest memoizowany (nie będzie się re-renderował za każdym razem) */}
      {firstcounterComponent}
      {/* poniższy  Counter nie jest memoizowany (będzie się re-renderował za każdym razem nawet jak zmienią się propy innego komponentu) */}
      < Counter counter={secondCounter} index={2} />

      <button onClick={increaseFirstCounter}>Zwiększ licznik nr1</button>
      <button onClick={increaseSecondCounter}>Zwiększ licznik nr2</button>
    </div>
  )
};





export default App;