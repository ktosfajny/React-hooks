import React from 'react';



const Counter =()=>{



console.log('render') // za jak bedziesz zwiększał licznik BEZ TEGO REACT.MEMO() to ten console.log za każdym razem wykonsoluije "render" mimo że ten komponent Counter.jsx wgl nie jest powiązany z tym licznikiem. Natomiast jeśli wyeksportujemy ten komponent counter.jsx z użyciem React.memo to wtedy NIE BEDZIE się re-renderował a więc nie będzie konsolował też niczego

  return (
    <div>
      komponent nigdy się nie zmienia!
    </div>
  )
}

// używamy Reacy.memo() do eskropotowanego komponentu i to dziala tak że React sprawdza czy propy tego komponentu Counter.jsx się różnią, jeśli nie różnią się (w naszym przypaku nie) to komponen NIE BĘDZIE RE-RENDEROWANY (chyba że się różnią to wtedy będzie)
// NIE JEST TO DO KOŃCA DOBRY SPOSÓB NA UŻYWANIE MEMO Z TEGO WZGLĘDU ŻE TEN KOMPONENT ZAWSZE BĘDZIE NIE RE-RENDEROWALNY A CZASAMI NIE CHCMEY UŻYWAĆ MEMO BO SZYBCIEJ SIĘ WYRENDERUJE NIŻ REACT SPRAWDZI CZY POWINIEN WIĘC LEPIEJ JEST UŻYĆ useMemo (nastepny folder)
export default React.memo(Counter);