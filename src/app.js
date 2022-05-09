import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/usercontext";
import { useState } from "react";
import Login from "./components/login";
import SignUp from "./components/signup";
import Wallet from "./components/wallet";
import Insert from "./components/insert";
import Remove from "./components/remove";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken, name, setName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/registers" element={<Insert />} />
          <Route path="/registers" element={<Remove />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
