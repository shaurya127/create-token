import styled from 'styled-components'

export const TransparentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 35px 40px;
  width: 20%;
  height:40%;
<<<<<<< HEAD
  border:2px solid white;
  
=======
<<<<<<< HEAD
  margin-top:2.5rem;
  
=======

>>>>>>> dfca64ba1e0dfb352f9cd44cc93e285511406a63
>>>>>>> 8904b3eb35e59786bfd245057b9de8c16b342cde

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(224, 249, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  filter: drop-shadow(2px 16px 19px rgba(0, 0, 0, 0.09));
  backdrop-filter: blur(80px);

  border-radius: 12px;


  @media(max-width:1000px){
    width:fit-content;
    width:70%;
    justify-content: center;
  align-items: center;
    font:.5rem
  }
`;