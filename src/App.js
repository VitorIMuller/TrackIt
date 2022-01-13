import LoginPage from "./Components/LoginPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpPage from "./Components/SignUp"
import TelaHoje from "./Components/TelaHoje"
import { useState } from "react";
import TelaHistorico from "./Components/TelaHistorico";
import TelaHabitos from "./Components/TelaHabitos";
import UserContext from "./Contexts/UserContext";


function App(){
    const[usuario, setUsuario]=useState()
    const[numeroDeHabitos, setNumeroDeHabitos] = useState(0);
    const[numeroDeHabitosConcluidos, setnumeroDeHabitosConcluidos] = useState(0);
    const[progresso, setProgresso] = useState(0)
    
    // function saveUsuario(response){
    //     setUsuario(response)
    //     localStorage.setItem("id", response.id);
    //     localStorage.setItem("image", response.image);
    //     localStorage.setItem("name", response.name);
    //     localStorage.setItem("token", response.token);
    // }
  
    
    
    return(
    <UserContext.Provider value={{
        setUsuario, 
        usuario, 
        numeroDeHabitos, 
        setNumeroDeHabitos, 
        numeroDeHabitosConcluidos, 
        setnumeroDeHabitosConcluidos,
        progresso,
        setProgresso,
        }}>
        <BrowserRouter>
            <Routes>
                    
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SignUpPage/>}  /> 
                    <Route path="/hoje" element={<TelaHoje/>}/>
                    <Route path="/historico" element={<TelaHistorico/>}/>
                    <Route path="/habitos" element={<TelaHabitos />}/>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    )
} export default App


