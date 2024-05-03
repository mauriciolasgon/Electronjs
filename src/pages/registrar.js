import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Registrar(props){
    const navigate = useNavigate();
    const axios = require('axios');
    const {setId ,setLoggedIn,fetchDataFromSpringBootAPI} = props;

    const [inputValues, setInputValues] = useState({
        cep:'',
        email: '',
        nome: '',
        password: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
        // Adicione mais inputs conforme necessário
      });
      
      const handleCEPChange = (e) => {
        const cep = e.target.value;
        setInputValues(prevState => ({
          ...prevState,
          cep
        }));
    
        if (cep.length === 8) {
          axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
              const { logradouro, bairro, localidade: cidade, uf: estado } = response.data;
              setInputValues(prevState => ({
                ...prevState,
                logradouro,
                bairro,
                cidade,
                estado
              }));
            })
            .catch(error => {
              console.error('Erro ao obter o endereço:', error);
            });
        }
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        try {
           
            axios.post('http://localhost:8080/api/register', inputValues)
            .then(response => {
                // Se a solicitação for bem-sucedida, você pode acessar o id retornado
                const id = response.data;
                // Faça algo com o id retornado, se necessário
                props.setId(id);
                props.setLoggedIn(true);
                fetchDataFromSpringBootAPI(id);
                navigate("/main_window");
              })
              .catch(error => {
                // Se ocorrer um erro durante a solicitação, você pode tratá-lo aqui
                console.error('Erro ao fazer a solicitação:', error);
              });
  
            // Aqui você pode processar a resposta, se necessário
            
          } 
          catch (error) {
            // Trate os erros adequadamente
            console.error('Erro ao enviar dados para a API:', error);
          }
          
          
          
 
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
                type='password'
                required 
                />
            </div>
            <div>
                <span>CEP</span>
                <input 
                name='cep' 
                placeholder='Digite seu CEP' 
                value={inputValues.cep}
                onChange={handleCEPChange}
                required 
                />
            </div>
            <div>
                <span>Estado</span>
                <input 
                placeholder='Digite seu estado'
                nome='estado' 
                value={inputValues.estado}
                onChange={handleInputChange}
                required 
                />
            </div>
            <div>
                <span>Cidade</span>
                <input 
                placeholder='Digite sua cidade'
                nome='cidade' 
                value={inputValues.cidade}
                onChange={handleInputChange}
                required 
                />
            </div>
            <div>
                <span>Bairro</span>
                <input 
                placeholder='Digite seu bairro'
                nome='bairro' 
                value={inputValues.bairro}
                onChange={handleInputChange}
                required 
                />
            </div>
            <div>
                <span>Rua</span>
                <input 
                placeholder='Digite sua rua'
                nome='logradouro' 
                value={inputValues.logradouro}
                onChange={handleInputChange}
                required 
                />
            </div>

            <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};