import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './pages/home';
import { useEffect, useState } from 'react';
import Login from './pages/login';
import Registrar from './pages/registrar';

const mainDiv = document.getElementById('a');
const root = createRoot(mainDiv);

 export default function App(){
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main_window" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </Router>
    </div>
  );
};

root.render(<App />);


