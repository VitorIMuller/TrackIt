import Menu from "../MenuBar"
import Topo from "../TopBar"
import {Container, Message, Title} from "./style"
import { useState, useContext } from "react"
import UserContext from "../../Contexts/UserContext"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'



function TelaHoje(){
    const {usuario, setUsuario} = useContext(UserContext)
    const {progresso} = useContext(UserContext)
    return(
        <>
            <Container>
                <Topo></Topo>
                <Title>{dayjs().locale('pt-br').format('dddd, DD/MM')}</Title>
                <Message>{progresso === 0 ? "Nenhum hábito concluido ainda" : progresso + "% dos hábitos concluídos" }</Message>
                <Menu></Menu>
            </Container>
        </>
        
    )
}
export default TelaHoje



