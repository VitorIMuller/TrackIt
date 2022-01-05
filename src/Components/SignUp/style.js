import styled from "styled-components"
import {Link} from 'react-router-dom'

const Dados = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`
const StyledLink = styled(Link)`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
`;
export{
    Dados,
    StyledLink
}