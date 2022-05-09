import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/usercontext";

export default function Insert() {
  const [insert, setInsert] = useState({ date: 0, value: "", description: "" });
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const API_URL = "http://localhost:5000/registers";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  function saveInsert(event) {
    event.preventDefault();

    const promise = axios.post(API_URL, insert, config);
    promise.then((response) => {
      navigate("/registers");
    });
    promise.catch((err) => {
      console.log(err);
      console.log(config);
    });
  }
  return (
    <Container>
      <h1>Nova entrada</h1>
      <Form onSubmit={saveInsert}>
        <Input
          type="number"
          placeholder="Valor"
          value={insert.value}
          required
          onChange={(e) => setInsert({ ...insert, value: e.target.value })}
        ></Input>
        <Input
          type="text"
          placeholder="Descrição"
          value={insert.description}
          required
          onChange={(e) =>
            setInsert({ ...insert, description: e.target.value })
          }
        ></Input>
        <Submit
          type="submit"
          onClick={() => setInsert({ ...insert, date: Date.now() })}
        >
          Salvar entrada
        </Submit>
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
