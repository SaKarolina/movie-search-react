import { useState } from 'react';
import ResultCard from './Components/ResultCard';
import ResultList from './Components/ResultList';
import './crud.scss';
import logo from './Images/movie.svg';
import logo2 from './Images/tmdb-logo.svg';

function App() {

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');

  const findData = (e) => {
    setSearch(e.target.value);
    if(e.target.value.length >= 2) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=9207b7bb9ad666f628ccc02d8fdd966e&language=en-US&query=${e.target.value}`
      )
      .then(res => res.json())
      .then((data) => {
        const dataCopy = data.results;
        setResults(dataCopy);
      })
      .catch(error => console.log(error)); 
    } else {
      setResults([]);
    }
  }

  const selectedMovie = (movie) => {
    setSelected(movie);
    setSearch(movie.title);
  }

  const close = () => {
    setResults([]);
  }

  return (
    <div className='app'>
      <div className='search'>
        <img className='tmdb-logo' src={logo2} alt='tmdb-logo'/>
        <img className='logo' src={logo} alt='logo'/>
        <input type='search' name='search' id='search' placeholder='Search for a movie' value={search} onChange={findData}/>
      </div>

      <div className='movies-list'>
        <ul className='results' onClick={close}>
          {results.length > 0 ? 
            results.slice(0, 8).map(movie => (
              <li key={movie.id}>
                <ResultList movie={movie} selectedMovie={selectedMovie}></ResultList>
              </li>
            ))
          : ''}     
        </ul>
      </div>
      
      {
        selected && <ResultCard movie={selected}></ResultCard>
      }
    </div>
  );
}

export default App;