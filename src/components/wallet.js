import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Wallet() {
  const { name, user } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${user}`,
    },
  };

  return (
    <Container>
      <h1>Olá, {name}</h1>
      <Registers>
        <p>Não há registros de entrada ou saída</p>
      </Registers>
      <Deposits>
        <Insert>
          <Link to="/insert">
            <h2>Nova entrada</h2>
          </Link>
        </Insert>
        <Remove>
          <Link to="/registers/remove">
            <h2>Nova saída</h2>
          </Link>
        </Remove>
      </Deposits>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;

  h1 {
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    margin-bottom: 22px;
  }
`;

const Registers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  width: 326px;
  height: 446px;
  font-size: 20px;
  color: #868686;
  text-align: center;
`;
const Deposits = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 13px;
`;

const Insert = styled.button`
  background-color: #a328d6;
  border-radius: 5px;
  border: none;
  width: 155px;
  height: 114px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;

  h2 {
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }
`;
const Remove = styled.button`
  background-color: #a328d6;
  border-radius: 5px;
  border: none;
  width: 155px;
  height: 114px;

  h2 {
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }
`;
