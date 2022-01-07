import { Link } from "react-router-dom"
import styled from "styled-components"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";


function Menu(){

    const {progresso, setProgresso, numeroDeHabitos, numeroDeHabitosConcluidos } = useContext(UserContext)
    
    setProgresso(Math.round((numeroDeHabitosConcluidos/numeroDeHabitos)*100));
    


    return(
       <Header>
           <Option to="/habitos">Hábitos</Option>
           <Link to={'/hoje'}>
            <CircularProgressbar 
            minValue={0}
            maxValue={100}
            value={progresso}
            text="Hoje"
            background={true}
            styles={buildStyles({
                textsize: '18px',
                textColor: 'white',
                backgroundColor: '#52B6FF',
                pathColor: "white",
                trailColor: '#52B6FF',
                })}
                />
            </Link>
           <Option to='/historico'>Histórico</Option>
       </Header>
    )
}
export default Menu

const Header = styled.div`
    width: 100%;
    height: 100px;

    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;

    padding-bottom: 20px;
    
    font-family: 'Lexend Deca', sans-serif;
   

    
`
const Option = styled(Link)`
    font-size: 18px;
    font-weight: 400;
    color: white;
    margin-left: 35px;
    margin-right: 35px;
    padding-top: 40px;
  
    font-family: 'Lexend Deca', sans-serif;
`
