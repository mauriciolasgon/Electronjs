import React from 'react'
import axios from 'axios';

export default function Registrar(){
    const axios = axios;
    return(
        <div>
            <h1>Registre-se</h1>
            <div>
                <span>Nome</span>
                <input placeholder='Digite seu nome' required></input>
            </div>
            <div>
                <span>Email</span>
                <input placeholder='Digite seu email' required></input>
            </div>
            <div>
                <span>Senha</span>
                <input placeholder='Digite sua senha' required ></input>
                <span>Confirmação de senha</span>
                <input placeholder='Digite sua senha novamente' required></input>
            </div>
            <div>
                <span>CEP</span>
                <input placeholder='Digite seu CEP' required></input>
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

        </div>
    );
};