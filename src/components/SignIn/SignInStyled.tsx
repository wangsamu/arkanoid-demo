import styled from "styled-components";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  h1 {
    text-align: center;
    color: white;
    margin-bottom: 6rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 3.5rem;
  padding: 0.35em 1.2em;
  border: 0.2rem solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  font-family: inherit;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background-color: transparent;

  :hover {
    color: #000000;
    background-color: #ffffff;
  }
  /* @media all and (max-width:30em){
     a.button1{
      display:block;
      margin:0.4em auto;
     }
  }  */
`;

const GoogleButton = styled(Button)`
  background-color: whitesmoke;
  color: black;

  svg {
    width: 2.5rem;
    margin-right: 0.3rem;
  }

  :hover {
    color: white;
    background-color: transparent;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 1rem;

  label {
    color: white;
  }

  input {
    width: 16vw;
    height: 1.7rem;
    background-color: black;
    color: white;
    border: 0.2rem white solid;

    /* :selected {
      width: 20vw;
      background-color: black;
      color: white;
      border: 0.3rem white solid;
    } */
  }
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  border: 0.3rem white solid;
  padding: 2rem;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: white;
  }

  h3 {
    margin: 20px;
    color: white;
  }

  p {
    text-align: center;
    margin: 20px;
    color: white;
  }

  a {
    color: gray;
  }
`;

export {
  RootContainer,
  SignInContainer,
  ButtonContainer,
  Button,
  InputContainer,
  GoogleButton,
};
