import React, { useState } from 'react';

const Form = ({addHandler}) => {


  const [inputData, setInputData] = useState('');


  const handleOnChange = event => setInputData(event.target.value)

  const handleOnClick = () => {
    
    const newCourse = { // tworzymy sobie jakby obiekt który ma taką samą strukturę jak te obiekty kursów z tablicy z App.js
      title: inputData,
      id: Math.floor(Math.random()*1000)
    }


    addHandler({type: 'ADD', course:newCourse}) // tym addHandler bedzie defacto to co zwróci dispatch czyli funkcja która bedzie aktualizowała state/stre
    setInputData('');
  }

return (
  <div>
    <input type="text" onChange={handleOnChange} value={inputData}/>
    <button onClick={handleOnClick}>Dodaj kurs</button>
  </div>
)
}


export default Form;