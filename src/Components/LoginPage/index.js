import { useState } from "react"
import logo from '../logo-trackit.png'
import {Dados, StyledLink} from './style'
import axios from 'axios'

import Input from '../Input';
import Button from "../Button"
import { useNavigate } from "react-router-dom";


function LoginPage(){
    const[email, setEmail]= useState('')
    const[senha, setSenha] = useState('')
    const navigate = useNavigate();

    function handleSignUp(e){
        e.preventDefault();

        const user = {
            'email': email,
            'password': senha
        }

       const promisse =  axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', user)
       promisse.then(response => console.log(response),
       navigate('/hoje')
       )
       promisse.catch(() => alert('Usuário e/ou Senha Inválidos'))
    }

    return(
        <>
        <img src={logo}/>
        <Dados>
            <form onSubmit={handleSignUp}>
                <Input 
                type='email' 
                placeholder="email" 
                onChange={(e)=> setEmail(e.target.value)} 
                value={email} 
                required/>
                <Input 
                type='password' 
                placeholder="senha" 
                onChange={(e)=> setSenha(e.target.value)} 
                value={senha}/>
                <Button type="submit">Entrar</Button>
            </form>
            <StyledLink to="/cadastro"> Não tem uma conta? cadastre-se!</StyledLink>
        </Dados>

        </>
        
    );
} export default LoginPage


