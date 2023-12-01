import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import FavoritesPage from './pages/FavoritesPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<h1>No page found</h1>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
