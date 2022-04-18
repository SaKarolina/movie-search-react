import Autocomplete from './Components/Autocomplete';
import './crud.scss';
import movie from './Images/movie.svg';

function App() {
  return (
    <div className='app'>
      <div className='search'>
        <img className='logo' src={movie} alt=''/>
        <input type='search' name='' id='' />
      </div>
          <Autocomplete></Autocomplete>

    </div>
  );
}

export default App;
