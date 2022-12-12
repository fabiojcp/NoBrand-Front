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

export const DropDownLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 40px 0px;
  width: 15vw;
  padding: 2.5vh 1.5vw;
  margin: 2vh 4vw;
  gap: 2vh;
  border-radius: 10px;
`;

export const DropDownLoginButton = styled.button`
  background-color: rgba(100, 100, 111, 0.2);
  border: none;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  padding: 0.5vh 0.5vw;
  color: #00000040;
  cursor: pointer;

  :hover {
    color: #00000060;
  }
`;

export const DropDownLoginInput = styled.input`
  padding: 0.5vh 0.5vw;
  width: 90%;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  padding-left: 5%;
  font-family: Archivo;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 0px 3px 0px;
  border-radius: 10px;
  border: 1px solid transparent;
  :focus-visible,
  :focus,
  :active,
  :target,
  :focus-within {
    transition: text-shadow 0.3s, border 0.3s;
    border: 1px solid #9f9f9f90;
    box-shadow: rgba(100, 100, 111) 0px 0px 5px 0px;
    outline: none;
  }

  ::placeholder {
    color: rgba(100, 100, 111, 0.4);
  }

  ::-ms-input-placeholder {
    color: rgba(100, 100, 111, 0.4);
  }

  :-ms-input-placeholder {
    color: rgba(100, 100, 111, 0.4);
  }
`;

export const ErrorSpan = styled.span`
  color: #00000060;
`;
