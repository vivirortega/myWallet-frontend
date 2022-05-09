import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../contexts/usercontext";
import insert from "./../assets/insert.png";
import remove from "./../assets/remove.png";
import logout from "./../assets/logout.png";

export default function Wallet() {
  const [newRegister, setNewRegister] = useState(false);
  const { name, token } = useContext(UserContext);
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <Container>
      <Division>
        <h1>Olá, {name}</h1>
        <img src={logout} />
      </Division>
      <Registers>
        <p>Não há registros de entrada ou saída</p>
      </Registers>
      <Deposits>
        <Insert>
          <Link to="/registers">
            <img src={insert} />
            <h2>Nova entrada</h2>
          </Link>
        </Insert>
        <Remove>
          <Link to="/registers">
            <img src={remove} />
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

`;
const Division = styled.div`
  display: flex;
  flex-direction: row;
  gap: 260px;
  

  h1 {
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    margin-bottom: 22px;
  }

  img {
    width: 23px;
    height: 24px;
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
  position: relative;

  h2 {
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    margin-left: 9px;
    word-break: break-all;
  }

  img {
    width: 21px;
    height: 21px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;
  }
`;
const Remove = styled.button`
  background-color: #a328d6;
  border-radius: 5px;
  border: none;
  width: 155px;
  height: 114px;
  position: relative;

  h2 {
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    margin-left: 9px;
    
  }
  img {
    width: 21px;
    height: 21px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;
  }
`;
