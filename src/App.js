import LoginPage from "./Components/LoginPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpPage from "./Components/SignUp"
import TelaHoje from "./Components/TelaHoje"
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/cadastro" element={<SignUpPage/>}  /> 
                <Route path="/hoje" element={<TelaHoje/>}/>
            </Routes>
        </BrowserRouter>
    )
} export default App


