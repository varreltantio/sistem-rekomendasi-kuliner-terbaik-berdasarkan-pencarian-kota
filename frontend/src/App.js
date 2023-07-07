import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/result" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
