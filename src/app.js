import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import Login from "./components/login";
import SignUp from "./components/signup";
import Wallet from "./components/wallet";
import Insert from "./components/insert";
import Remove from "./components/remove";

export default function App() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, name, setName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/registers" element={<Wallet />} />
          <Route path="/carteira/insert" element={<Insert />} />
          <Route path="/carteira/remove" element={<Remove />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
