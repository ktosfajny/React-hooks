import React, { useReducer } from 'react';
import { useEffect } from 'react';
import './App.css';


import CourseInfo from './CourseInfo';
import From from './Form';

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
      return [...state, action.course] // tutaj aby dodać to po prostu zwracamy nową tablicę gdize wrzucamy najpierw cały porpzedni state i potem dodajemy kolejny element który przekazaliśmy w tym inpucie
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

  // do reducera trzeba przekazać reducer i stan początkowy.
  // to działa tak jak każdy hoc reactowy: destrukturyzujemy te dane (state) i funkcję która je aktualizuje (dispatch) - tym dispatch jest tak na prawdę coursesReducer
  const [state, dispatch] = useReducer(coursesReducer, [])


  // tworzymy asynchroniczną funkcję asyncFetch aby użyc jej w useEffect - useEffect nie jest asynchroniczne toteż nie możemy uzć tam await
  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ // normalnie to tutaj jakoś te dane zwrócone przez fetchAsyncData jakoś byśmy wykorzystali w dispatch
      type: 'FETCH',
      data: samurajProgramowaniaCourses, // tutaj podaje dane które niby otrzymaliśmy z servera i teraz dzięki akcji "FETCH" damy je do state
    })
  }


  useEffect(() => {
    asyncFetch();
  }, [])

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
      <From addHandler={dispatch} />
    </div>
  )


};





export default App;