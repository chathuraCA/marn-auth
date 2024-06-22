import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Singin from "./Pages/Singin";
import Singup from "./Pages/Singup";
import Profile from "./Pages/Profile";
import Header from "./Components/Header";
export default function App() {
  return (
    <BrowserRouter>
{/** Header */}

<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
