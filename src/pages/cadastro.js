import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cadastro.module.css';
import axios from 'axios';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCEPChange = (e) => {
    const cep = e.target.value;
    setFormData(prevState => ({
      ...prevState,
      cep
    }));

    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          const { logradouro, bairro, localidade: cidade, uf: estado } = response.data;
          setFormData(prevState => ({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envie os dados do formulário para o servidor
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className={styles.maincontainer}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" required />
        </div>
        <div>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha" required />
        </div>
        <div>
          <input type="text" name="cep" value={formData.cep} onChange={handleCEPChange} placeholder="CEP" required />
        </div>
        <div>
          <input type="text" name="logradouro" value={formData.logradouro} onChange={handleChange} placeholder="Logradouro" required />
        </div>
        <div>
          <input type="text" name="numero" value={formData.numero} onChange={handleChange} placeholder="Número" required />
        </div>
        <div>
          <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} placeholder="Complemento" />
        </div>
        <div>
          <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Bairro" required />
        </div>
        <div>
          <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Cidade" required />
        </div>
        <div>
          <input type="text" name="estado" value={formData.estado} onChange={handleChange} placeholder="Estado" required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <div className={styles.inputContainer}>
        <button><Link to="/cadastro" className={styles.linkclear}>Cadastrar</Link></button>
      </div>
      <div className={styles.inputContainer}>
        <button><Link to="/main_window" className={styles.linkclear}>Voltar</Link></button>
      </div>
    </div>
  );
};

export default Cadastro;
