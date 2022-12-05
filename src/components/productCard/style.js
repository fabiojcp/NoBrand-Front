import styled from "styled-components";

export const Main = styled.div`
  height: ${(props) => props.windowwidth*1.4}px;
  width: ${(props) => props.windowwidth}px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-bottom: 2vh;
  border-radius: 10px;
`;

export const Image = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(${(props) => props.backgound});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => props.windowwidth}px;
  width: ${(props) => props.windowwidth}px;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 8px 6px -4px;
  margin: 0 0 4px 0;
`;

export const OriginalValue = styled.p`
  margin: 0;
  text-decoration: line-through;
  font-size: ${(props) => props.windowwidth/18}px;
  margin: 0 0 0 5%;
  color: red;
`;

export const DiscountValue = styled.p`
  margin: 0;
  margin: 0 0 0 5%;
`;

export const Discount = styled.p`
  margin: 0;
  color: green;
  font-weight: 1000;
  margin: 0 0 0 5%;
`;

export const Title = styled.p`
  margin: 0;
  margin: 0 0 0 5%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextArea = styled.div`

`
