import Menu from "../MenuBar"
import Topo from "../TopBar"
import {Title, Message, Container, ContainerTitle, AddHabito} from "./style"
import { useState } from "react"

function TelaHoje({token}){
    console.log(token)
    
    const[habito, setHabito] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!")
    return(
        <>
            <Container>
                <Topo></Topo>
                <ContainerTitle>
                    <Title>Meus Hábitos</Title>
                    <AddHabito>+</AddHabito>
                </ContainerTitle>
                <Message>{habito}</Message>
                <Menu></Menu>
        </Container>
        </>
        
    )
}
export default TelaHoje



