import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from '../logo-trackit.png'
import {Dados, StyledLink} from './style'
import Input from "../Input"
import Button from "../Button"
import axios from 'axios'
import Loader from "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function SignUpPage(){
    const[email, setEmail]= useState('')
    const[senha, setSenha] = useState('')
    const[name, setNome]= useState('')
    const[image, setImage]= useState('')
    const navigate = useNavigate();

    function handleSignUp(e){
        e.preventDefault();

        const user = {
            'email': email,
            'name': name,
            'image': image,
            'password': senha

        }

       const promisse =  axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', user)
       promisse.then(response => console.log(response),
    
       navigate("/")
       )
       promisse.catch(error => alert(error.response.data.message))
    }



    return(
        <>
        <img src={logo}/>
        <Dados>
            <form onSubmit={handleSignUp}>
                <Input type='email' placeholder="email" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
                <Input type='password' placeholder="senha" onChange={(e)=> setSenha(e.target.value)} value={senha}/>
                <Input type='text' placeholder="nome" onChange={(e)=> setNome(e.target.value)} value={name}/>
                <Input type='text' placeholder="foto" onChange={(e)=> setImage(e.target.value)} value={image}/>
                <Button type="submit">Cadastrar</Button>
            </form>
            <StyledLink to="/"> Já tem uma conta? Faça login!</StyledLink>
            
        </Dados>

        </>
        
    );
} export default SignUpPage

