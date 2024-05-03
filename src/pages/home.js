import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
const axios = require('axios');




export default function Home(props){
  const {loggedIn ,fetchDataFromSpringBootAPI,Id} = props
  const [data, setData] = useState(null);
  const [numb,setNumb] = useState(1);
 
  
  if(loggedIn && numb==1 ){
    setNumb(2);
    
    fetchDataFromSpringBootAPI(props.Id)
    .then(response => {
      // Se a solicitação for bem-sucedida, você pode acessar o id retornado
      setData(response)
      // Faça algo com o id retornado, se necessário
      console.log("OK");
    })
    .catch(error => {
      // Se ocorrer um erro durante a solicitação, você pode tratá-lo aqui
      console.error('Erro ao fazer a solicitação:', error);
    });
    
  }

  const navigate = useNavigate()
  const onButtonClickLogIn = () => {
    if(loggedIn){
      props.setLoggedIn(false)
    }else{
      navigate('/login');
    }
  }

    const onButtonClickRegister = () => {
      if(loggedIn){
        props.setLoggedIn(false)
      }else{
        navigate('/registrar');
      }

  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div><h1>Seja bem-vindo</h1></div>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClickLogIn}
          value={loggedIn ? 'Log out' : 'Log in'}
        />

        {loggedIn && data ? <div>Seja bem vindo {data.email}</div> : <div> 
        <input 
            className={'inputButton'}
            type="button"
            onClick={onButtonClickRegister}
            value={'Registrar'}
        />
        </div> }
      </div>
      
    </div>
  );
};


