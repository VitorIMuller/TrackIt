import Menu from "../MenuBar"
import Topo from "../TopBar"
import UserContext from "../../Contexts/UserContext"
import { useContext } from "react"
import {Title, Message, Container} from "./style"



function TelaHistorico(){
    const {token, setToken} = useContext(UserContext)
    const {usuario, setUsuario} = useContext(UserContext)
    console.log(token)

    
    return(
        <Container>
            <Topo></Topo>
            <Title>Histórico</Title>
            <Message>Em breve você poderá ver o histórico dos seus hábitos aqui!</Message>
            <Menu></Menu>
        </Container>
        
        
    )
}
export default TelaHistorico