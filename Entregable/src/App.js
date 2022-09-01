import { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {

  const [cantTotalApp, setCantApp] = useState(0)
  
  return (
    <div className="App">
      <Cabecera cantTotal = {cantTotalApp}/>
      <Listado setCantListado = {setCantApp} />
    </div>
  );
}

export default App;
