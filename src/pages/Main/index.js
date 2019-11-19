import React from "react";
import { MdSearch } from "react-icons/md";
import { Container, Form, SubmitButton } from "./styles";

function Main() {
  return (
    <Container>
      <h1>Who Hirer</h1>
      <Form>
        <input type="text" placeholder="Find your Hirer"></input>
        <SubmitButton>
          <MdSearch />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
