import styled from "styled-components";

export const MainWrapper = styled.div`
  width: auto;
  height: 100vh;
  padding: 0 20%;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  background-color: rgba(100, 100, 111, 0.2);
  border: none;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  padding: 0.5vh 0.5vw;
  color: #ffffff;
  cursor: pointer;

  :hover {
    color: #00000060;
  }
`;