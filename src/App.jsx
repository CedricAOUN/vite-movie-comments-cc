import { Container } from 'react-bootstrap'
import './App.css'
import MovieList from './components/MovieList/MovieList'
import Movie from './components/SingleMovie/Movie'

function App() {
  return (
    <Container>
      <MovieList></MovieList>
      <Movie></Movie>
    </Container>
  )
}

export default App
