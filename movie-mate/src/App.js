import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<MovieList />} />
        <Route path='favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
