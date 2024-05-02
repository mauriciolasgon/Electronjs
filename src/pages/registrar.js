import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Registrar(props){
    const navigate = useNavigate();
    const axios = require('axios');
    const {setId ,setLoggedIn,fetchDataFromSpringBootAPI} = props;

    const [inputValues, setInputValues] = useState({
        nome: '',
        email: '',
        password: '',
        cep:'',
        id: ''
        // Adicione mais inputs conforme necessário
      });
      let data;

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        try {
            console.log("aq");
            const id=axios.post('http://localhost:8080/api/register', inputValues)
            .then(resposta=>{
                const id= resposta;
                console.log(id);
            });
            // Aqui você pode processar a resposta, se necessário
            
          } 
          catch (error) {
            // Trate os erros adequadamente
            console.error('Erro ao enviar dados para a API:', error);
          }
          props.setLoggedIn(true);
          console.log(inputValues.nome)
          data=fetchDataFromSpringBootAPI(inputValues.id)
          console.log(data.nome);
          props.setId(data.id);
          navigate('/main_window')
 
      };

      function Voltar(){
        navigate('/main_window');
      }

    return(
        <div >
            <button onClick={Voltar}>Voltar</button>
            <form onSubmit={handleSubmit}>
            <h1>Registre-se</h1>
            <div>
                <span>Nome</span>
                <input 
                name='nome' 
                placeholder='Digite seu nome' 
                value={inputValues.nome}
                onChange={handleInputChange}
                required 
                />
            </div>
            <div>
                <span>Email</span>
                <input 
                name='email' 
                placeholder='Digite seu email' 
                value={inputValues.email}
                onChange={handleInputChange}
                required 
                />
            </div>
            <div>
                <span>Senha</span>
                <input 
                name='password' 
                placeholder='Digite seu senha' 
                value={inputValues.password}
                onChange={handleInputChange}
                required 
                />
                <span>Confirmação de senha</span>
                <input 
                name='test_password' 
                placeholder='Digite seu senha' 
                value={inputValues.password}
                onChange={handleInputChange}
                required 
                />
            </div>
            <div>
                <span>CEP</span>
                <input 
                name='cep' 
                placeholder='Digite seu CEP' 
                value={inputValues.cep}
                onChange={handleInputChange}
                required 
                />
            </div>
            <div>
                <span>Cidade</span>
                <input placeholder='Digite sua cidade' required></input>
            </div>
            <div>
                <span>Bairro</span>
                <input placeholder='Digite sua bairro' required></input>
            </div>
            <div>
                <span>Rua</span>
                <input placeholder='Digite sua rua' required></input>
            </div>
            <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};