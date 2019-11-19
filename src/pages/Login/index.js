import React from "react";
import {
  Container,
  Form,
  LoginButton,
  FacebookButton,
  LinkedinButton,
  FormSocialMedia,
  SignButton
} from "./styles";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <input type="text" placeholder="E-mail" required></input>
        <input type="password" placeholder="Password" required></input>
        <Link to="/">
          {" "}
          <LoginButton>Login</LoginButton>
        </Link>
        <Link to="/Signup">
          <SignButton>Sign Up</SignButton>
        </Link>
      </Form>
      <p>Login with</p>
      <FormSocialMedia>
        <FacebookButton>
          {" "}
          <AiFillFacebook />
          Facebook
        </FacebookButton>
        <LinkedinButton>
          <AiFillLinkedin />
          Linkedin
        </LinkedinButton>
      </FormSocialMedia>
    </Container>
  );
}
