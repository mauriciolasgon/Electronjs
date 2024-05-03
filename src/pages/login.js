import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const {setLoggedIn} = props;
  const axios = require('axios');

  const navigate = useNavigate()

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email: email,
        password: password
      });
      
 
      props.setLoggedIn(true);
      
      navigate('/main_window');
    
    } catch (error) {
      
      console.error('Erro ao fazer login:', error);
      
    }
  };


  function Voltar(){
    navigate('/main_window');
  }



  return (
    <div className={'mainContainer'}>
      <button onClick={Voltar}>Voltar</button>
      <div className={'titleContainer'}>
        <div><h1>Login</h1></div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
          type='password'
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={loginUser} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login
