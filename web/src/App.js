import React, {useState, useEffect} from 'react';
import api from './services/api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//Estado: Informações mantidas pelo componente, Imutabilidade
//Propriedade: Informações que um componente pai passa pra um componente filho

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(()=> {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handledAddDev(data){
    console.log(data);
    const response = await api.post('/devs', data);
    console.log(response);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DevForm onSubmit={handledAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
