import React, {useEffect} from 'react';


const Triangle = () => {


  // useEffect odpala się dopiero po zamontowaniu a więc jeśli np chcemy zmienić jakieś style np żeby zamist byc z lewej to był na środku ten komponent to czasami może się zdażyć że przez moment ten komponent bedzie jeszcze wiedoczny po lewej stronie. 
  // WYSTARCZY ZAMIENIĆ NA useLayoutEffect i ten problem znika ponieważ ten hoc odpali się jeszcze przed wyrenderowaniem i poprawi style więc komponent w momencie renderowania w DOM już bedzie miał nowe style
  useEffect(()=>{

    const element = document.querySelector('.triangle')

    element.style.top="70%";
    element.style.left="50%";


  },[]);

  return (
    <div className="triangle">
      triangle
    </div>
  )
}


export default Triangle;