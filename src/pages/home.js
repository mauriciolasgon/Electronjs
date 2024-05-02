import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './home.module.css'

export default function Home(props){
  const { loggedIn, email } = props

  const navigate = useNavigate()
  const onButtonClick = () => {
    if(loggedIn){
      props.setLoggedIn(false)
    }else{
      navigate('/login');
    }

  }

  return (
    <div className={styles.maincontainer}>
      <div className={styles.titlecontainer}>
        <h1>Wellcome!</h1>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  );
};


