import React, {PureComponent, createRef} from 'react';

class Counter extends PureComponent {


  state = {
    counter: 0,
  }

  componentRef = createRef(); // w nawiasie podajemy wartość startową jesli chcemy np true

  render(){

    const {counter} = this.state;

    return (
      // dodajemy sobie referencję do tego diva i w tej metodzie na dole ustawiamy tego ifa
      <div ref={this.componentRef}> 
        <p>wartość licznika wynosi: {counter}</p>
        <button onClick={this.asyncInteasecounterValue}>Pobierz asynchroniczne dane</button>
      </div>
    )
  }

  // problem z tym memory leak polegał na tym ze jak przychodziła odpowiedź z API to chcieliśmy zmienić stan (zupdatetowac) jakiskomponent który juz nie istniał. Teraz dzięki nadaniu tutaj referencji wiadomo o jaki komponent chodził i mimo że nie zostanie on już zupdateowany to React zostanie powiadomiony że został on jakby odmontowany


  asyncInteasecounterValue = () => setTimeout(
    ()=>{

      if(this.componentRef.current){  // dzieki ustawieniu ref do tego div który oplata ten element oraz temu srpawdzeniu nie mamy memory leak w przypadku jakbysmy wysłali np wysłanie do api i odmontowali komponent który miał to odebrać zanim przyjdzie odpowiedź z api. Dzieki temu ifowi nie bedzie tego problemu że byłoby ostrzeżenie o memoryleak
        this.setState(prevState=>({
          counter: prevState.counter+1,
        }))
      }
     
    },3000
  )
}


export default Counter;
