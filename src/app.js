import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Wallet from "./components/wallet";
import Insert from "./components/insert";
import Remove from "./components/remove";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/carteira" element={<Wallet />} />
        <Route path="/carteira/insert" element={<Insert />} />
        <Route path="/carteira/remove" element={<Remove />} />
      </Routes>
    </BrowserRouter>
  );
}
