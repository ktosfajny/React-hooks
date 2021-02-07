import React from 'react';


// to id oraz title to brane są z tego propa {...course} bo to działa tak ze jak masz taki zapis to wszystkie te elementy jednoczesnie są przekazywane jako propy a nie ten obiekt sam w sobie czyli jak tak przekażesz to tutaj odwoływałbyś się jako props.id albo props.title a nie props.course.title
const CourseInfo = ({id, onClickHandler,title})=>{



// tą funkcją onLcickHandler bedzie tak na prawdę reducer który zostanie tutaj rpzez dispatch wepchnięty. w tym onClickHandler podajemy obiekt {} w którym przekazujemy id oraz type i to będą np action.id action.title w reducerze czyli jak w reducerze masz course => course.id !== action.id to ten action.id to jest to id które w tym miejscu zostaje przekazane
  const handleOnclick = ()=> onClickHandler({
    id,
    type: 'REMOVE'
  });


  return (
    <div>
      <p>{title}</p>
      <button onClick={handleOnclick}>usuń kurs</button>
    </div>
  )

};




export default CourseInfo;