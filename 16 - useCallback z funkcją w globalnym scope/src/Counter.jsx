import React from 'react';



const Counter =({callback,index})=>{

console.log(`render licznika nr: ${index}`); 

  return (
    <div>
      <button onClick={callback}>Zwieksz licznik</button>
    </div>
  )
}

// to jest potrzebne ale prawdopodobnie można też użyc useMemo w App.js zamist tutaj React.memo()
export default React.memo(Counter);