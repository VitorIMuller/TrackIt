import styled from "styled-components"
import img from '../logo-trackit.png'

function Topo(){
    return(
       <Header>
           <Title>TrackIt</Title>
           <Imagem src={img}></Imagem>
       </Header>
    )
}
export default Topo

const Header = styled.div`
    width: 375px;
    height: 70px;

    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    

`
const Title = styled.div`
    font-size: 40px;
    font-weight: 400;
    color: white;
    margin-left: 20px;
`
const Imagem = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 98px;

    margin-right: 20px;
`