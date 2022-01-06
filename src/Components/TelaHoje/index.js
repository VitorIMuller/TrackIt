import Menu from "../MenuBar"
import Topo from "../TopBar"
import {Container, Title} from "./style"
import { useState, useContext } from "react"
import UserContext from "../../Contexts/UserContext"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'



function TelaHoje(){
    const {token, setToken} = useContext(UserContext)
    const {usuario, setUsuario} = useContext(UserContext)
    console.log(token)
    console.log(usuario)
    
    console.log(dayjs())
    return(
        <>
            <Container>
                <Topo></Topo>
                <Title>{dayjs().locale('pt-br').format('dddd, DD/MM')}</Title>
                <Menu></Menu>
            </Container>
        </>
        
    )
}
export default TelaHoje



