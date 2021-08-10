import { useState } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have and account</h2>
      <span className="description">Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          handleOnChange={handleOnChange}
          required
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          handleOnChange={handleOnChange}
          required
        />
        <div className="button">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
