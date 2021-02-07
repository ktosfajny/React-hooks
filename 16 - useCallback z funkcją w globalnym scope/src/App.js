import React, { useState, useCallback } from 'react';
import './App.css';

import Counter from './Counter';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// jeśli jest jakiś komponent który wiemy że będzie przerenderowywany i przekazujemy mu funkcję w propsach to taką funkcję powinniśmy opakować w useCallback
// chodzi o to że jak jakiśkomponent się przerenderuje bo jego funkcje mimo ze robią to samo będą już inne jakby, nie bedą tymi samymi funkcajmi dlatego też używa się usecallback aby to ciągle były te same funkcje
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// jeżeli do jakiegoś kompomnentu np Counter.jsx przekazujesz przez propsy funkcję która aktualizuje STAN rodzica (App.js) to wtedy warto opakowac taką funkcję w useCallback aby zmiejszyć ilość przerenderowań komponentu Counter.jsx

// funkcja setFirstCounter zmienia stan komponenut App dlatego też warto jest ją opakowac w useCallback ale gdybyśmy mieli funkcję zadekalrowaną w scope wyżej niż komponent App.js czyli np w miejscu gdzie jest ten komentarz  (albo np  tak jak było z tym reducerem) to wtedy nie trzeba tego opakowywać w usecallback bo taka funkcja ma już jakby globalny scope więc i tak się nie zmieni referencja do tej funkcji więc nie ma sensu używać useCallback


const add = (x, y) => x + y // ta funkcja jest w scope wyzej więc nie trzeba byłoby jej opakowac w useCallback bo miałaby globalną referencję



const App = () => {

  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = useCallback(() => setFirstCounter(prevValue => prevValue + 1), []) // przesyłamy jakąś funkcję więc opakowujemy w useCallback, zwróć uwagę że teraz wykorzystujemy arugment prevState a nie tak jak wczesniej firstCounter bezpośrednio

  const increaseSecondCounter = useCallback(() => setSecondCounter(prevValue => prevValue + 1), [])

  const firstcounterComponent = <Counter callback={increaseFirstCounter} index={1} />;
  const secondcounterComponent = <Counter callback={increaseSecondCounter} index={2} />;

  return (
    <div>
      <p>licznik nr 1 wynosi: {firstCounter}</p>
      <p>licznik nr 2 wynosi: {secondCounter}</p>
      {firstcounterComponent}
      {secondcounterComponent}
    </div>
  )
};




export default App;