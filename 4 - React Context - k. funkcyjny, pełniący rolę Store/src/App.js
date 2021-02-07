import React from 'react';
import './App.css';


import AppProvider from './AppContext';
import UserInfo from './UserInfo';
import Button from './Button';



const App = () => (
  <div>
    {/* teraz AppProvider za pomocą ReactContext pełni funkcję Stora a nie tylko kontekstu */}
    <AppProvider>

      <Button />
      {/* zakładając że chciałbyś użyć np jeszcze innego providera to tak samo go robisz i wstawiasz tutaj */}
      {/* <ConfigProvider> */}
      <UserInfo />
      {/* </ConfigProvider> */}

    </AppProvider>
  </div>
);





export default App;