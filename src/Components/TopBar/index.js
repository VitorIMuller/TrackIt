import { useContext } from "react/cjs/react.development"
import styled from "styled-components"
import UserContext from "../../Contexts/UserContext"
import img from '../logo-trackit.png'

function Topo(){

    const{usuario, setUsuario} = useContext(UserContext)


    return(
       <Header>
           <Title>TrackIt</Title>
           <Imagem src={usuario.image}></Imagem>
       </Header>
    )
}
export default Topo

const Header = styled.div`
    width: 100%;
    height: 70px;

    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    
`
const Title = styled.div`
    
    font-size: 40px;
    font-weight: 400;
    color: white;
    margin-left: 20px;
    font-family: 'Playball', cursive;
    
`
const Imagem = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 98px;

    margin-right: 20px;
`