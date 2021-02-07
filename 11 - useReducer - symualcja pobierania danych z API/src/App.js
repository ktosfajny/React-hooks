import React, { useReducer } from 'react';
import { useEffect } from 'react';
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



const coursesReducer = (state, action) => {

  switch (action.type) {
    case 'ADD':
      return;
    case 'REMOVE':
      return state.filter(course => course.id !== action.id)
    case 'FETCH':
      return action.data;


    default:
      throw new Error('oops soemthing went wrong');
  }

};




// ta funkcja zasymuluje że pobieramy dane z api
const fetchAsyncData = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
}



const App = () => {


  const [state, dispatch] = useReducer(coursesReducer, []) // za pomocą tego useReducer tworzymy jakby główny reducer, przekazujemy tutaj ten reducer oraz obiekt inicjujący state (przekazaliśmy te krusy samuraja) na którym bedą wykonywane operacje okreslone przez reducera, wyciągany state oraz dispatch które to dispatch edzie zwracało tego courseReducera. Będziemy tego używać jak bedziemy w <div> tutaj wywoływac np jakiś button to przekazemy mu dispatch które edzie tak na prawdę reducerem courseReducer


  // tworzymy asynchroniczną funkcję asyncFetch aby użyc jej w useEffect - useEffect nie jest asynchroniczne toteż nie możemy uzć tam await
  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ // normalnie to tutaj jakoś te dane zwrócone przez fetchAsyncData jakoś byśmy wykorzystali w dispatch
      type: 'FETCH',
      data: samurajProgramowaniaCourses, // tutaj podaje dane które niby otrzymaliśmy z servera i teraz dzięki akcji "FETCH" damy je do state
    })
  }

  // używamy useEffect aby zasymulować że niby pobieramy dane z API
  useEffect(() => {
    asyncFetch(); // WEWNĄTRZ useEffect NIE MOŻNA KORZYSTAĆ ZE SŁOWA await WIEĆ TRZEBA ZROBIĆ TAKĄ FUNKCJĘ POZA useEffect I JEDYNIE JĄ WYWOŁAĆ
  }, [])


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