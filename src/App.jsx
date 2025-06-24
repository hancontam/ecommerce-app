import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar className="p-4" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
