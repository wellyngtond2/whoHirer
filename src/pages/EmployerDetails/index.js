import React from "react";

import { Container as ContainerEmployers } from "../../components/Employers/Container";
import { Employer } from "./styles";
import { AiFillStar, AiFillLinkedin } from "react-icons/ai";

const props = {
  _id: 1,
  name: "W Dev",
  linkedin: "https://www.linkedin.com/wdev",
  average: 4.5,
  feedBackEmail: true,
  feedBackInterview: false
};
export default function EmployerDetails() {
  return (
    <ContainerEmployers>
      <Employer>
        <h1>{props.name}</h1>
        <h3>
          <AiFillLinkedin />
          {props.linkedin}
        </h3>
        <h3>Feedback Email: {props.feedBackEmail ? "Sim" : "Não"}</h3>
        <h3>Feedback Enterview: {props.feedBackInterview ? "Sim" : "Não"}</h3>
        <h3>
          <AiFillStar />
          {props.average}
        </h3>
      </Employer>
    </ContainerEmployers>
  );
}
