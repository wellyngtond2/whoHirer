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
export default function Login() {
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <input type="text" placeholder="E-Mail"></input>
        <input type="password" placeholder="Password"></input>
        <LoginButton>Login</LoginButton>
        <SignButton>Sign Up</SignButton>
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
