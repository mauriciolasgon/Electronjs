import React from 'react'
import { useNavigate } from 'react-router-dom'
const axios = require('axios');




export default function Home(props){
  const {loggedIn ,fetchDataFromSpringBootAPI,Id} = props
  let data=0;
  
  if(loggedIn){
    
    data= fetchDataFromSpringBootAPI(props.Id);
    
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
        <div>Welcome!</div>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClickLogIn}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        <input 
            className={'inputButton'}
            type="button"
            onClick={onButtonClickRegister}
            value={'Registrar'}
        />
        {loggedIn ? <div>Your email address is {data.nome}</div> : <div />}
      </div>
      
    </div>
  );
};


