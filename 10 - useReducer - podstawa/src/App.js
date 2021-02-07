import React, { useReducer } from 'react';
import './App.css';


import CourseInfo from './CourseInfo';


// STATE
const samurajProgramowaniaCourses = [
  {
    id: 'aa2561a3-861a-4d3b-bf32-deeca65c1dab',
    title: 'Web developer od podstaw w 15 dni',
  },
  {
    id: 'ba2561a3-861a-4d3b-bf32-deeca65c1dab',
    title: 'Zaaowansopwany front-end w 15 dni',
  },
  {
    id: 'ca2561a3-861a-4d3b-bf32-deeca65c1dab',
    title: 'Programowanie w JavaScript',
  },
  {
    id: 'da2561a3-861a-4d3b-bf32-deeca65c1dab',
    title: 'Reacy od podstaw - teoria i praktyka',
  },
];


// przykładowy obiekt akcji
// {
//   type: 'ADD', // obowiązkowe
// }



// REDUCER -  czyli funkcja która przyjmuje stan początkowy i jakąś akcję która ma się wykonać na tym stanie. Ten reducer to bedzie ta metoda która zostanie jakby zwrócona przez "dispatch" a to dispatch będziemy używać do przekazania jej jako handlera na klika do buttonu
const coursesReducer = (state, action) => {

  switch (action.type) {
    case 'ADD':
      return;
    case 'REMOVE':
      return state.filter(course => course.id !== action.id)
    case 'FETCH':
      return;


    default:
      throw new Error('oops soemthing went wrong');
  }

};


const App = () => {


  // do reducera trzeba przekazać reducer i stan początkowy
  // to działa tak jak każdy hoc reactowy: destrukturyzujemy te dane (state) i funkcję która je aktualizuje (dispatch)
  const [state, dispatch] = useReducer(coursesReducer, samurajProgramowaniaCourses) // za pomocą tego useReducer tworzymy jakby główny reducer, przekazujemy tutaj ten reducer oraz obiekt inicjujący state (przekazaliśmy te krusy samuraja) na którym bedą wykonywane operacje okreslone przez reducera, wyciągany state oraz dispatch które to dispatch edzie zwracało tego courseReducera. Będziemy tego używać jak bedziemy w <div> tutaj wywoływac np jakiś button to przekazemy mu dispatch które edzie tak na prawdę reducerem courseReducer



  // ten zapis na końcu {...course} oznacza ze przekazujesz cały ten obiekt course więc nie musimy już przekazywać id oraz title bo one sa w każdym z tych course (course to jest pojedynczy obiekt z tej tablicy z kursami )
  const coursesElement = state.map(course => (
    <CourseInfo
      key={course.id}
      onClickHandler={dispatch}
      {...course}
    />
  ))

  return (
    <div>
      {coursesElement}
    </div>
  )


};





export default App;