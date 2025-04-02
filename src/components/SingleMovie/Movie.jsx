import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import './movie.css'

function Movie() {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [randomMovie, setRandomMovie] = useState({});
  const {
    movie_id = '',
    original_title = '',
    overview = '',
    vote_average = 0,
    vote_count = 0,
    poster_path = '',
    release_date = '',
  } = randomMovie?.[0] || {};

  const fetchMovie = async () => {
    try {
      const response = await fetch("https://jsonfakery.com/movies/random/1");

      if(!response.ok) {
        throw new Error(`HTTP Error: ${response.status} with message: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      setRandomMovie(data);
      setIsLoading(false);
    } catch (err) {
      setErrorMsg('An error occured while choosing a random movie');
      console.error(err);
    } 
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  console.log(movie_id);

  if(errorMsg) return <p className="text-danger text-center">{errorMsg}</p>

  if(isLoading) return <p className="text-primary text-center">Loading...</p>

  return (
    <Card id={movie_id}>
      <Card.Img variant="top" src={poster_path}/>
      <Card.Body>
        <Card.Title>{original_title}</Card.Title>
        <Card.Subtitle>Date de sortie: {release_date}</Card.Subtitle>
        <Card.Text>
          {overview}
        </Card.Text>
        <Card.Text>
          Note moyenne: {vote_average} ({vote_count} votes)
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Movie