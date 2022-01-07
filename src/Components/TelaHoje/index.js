import Menu from "../MenuBar"
import Topo from "../TopBar"
import {Container, ContainerHabitoToday, Message, Title, TitleHabito} from "./style"
import { useState, useContext } from "react"
import UserContext from "../../Contexts/UserContext"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import styled from "styled-components"
import { useEffect } from "react/cjs/react.development"
import axios from "axios"
import HabitoHoje from "../HabitoHoje"



function TelaHoje(){
    const {usuario, setUsuario, setnumeroDeHabitosConcluidos, numeroDeHabitosConcluidos, numeroDeHabitos, setNumeroDeHabitos} = useContext(UserContext)
    const {progresso, setProgresso} = useContext(UserContext)
    const[habito, setHabito] = useState([])
    const[concluido, setConcluido] = useState()
    
    


    function getHabitosHoje(){

        const config = {

            headers: {
                "Authorization": `Bearer ${usuario.token}`
            }
        }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(response => {
            setHabito(response.data);
            setnumeroDeHabitosConcluidos(response.data.filter(habito => habito.done).length);
            setNumeroDeHabitos(response.data.length)
            }
            )
            
    }
    useEffect((getHabitosHoje), [])

    return(
        <>
            <Container>
                <Topo></Topo>
                <Title>{dayjs().locale('pt-br').format('dddd, DD/MM')}</Title>
                <Message>{progresso === 0 ? "Nenhum hábito concluido ainda" : progresso + "% dos hábitos concluídos" }</Message>
                {habito.map((habit)=>
                    <HabitoHoje habit = {habit} key={habit.id}>
                    </HabitoHoje>
                )
                }
                <Menu></Menu>
            </Container>
        </>
        
    )
}
export default TelaHoje



