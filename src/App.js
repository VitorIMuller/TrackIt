import LoginPage from "./Components/LoginPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpPage from "./Components/SignUp"
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/cadastro" element={<SignUpPage/>}  /> 
            </Routes>
        </BrowserRouter>
    )
} export default App


