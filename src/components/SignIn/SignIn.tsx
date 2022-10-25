import { useState } from "react";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebaseUtils";
import {
  RootContainer,
  SignInContainer,
  ButtonContainer,
  Button,
  InputContainer,
  GoogleButton,
} from "./SignInStyled";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";

const defaultFormField = {
  email: "",
  password: "",
};

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      // check if user is authenticated with email and password
      const { user } =
        (await signInAuthWithEmailAndPassword(email, password)) || {};
      if (!user) {
        throw new Error("Invalid credentials!");
      }
      console.log("Logged in successfully!");
      refreshFormFields();
      navigate("/");
    } catch (error: any) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        alert("invalid credentials!");
      }
      console.log(error.message);
    }
  };

  const refreshFormFields = () => {
    setFormFields(defaultFormField);
  };

  const formInputList = [
    {
      label: "Email",
      inputOptions: {
        type: "email",
        name: "email",
        onChange: handleChange,
        value: email,
      },
    },
    {
      label: "Password",
      inputOptions: {
        type: "password",
        name: "password",
        onChange: handleChange,
        value: password,
      },
    },
  ];

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    // <button onClick={signInwithGooglePopUp}>Sign in with Google</button>
    <RootContainer>
      <h1>👾 Welcome to React Arkanoid! 👾</h1>
      <SignInContainer>
        <h2>I already have an account</h2>
        <form onSubmit={handleSubmit}>
          {formInputList.map((inputs: any) => {
            return (
              <InputContainer key={inputs.label}>
                <label>{inputs.label}</label>
                <input required {...inputs.inputOptions} />
              </InputContainer>
            );
          })}
          <ButtonContainer>
            <Button type="button" onClick={handleSubmit}>
              Sign In
            </Button>
          </ButtonContainer>
          <p>- or -</p>
          <ButtonContainer>
            <GoogleButton type="button" onClick={logGoogleUser}>
              <GoogleLogo />
              <span>Sign-in with Google</span>
            </GoogleButton>
          </ButtonContainer>
        </form>
        <p>Don't have an account yet?</p>
        <p>
          <Link to="/sign-up">Sign-up</Link> here
        </p>
      </SignInContainer>
    </RootContainer>
  );
}

export default SignIn;
