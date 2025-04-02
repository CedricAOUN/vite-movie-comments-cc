import { Card } from "react-bootstrap";
import './movie.css'

function Movie({ movie }) {
  const {
    movie_id = '',
    original_title = '',
    overview = '',
    vote_average = 0,
    vote_count = 0,
    poster_path = '',
    release_date = '',
  } = movie || {};

  const formatDate = () => {
    const dateOnly = release_date.split(",")[1].trim();
    const [month, day, year] = dateOnly.split("/");
    return `${day}/${month}/${year}`
  }

  return (
    <Card id={movie_id}>
      <Card.Img variant="top" src={poster_path}/>
      <Card.Body>
        <Card.Title>{original_title}</Card.Title>
        <Card.Subtitle className="text-muted">Sortie le {formatDate()}</Card.Subtitle>
        <Card.Text className="py-2">
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