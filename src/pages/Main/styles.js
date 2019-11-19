import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #f7fff7;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
  margin: 80px auto;

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
