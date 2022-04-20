import star from '../Images/star.svg';

function ResultCard ({movie}) {

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}></img>
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <h3 className="title">{movie.title} ({movie.release_date ? movie.release_date.substring(0, 4) : '-'})</h3>
        <p className="language">Original language: {movie.original_language.toUpperCase()}</p>
        <div className="vote">
          <img className='starImg' style={{width: '24px', heigth: '24px'}} src={star} alt='star'></img>
            <div>
              <p style={{fontWeight: '700'}}>{movie.vote_average}/10</p>
              <p style={{fontSize: '10px', color: '#a4a4a4'}}>{movie.vote_count} votes</p>
            </div>
        </div>
        <p className='overview'>{movie.overview ? movie.overview : 'No description'}</p>
      </div>
    </div>
  )
}
export default ResultCard;