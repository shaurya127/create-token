import styled from "styled-components";

export const CardMain = styled.div`
font-family:"Century Gothic";
font-style: normal;
font-weight: bold;
  width: 15rem;
  height: 20rem;
  background: linear-gradient(
    126.21deg,
    #9a31ed 0%,
    #ab3da8 14.24%,
    #9d34de 49.56%,
    #c33f6c 93.2%
  );
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin:1rem 0;
`;

export const CardPlain = styled.div`
font-family:"Century Gothic";
font-style: normal;
font-weight: bold;
  width: 15rem;
  height: 20rem;
  border: 1px solid white;
  border-opacity: 0.5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin:1rem 0;
`;