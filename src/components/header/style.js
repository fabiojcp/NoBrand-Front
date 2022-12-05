import styled from "styled-components";

export const Main = styled.header`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2vw;
  height: 8vh;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 40px 0px;
`;

export const Logo = styled.p`
  width: 20%;
  font-family: LogoFont;
  font-size: 6vh;
  cursor: pointer;
`;

export const Nav = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-around;
`;

export const Anchor = styled.a`
  font-weight: 500;

  :hover {
    cursor: pointer;
    text-shadow: 1px 1px 2px rgba(100, 100, 111, 0.8);
    transition: text-shadow 0.3s;
  }
`;

export const HeaderSearchBar = styled.form`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 60%;
  box-shadow: rgba(100, 100, 111, 0.5) 2px 0px 30px 0px;
  border-radius: 10px;
  border: 1px solid transparent;
  :focus-visible,
  :focus,
  :active,
  :target,
  :focus-within {
    transition: text-shadow 0.3s, border 0.3s;
    border: 1px solid #9f9f9f90;
    box-shadow: rgba(100, 100, 111) 2px 0px 30px 0px;
    outline: none;
  }
`;

export const HeaderSearchInput = styled.input`
  border: 0;
  border-radius: 10px;
  width: 90%;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  padding-left: 5%;
  font-family: Archivo;

  :focus-visible {
    outline: none;
  }
`;

export const HeaderSearchButton = styled.button`
  background-color: transparent;
  height: 4.8vh;
  width: 10%;
  font-size: 3vh;
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: #9f9f9f;
  :hover {
    cursor: pointer;
  }
`;

export const AnchorLogin = styled.a`
  font-weight: 500;

  :hover {
    cursor: pointer;
    text-shadow: 1px 1px 2px rgba(100, 100, 111, 0.8);
    transition: text-shadow 0.3s;
  }
`;

export const DropDownLogin = styled.form`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 40px 0px;
  width: 15vw;
  padding: 2.5vh 1.5vw;
  margin: 0 0 0 -7.5vw;
  gap: 2vh;
  transform: scale(0);
  border-radius: 10px;
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

export const ErrorSpan = styled.span`
  color: #00000060;
`;

export const DropDownContact = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 40px 0px;
  padding: 2.5vh 1.5vw;
  margin: 0 0 0 -0.5vw;
  gap: 4vh;
  border-radius: 10px;
  font-size: xx-large;
  cursor: auto;
  color: #00000040;
  cursor: pointer;

  :first-child :hover {
    color: #00000080;
  }
`;
