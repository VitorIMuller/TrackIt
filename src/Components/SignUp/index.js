import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../logo-trackit.png'
import {Dados, StyledLink} from './style'
import Input from "../Input"
import Button from "../Button"


function SignUpPage(){
    const[email, setEmail]= useState('')
    const[senha, setSenha] = useState('')
    const[nome, setNome]= useState('')
    const[image, setImage]= useState('')


    return(
        <>
        <img src={logo}/>
        <Dados>
            <form>
                <Input type='email' placeholder="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <Input type='password' placeholder="senha" onChange={(e)=> setSenha(e.target.value)} value={senha}/>
                <Input type='text' placeholder="nome" onChange={(e)=> setNome(e.target.value)} value={nome}/>
                <Input type='text' placeholder="foto" onChange={(e)=> setImage(e.target.value)} value={image}/>
            </form>
            <Button className="botao" onClick={()=> alert(`${email} ${senha}`)}>Cadastrar</Button>
            <StyledLink to="/"> Já tem uma conta? Faça login!</StyledLink>
            
        </Dados>

        </>
        
    );
} export default SignUpPage

