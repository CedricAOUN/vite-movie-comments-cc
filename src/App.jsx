import { Container } from 'react-bootstrap'
import './App.css'
import Movie from './components/SingleMovie/Movie'
import CommentForm from './components/CommentForm/CommentForm'

function App() {
  return (
    <Container>
      <Movie />
      <CommentForm />
    </Container>
  )
}

export default App
