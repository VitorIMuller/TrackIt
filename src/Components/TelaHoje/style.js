import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`
const Title = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color: #126BA5;
    font-weight: 400;

    padding-top: 100px;
    padding-left: 20px;
`
const Message = styled.div`


    padding-left: 20px;
    margin-top: 10px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #BABABA;


`
export{
    Container,
    Title,
    Message
}