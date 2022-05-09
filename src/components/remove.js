import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../contexts/usercontext";


export default function Remove() {
  const [remove, setRemove] = useState({ date: 0, value: "", description: "" });
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const API_URL = "http://localhost:5000/registers";
  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  function saveRemove(event) {
    event.preventDefault();

    const promise = axios.post(API_URL, remove, config);
    promise.then((response) => {
      navigate("/wallet");
    });
    promise.catch((err) => {
      console.log(err);
    });
  }

  return (
    <Container>
      <h1>Nova saída</h1>
      <Form onSubmit={saveRemove}>
        <Input
          type="number"
          placeholder="Valor"
          value={remove.value}
          required
          onChange={(e) => setRemove({ ...remove, value: e.target.value })}
        ></Input>
        <Input
          type="text"
          placeholder="Descrição"
          value={remove.description}
          required
          onChange={(e) => setRemove({ ...remove, value: e.target.value })}
        ></Input>
        <Submit type="submit">Salvar saída</Submit>
      </Form>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
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
