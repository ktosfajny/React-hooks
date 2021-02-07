import React, { createContext, useState } from 'react';

export const AppContext = createContext(); // eksportujemy rónież AppContext ponieważ jest używany w return od AppProvider

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - jak chcesz mieć jakby tylko jeden store tak jak w Redux a nie że może być kilka providerów to tutaj w AppContext
// - - - tworzysz sobie taki provider i potem go używasz tylko raz na całej stronie zamiast na różne podkomponenty w App.js
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// każdy komponent na takiego propsa jak "children" bo są to elementy które mogą być wrzucone w taki komponent: <component>childreny</component>
const AppProvider = ({ children }) => { // jak będziesz tego używał to użyjesz tego <AppProvider>tu reszta strony</AppProvider> i ona zostanie wrzucona wtedy między te AppContext dzięki czemu uzyskamy tak jakby jeden główny provider znany z Redux

    const [isUserLogged, setIsUserLogged] = useState(false); // teraz tutaj musimy sami ustawić wszystkie te wartości

    const toggleLoggedState = () => setIsUserLogged(prevValue => !prevValue); // tworzymy funkcję to zmiany stanu


    return (
        <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
            {children}
        </AppContext.Provider>
    )
};



export default AppProvider;
