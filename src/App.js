import LoginPage from "./Components/LoginPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpPage from "./Components/SignUp"
import TelaHoje from "./Components/TelaHoje"
import { useState } from "react";

function App(){
    const[token, setToken] = useState('');
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage setToken={setToken} />} />
                <Route path="/cadastro" element={<SignUpPage/>}  /> 
                <Route path="/hoje" element={<TelaHoje token={token} />}/>
            </Routes>
        </BrowserRouter>
    )
} export default App


