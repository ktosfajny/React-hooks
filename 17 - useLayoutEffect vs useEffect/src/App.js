import React from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import Triangle from './Triangle';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// useLayoutEffect wykonuje się przed wyrysowaniem elementów DOM a nie po (tak jak useEffect)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// wyjaśnienie: załóżmy że np mamy jakiś element który w css jest np przy lewej stronie i ten element po zamontowaniu zmienia swoje połozenie np na środek, może się zdażyć że przez moment bedzie jeszcze widać ten element przy starej pozycji - z lewej. Dzieje się tak dlatego że ustawienie nowej pozycji dajemy mu w useEffect które odpala się PO WYRENDEROWANIU DOM a więc komponent najpierw sięwyrenderuje, dostanie style inicjalne i dopiero jak się zamontuje to odpali useEffect i zmieni pozycję. Wystarczy zatem zmienić useEffect na useLayoutEffect które odpala się PRZED wyrenderowaniem DOM dzieki czezmu zanim ten komponent zostanie wyrenderowany to dostanie nowe style i od razu pojawi się np na środku ekranu a nie z lewej strony

const App = () => {

  // - - -W SKRÓCIE - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // wykona się jako 3 (PO wyrysowaniu elementów DOM)
  useEffect(
    () => console.log('render w useEffect'), []
  )


  // wykona się jako 2 (PRZED wyrysowaniem elementów DOM)
  useLayoutEffect(
    () => console.log('render w useLayoutEffect'), []
  )


  console.log('render') // wykona się jako 1

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  const [isVisible, setIsVisible] = useState(false);

  const handleOnClick = () => setIsVisible(prevState => !prevState);



  const trianglecomponent = isVisible ? <Triangle /> : null;

  return (
    <div>
      <button onClick={handleOnClick}>Toggle</button>
      {trianglecomponent}
    </div>
  )
};




export default App;