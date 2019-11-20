import React from "react";
import { Container, Form, CreateButton, IHaveButton } from "./styles";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <Form>
        <h1>Create Account</h1>
        <input id="signupFullName" type="text" placeholder="Full Name"></input>
        <input id="signupEmail" type="text" placeholder="E-mail"></input>
        <input
          id="signupPassword"
          type="password"
          placeholder="Password"
        ></input>
        <Link to="/">
          {" "}
          <CreateButton>Create</CreateButton>
        </Link>
        <Link to="/Login">
          {" "}
          <IHaveButton>I've Account</IHaveButton>
        </Link>
      </Form>
    </Container>
  );
}
