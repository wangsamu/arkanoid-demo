import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtils";

import {
  Button,
  ButtonContainer,
  InputContainer,
  RootContainer,
  SignUpContainer,
} from "./SignUpStyled";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    //confirm that password matches
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }

    try {
      //check if user is authenticated with email and password
      const { user } =
        (await createAuthUserWithEmailAndPassword(email, password)) || {};
      if (!user) {
        throw new Error("Something went wrong!");
      }
      //create a user document with data introduced
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      refreshFormFields();
      navigate("/");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
      } else {
        console.log(error.message);
      }
    }
  };

  const refreshFormFields = () => {
    setFormFields(defaultFormField);
  };

  const formInputList = [
    {
      label: "Display name",
      inputOptions: {
        type: "text",
        name: "displayName",
        onChange: handleChange,
        value: displayName,
      },
    },
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
    {
      label: "Confirm Password",
      inputOptions: {
        type: "password",
        name: "confirmPassword",
        onChange: handleChange,
        value: confirmPassword,
      },
    },
  ];

  return (
    <RootContainer>
      <h1>👾 Welcome to React Arkanoid! 👾</h1>
      <SignUpContainer>
        <h2>Sign up in a just a few seconds!</h2>
        <form onSubmit={handleSubmit}>
          {formInputList.map((inputs) => (
            <InputContainer key={inputs.label}>
              <label>{inputs.label}</label>
              <input required {...inputs.inputOptions} />
            </InputContainer>
          ))}
          <ButtonContainer>
            <Button type="button" onClick={handleSubmit}>
              Sign Up
            </Button>
          </ButtonContainer>
        </form>
        <p>Already have an account?</p>

        <p>
          <Link to="/sign-in">Sign-in</Link> here
        </p>
      </SignUpContainer>
    </RootContainer>
  );
}

export default SignUp;
