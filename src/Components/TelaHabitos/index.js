import Menu from "../MenuBar"
import Topo from "../TopBar"
import {Title, Message, Container, ContainerTitle, AddHabito} from "./style"
import {useState, useContext} from "react"
import UserContext from "../../Contexts/UserContext"
import styled from "styled-components"
import Input from "../Input"
import Loading from "../Loading"
import axios from "axios"


function TelaHabitos(){
    const[habito, setHabito] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!")
    const[adicionarHabito, setAdicionarHabito] = useState(false);
    const[nomeHabito, setNomeHabito]=useState()
    const {token, setToken} = useContext(UserContext)
    console.log(token)
    console.log(nomeHabito)


    const [day0, setDay0] = useState(false);
    const [day1, setDay1] = useState(false);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);
    const [day6, setDay6] = useState(false);
    const [button, setButton] = useState(true);
    const DiasSelecionados = [];

    const weekdays = [
        {
            id: 0,
            name: "D",
            day: day0,
            setDay: setDay0
        },
        {
            id: 1,
            name: "S",
            day: day1,
            setDay: setDay1
        },
        {
            id: 2,
            name: "T",
            day: day2,
            setDay: setDay2
        },
        {
            id: 3,
            name: "Q",
            day: day3,
            setDay: setDay3
        },
        {
            id: 4,
            name: "Q",
            day: day4,
            setDay: setDay4
        },
        {
            id: 5,
            name: "S",
            day: day5,
            setDay: setDay5
        },
        {
            id: 6,
            name: "S",
            day: day6,
            setDay: setDay6
        }
    ]

    weekdays.map((weekday)=>weekday.day ? DiasSelecionados.push(weekday.id) : "")


    function postHabit(){
        setButton(false);
        const body = {
            name: nomeHabito,
            days: DiasSelecionados
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            } 
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        promise.then(console.log("oi"),
        setButton(true))
        promise.catch(console.log("erro"))
    }

    return(
        <>
            <Topo></Topo>
                <ContainerTitle>
                    <Title>Meus Hábitos</Title>
                    <AddHabito onClick={()=> setAdicionarHabito(true) }>+</AddHabito>
                </ContainerTitle>
                    {adicionarHabito ?
                    <ContainerAddHabit>

                        <Input placeholder="Nome do hábito" value={nomeHabito} onChange={(e)=>setNomeHabito(e.target.value)} disabled={!button} ></Input> 
                        <Weekdays>
                            {weekdays.map((weekday, i)=>
                            button?
                            <Weekday 
                            isSelected={weekday.day} 
                            onClick={()=>weekday.setDay(!weekday.day)} 
                            key={i}
                            >
                                {weekday.name}
                            </Weekday> 
                            :
                            <Weekday 
                            isSelected={weekday.day} 
                            key={i} 
                            > {weekday.name}
                            </Weekday>
                            )}
                        </Weekdays>

                        <ContainerButtons>
                            <StyledButton
                                fontSize={16}
                                width={84}
                                height={35}
                                theme="white"
                                onClick={()=>setAdicionarHabito(false)}>
                                Cancelar
                            </StyledButton>
                            {button ?
                                <StyledButton
                                    fontSize={16}
                                    width={84}
                                    height={35}
                                    onClick={postHabit}>
                                Salvar
                                </StyledButton>
                                :
                                <StyledButton
                                
                                width={84}
                                height={35}>
                                <Loading height={35} width={43} />
                                </StyledButton>
                        
                            
                            }


                            
                        </ContainerButtons>
  
                    </ContainerAddHabit>
                    
                    
                    
                    
                    :
                    ""
                    }
                <Message>{habito}</Message>
            <Menu></Menu>
        </>
        
    )
}
export default TelaHabitos

const Weekday = styled.div`
    height: 28px;
    width: 28px;
    border-radius: 5px;
    border: 1px solid ${props => props.isSelected ? "#CFCFCF" : "#D4D4D4"};
    background-color: ${props => props.isSelected ? "#CFCFCF" : "#FFF"};
    color: ${props => props.isSelected ? "#FFF" : "#DBDBDB"};
    font-family: Lexend Deca;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;

    &:first-child {
        margin-left: 0px;
    }
`;

const Weekdays = styled.div`
    height: 30px;
    border-radius: 5px;
    display: flex;
    margin: 4px 0px;
`;

const ContainerAddHabit = styled.div`
margin-top: 35px;
`

const ContainerButtons = styled.div`
    display: flex;
    margin-top: 24px;
    margin-left: calc(100% - 184px);
    gap: 10px;
`;

const StyledButton = styled.button`
    width: ${props => props.width ? `${props.width}px` : "100%"};
    height: ${props => props.height ? `${props.height}px` : "45px"};
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme === "white" ? "#FFF" : "#52B6FF"};
    font-family: Lexend Deca;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : "20px"};
    color: ${props => props.theme === "white" ? "#52B6FF" : "#FFF"};
    margin: 4px 0px;
    opacity: ${props => props.loading ? 0.7 : 1.0};
    display: flex;
    align-items: center;
    justify-content: center;

`;
