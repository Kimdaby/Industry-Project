import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';
import SocialPage from "./pages/SocialPage/SocialPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/tvshow' element={<SingleMoviePage/>}/>
      <Route path='/social' element={<SocialPage/>}/>
      <Route path='/user1' element={<SingleUserPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
