import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  max-height: 1000px;
  background: #f7fff7;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
  margin: 80px auto;

  button {
    border-radius: 3px;
    flex: 1;
    border: none;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s, box-shadow;
    font-weight: bold;
    width: 100%;

    &:hover {
      background: darken(#c06c84, 10%);
      box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
      transform: translate3d(0, -2px, 0);
    }
    &:active {
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
      transform: translate3d(0, 1px, 0);
    }
  }

  h1 {
    text-align: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex: 12;
  flex-direction: column;
  input {
    border-radius: 1px;
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    margin: 2px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export const CreateButton = styled.button`
  background: #ff6b6b;
  color: #fff;
`;

export const IHaveButton = styled.button`
  background: #ffe66d;
  color: #fff;
`;
