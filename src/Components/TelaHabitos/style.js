import styled from "styled-components"

const Title = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color: #126BA5;
    font-weight: 400;

    
    padding-left: 20px;
`
const Message = styled.div`


    padding-left: 20px;
    margin-top: 25px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #666666;


`
const Container = styled.div`

`
const ContainerTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 100px;
`
const AddHabito = styled.div`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 27px;
    font-weight: 700;
    color: white;

    margin-right: 20px;

    border-radius: 5px;

`
const TitleHabito = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color: #666666;
    font-weight: 400;

`
export{
    Title,
    Message,
    Container,
    ContainerTitle,
    AddHabito,
    TitleHabito
}