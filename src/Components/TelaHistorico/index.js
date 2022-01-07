import Menu from "../MenuBar"
import Topo from "../TopBar"
import {Title, Message, Container} from "./style"



function TelaHistorico(){
    
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