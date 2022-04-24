
function ResultList ({movie, selectedMovie}) {

  return (
    <div className='movie' onClick={() => selectedMovie(movie)}>
      <h4>{movie.title}</h4>
      <p style={{color: '#3d3c3c', fontSize: '13px'}}>{movie.vote_average} Rating, {movie.release_date ? movie.release_date.substring(0, 4) : '-'}</p>
    </div>
  )
}
export default ResultList;