import React from 'react';



const Counter =({counter,index})=>{

console.log(`render licznika nr: ${index}`); // ten console.log poinformuje nas o tym który z komponentów się re-renderuje abysmy mogli zobaczyc 

  return (
    <div>
     <p>licznik nr {index} wynosi: {counter}</p>
    </div>
  )
}

// jakbysmy użyli export default React.memo(Counter) to każdy Counter byłby memoizowany a tego nie chcemy ponieważ jak jest mały komponent to lepiej niech się przerenderuje bo samo sprawdzenie czy powinien się re-renderować zajmnie więcej czasu niż jego przerenderowanie
export default Counter;