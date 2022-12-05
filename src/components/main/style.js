import styled from "styled-components";

export const Main = styled.main`
display: grid;
grid-template-columns: auto auto auto auto auto;
grid-template-rows: auto auto;
height: 70vh;
width: 90vw;
padding: 4vh 5vw;
`

export const ChangeItensPlusButton = styled.p`
color: #000000;
background-color: #ffffff60;
position: absolute;
right: 0;
margin: 30vh 2vw 0 0;
font-size: 5vh;
width: 8vh;
height: 8vh;
padding: 0;
border-radius: 100%;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 40px 0px;
display: flex;
align-items: center;
justify-content: center;
`

export const ChangeItensDecreaseButton = styled.p`
color: #000000;
background-color: #ffffff;
position: absolute;
left: 0;
margin: 30vh 2vw 0 0;
font-size: 5vh;
width: 8vh;
height: 8vh;
padding: 0;
border-radius: 100%;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 40px 0px;
display: flex;
align-items: center;
justify-content: center;
`