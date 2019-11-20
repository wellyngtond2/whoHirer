import React from "react";
import { AiOutlineSearch, AiFillLinkedin, AiFillStar } from "react-icons/ai";
import {
  Container,
  Form,
  SubmitButton,
  Employers,
  StarAverage,
  ContainerEmployers
} from "./styles";

const employers = [
  {
    _id: 1,
    name: "W Dev",
    linkedin: "https://www.linkedin.com/wdev",
    average: 4.5
  },
  {
    _id: 1,
    name: "Cart",
    linkedin: "https://www.linkedin.com/cart",
    average: 4.0
  },
  {
    _id: 1,
    name: "Balloons",
    linkedin: "https://www.linkedin.com/Balloons",
    average: 4.8
  },
  {
    _id: 1,
    name: "Bad",
    linkedin: "https://www.linkedin.com/bad",
    average: 1.7
  }
];

function Main() {
  return (
    <>
      <Container>
        <h1>Who Hirer</h1>
        <Form>
          <input type="text" placeholder="Find your Hirer"></input>
          <SubmitButton>
            <AiOutlineSearch />
          </SubmitButton>
        </Form>
      </Container>
      <ContainerEmployers>
        {employers.map(emp => (
          <Employers>
            <h2>{emp.name}</h2>
            <a href={emp.linkedin}>
              <AiFillLinkedin />
              {emp.linkedin}
            </a>
            <StarAverage>
              <AiFillStar />
              <p>{emp.average}</p>
            </StarAverage>
          </Employers>
        ))}
      </ContainerEmployers>
    </>
  );
}

export default Main;
