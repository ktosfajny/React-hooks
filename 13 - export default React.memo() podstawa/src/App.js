import React, { useState } from 'react';
import './App.css';

import Counter from './Counter';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// komponent App to jest komponent funkcyjny a więc jak byłby przerenderowany od nowa
// to wszystkie obliczenia które są w nim zawarte też robiłybysię od nowa co jest bez sensu
// w naszym przykładzie jak zwiększymy licznik za pomocą buttona to komponent <Counter /> tez się przerenderuje
// mimo że nie jest wgl powiązany z tym - jest  tylko w tym samym komponencie.
// memo pozwoli na to aby ten komponent Coutner nie był re-renderowany za każdym razem
// aby tego użyć to przy eksprootwanu komponenu counter (zobacz Counter.jsx) piszemy:
// export default React.memo(Counter);
// to działa tak że react.memo() porówna własciwości/propy tego komponentu Counter.jsx i jak się nie zmieniły to nie będzie re-renderowany
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// warto dodać że to porównywanie propsów tez chwilę zajmuje dlatego jesli mamy prosty komponent to wtedy nie używajmy tego bo samo porównanie zajmie więcej czasu jak wykonanie tego co ten komponent miał robić !!! 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const App = () => {


  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = () => setFirstCounter(firstCounter + 1)

  const increaseSecondCounter = () => setSecondCounter(secondCounter + 1)





  return (
    <div>
      <p>licznik nr 1 wynosi: {firstCounter}</p>
      <p>licznik nr 2 wynosi: {secondCounter}</p>
      < Counter />
      <button onClick={increaseFirstCounter}>Zwiększ licznik nr1</button>
      <button onClick={increaseSecondCounter}>Zwiększ licznik nr2</button>
    </div>
  )
};





export default App;