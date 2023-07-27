import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 200px;
  width: 300px;
  gap: 15px;
`;

export const CardBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const CardBtn = styled.button`
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;
