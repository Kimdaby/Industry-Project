import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';
import SocialPage from "./pages/SocialPage/SocialPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/tvshow' element={<SingleMoviePage/>}/>
      <Route path='/social' element={<SocialPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
