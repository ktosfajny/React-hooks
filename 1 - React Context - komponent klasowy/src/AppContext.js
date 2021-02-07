import { createContext } from 'react'; // importujesz funkcję która tworzy kontext

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - -    React Context to taki jakby Redux lub MobX czyli sluży do zarządzania stanem
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


export const defaultObject = { // to jest obiekt który będzie potem przysyłany jako niby propsy do komponentów które go potrzebują
    isUserLogged: false,
    toggleLoggedState: () => { },
};
// w App.js zmieniamy nieco te dane ale jeśli np nie zrobimy tego to wtedy element który ma AppContext.Consumer nie znajdzie innych nadpisanych danych (nadpisywał je App.js) i wtedy weźmie te defaultowe dane które są tutaj


// AppContext to nazwa, może być dowolna, może być np ShopContext albo ClientsContext itd
export const AppContext = createContext(defaultObject); // jako argument można przekazywać domyślną, defaultową wartość

