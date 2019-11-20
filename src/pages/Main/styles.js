import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  background: #f7fff7;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
  margin: 80px auto 10px auto;

  h1 {
    text-align: center;
  }
`;
export const Form = styled.form`
  padding: 0px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    border-radius: 1px;
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;
export const SubmitButton = styled.button`
  background: #ff6b6b;
  border: 0px;
  padding: 0 15px;
  margin-left: 5px;
  border-radius: 4px;
  svg {
    color: #fff;
  }
`;

export const ContainerEmployers = styled.div`
  max-width: 900px;
  background: #f7fff7;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
  flex-direction: row;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Employers = styled.div`
  list-style-type: none;
  width: 260px;
  height: 110px;
  margin: 10px;
  background: #fff;
  transition: all 0.25s ease-in;
  border-bottom: 5px solid transparent;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  padding: 5px;
  align-items: center;
  border-bottom: 3px solid #4ecdc4;
  transition: color 0.5s, border-bottom 0.5s ease-in;

  &:hover {
    border: none;
    border-bottom: 3px solid #ff6b6b;
  }

  &:hover h2 {
    color: #ff6b6b;
  }
  h2 {
    text-align: center;
    color: #4ecdc4;
  }
  a {
    color: #2867b2;
    text-decoration: none;
  }
`;

export const StarAverage = styled.span`
  font-size: 25px;
  display: flex;
  flex-direction: row;
  color: #ffe66d;
  font-weight: bold;

  margin-top: 5px;
  p {
    margin-left: 1px;
    color: #000;
  }
`;
