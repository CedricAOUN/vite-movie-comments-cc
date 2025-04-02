import { Card } from "react-bootstrap"

function Movie({ title, releaseDate, imgURL, desc, averageRating, totalVotes }) {
  return (
    <Card>
      <Card.Img variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>Date de sortie: {releaseDate}</Card.Subtitle>
        <Card.Text>
          {desc}
          <p>Note moyenne: {averageRating} ({totalVotes})</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Movie