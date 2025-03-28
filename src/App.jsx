import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='tvshow' element={<SingleMoviePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
