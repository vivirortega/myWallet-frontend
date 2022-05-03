import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function Insert() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function saveInsert(event) {
    event.preventDefault();
  }
  return (
    <Container>
      <h1>Nova entrada</h1>
      <Form onSubmit={saveInsert}>
        <Input
          type="number"
          placeholder="Valor"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
        ></Input>
        <Input
          type="text"
          placeholder="Descrição"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
        <Submit type="submit">Salvar entrada</Submit>
      </Form>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8c11be;
  height: 100vh;
  width: 100vw;

  h1 {
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    margin-left: 24px;
    margin-top: 25px;
    margin-bottom: 40px;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 13px;
`;

const Input = styled.input`
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  width: 326px;
  height: 58px;
  font-size: 20px;
  color: #000000;
  line-height: 23px;
  font-weight: 400;
`;

const Submit = styled.button`
  width: 326px;
  height: 46px;
  background-color: #a328d6;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;
