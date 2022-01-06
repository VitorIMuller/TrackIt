import { useState, useContext } from "react"
import logo from '../logo-trackit.png'
import {Dados, StyledLink} from './style'
import axios from 'axios'
import UserContext from "../../Contexts/UserContext"
import Input from '../Input';
import Button from "../Button"
import { useNavigate } from "react-router-dom";
// import Loading from "../Loading"


function LoginPage(){
    const {usuario, setUsuario} = useContext(UserContext)
    const {token, setToken} = useContext(UserContext)
    const[email, setEmail]= useState('')
    const[senha, setSenha] = useState('')
    // const[isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    function handleSignUp(e){
        e.preventDefault();

        const user = {
            'email': email,
            'password': senha
        }

        const promise =  axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', user);
                promise.then( response=>{
                    setUsuario(response.data);
                    setToken(response.data.token)
                    navigate('/hoje')
                } 
                );
                promise.catch(()=> 
                    alert('Usuário e/ou Senha Inválidos')
                );
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
                <Button type="submit">
                    {/* {isLoading==true?
                    <Loading/> : 'Entrar'
                    } */}
                    Entrar
                    
                </Button>
            </form>
            <StyledLink to="/cadastro"> Não tem uma conta? cadastre-se!</StyledLink>
        </Dados>

        </>
        
    );
} export default LoginPage


