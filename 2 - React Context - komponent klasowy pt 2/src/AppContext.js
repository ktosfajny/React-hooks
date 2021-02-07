import { createContext } from 'react'; // importujesz funkcję która tworzy kontext

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - -    React Context to taki jakby Redux lub MobX czyli sluży do zarządzania stanem
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


export const defaultObject = {
    isUserLogged: false,
    toggleLoggedState: () => console.log('domyslna funkcja z ReactContext'), // domyslna metoda która zostanie wykonana jak nie nadpiszemy jej
};

export const AppContext = createContext(defaultObject);

