
import React from 'react';
import { Provider } from "react-redux"; // для биндинга redux на react

import { store } from "../redux/store/store.js";


function App() {
  return <Provider store={store}><App /></Provider>; 
}

export default App;