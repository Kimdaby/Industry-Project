import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';
import SocialPage from "./pages/SocialPage/SocialPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import ColllectionsPage from "./pages/CollectionsPage/ColllectionsPage";
import FriendPage from "./pages/FriendPage/FriendPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SocialPage/>}/>
      <Route path='/tvshow' element={<SingleMoviePage/>}/>
      <Route path='/social' element={<SocialPage/>}/>
      <Route path='/user1' element={<FriendPage/>}/>
      <Route path='/categories' element={<ColllectionsPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
