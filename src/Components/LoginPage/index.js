import { useState } from "react"
import logo from '../logo-trackit.png'
import {Dados, StyledLink} from './style'

import Input from '../Input';
import Button from "../Button"


function LoginPage(){
    const[email, setEmail]= useState('')
    const[senha, setSenha] = useState('')
    return(
        <>
        <img src={logo}/>
        <Dados>
            <form>
                <Input type='email' placeholder="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <Input type='password' placeholder="senha" onChange={(e)=> setSenha(e.target.value)} value={senha}/>
            </form>
            <Button className="botao" onClick={()=> alert(`${email} ${senha}`)}>Entrar</Button>
            <StyledLink to="/cadastro"> Não tem uma conta? cadastre-se!</StyledLink>
        </Dados>

        </>
        
    );
} export default LoginPage


