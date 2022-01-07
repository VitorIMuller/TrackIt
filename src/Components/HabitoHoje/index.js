
import {ContainerHabitoToday, Title, TitleHabito, Subtitle,Sequencia, Recorde,Check} from "./style"
import { useState, useContext } from "react"
import UserContext from "../../Contexts/UserContext"
import styled from "styled-components"
import { useEffect } from "react/cjs/react.development"
import axios from "axios"


function HabitoHoje({habit}){
    const[concluido, setConcluido]=useState(habit.done)
    const {usuario, setnumeroDeHabitosConcluidos, numeroDeHabitosConcluidos, numeroDeHabitos, setProgresso,} = useContext(UserContext)


    function habitoCheck(){
        
        const config = {

            headers: {
                "Authorization": `Bearer ${usuario.token}`
            }
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, " ", config)
        promise.then(()=>{
            setConcluido(!concluido);
            setnumeroDeHabitosConcluidos(numeroDeHabitosConcluidos + 1);
                    habit.currentSequence++;
                    habit.highestSequence++;
        }
        )
        promise.catch(erro => alert(erro))
    }

    function habitoUncheck(){
        
        const config = {

            headers: {
                "Authorization": `Bearer ${usuario.token}`
            }
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, "" ,config)
        promise.then(()=>{
            setConcluido(!concluido);
            setnumeroDeHabitosConcluidos(numeroDeHabitosConcluidos - 1);
            habit.currentSequence--;
            habit.highestSequence--;

        })
        promise.catch(erro => alert(erro))

        setProgresso(Math.round((numeroDeHabitosConcluidos / numeroDeHabitos) * 100));
}

    return(

        <ContainerHabitoToday>
                        <div>
                            <TitleHabito>{habit.name}</TitleHabito>
                            <Subtitle>Sequencia atual:
                                {habit.currentSequence === 1 ?
                                    <Sequencia done={concluido}> {habit.currentSequence} dia</Sequencia>
                                    :
                                    <Sequencia done={concluido}> {habit.currentSequence} dias</Sequencia>
                                } 
                            </Subtitle>
                            <Subtitle>Seu recorde: 
                                {habit.highestSequence === 1 ?
                                    <Recorde recorde={habit.highestSequence === habit.currentSequence && habit.currentSequence === 1}> {habit.highestSequence} dia</Recorde>
                                    :
                                    <Recorde recorde={habit.highestSequence === habit.currentSequence && habit.currentSequence > 0}> {habit.highestSequence} dias</Recorde>
                                }
                            </Subtitle>
                        </div>
                        <Check  onClick={concluido ? ()=>habitoUncheck() : ()=>habitoCheck()} feito={concluido}>
                            <ion-icon name="checkmark-outline" ></ion-icon>
                        </Check>
                    </ContainerHabitoToday>                            
    )
}

export default HabitoHoje