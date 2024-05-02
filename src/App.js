import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './pages/home';
import { useEffect, useState } from 'react';
import Login from './pages/login';
import Registrar from './pages/registrar';
import axios from 'axios';

const mainDiv = document.getElementById('a');
const root = createRoot(mainDiv);




 export default function App(){
  const [loggedIn, setLoggedIn] = useState(false);
  const [Id, setId] = useState('');

  async function fetchDataFromSpringBootAPI(Id) {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${id}`);
      // Aqui você pode processar os dados recebidos
      console.log(response.data);
    } catch (error) {
      // Trate os erros adequadamente
      console.error('Erro ao obter dados da API:', error);
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main_window" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} Id={Id} fetchDataFromSpringBootAPI={fetchDataFromSpringBootAPI} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}  />} />
          <Route path="/registrar" element={<Registrar setLoggedIn={setLoggedIn} setId={setId} fetchDataFromSpringBootAPI={fetchDataFromSpringBootAPI} />} />
        </Routes>
      </Router>
    </div>
  );
};

root.render(<App />);


