import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/movie/:imdbID' element={<MovieDetails />}/>
        <Route element={<PageNotFound />}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
