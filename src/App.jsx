import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleMoviePage from "./pages/SingleMoviePage/SingleMoviePage";
import HBOFooter from "./components/Footer/Footer";
import HBOHeader from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <HBOHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tvshow" element={<SingleMoviePage />} />
      </Routes>
      <HBOFooter />
    </BrowserRouter>
  );
}

export default App;
