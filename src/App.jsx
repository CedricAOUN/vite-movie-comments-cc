import { Container } from 'react-bootstrap'
import './App.css'
import Movie from './components/SingleMovie/Movie'
import CommentForm from './components/CommentForm/CommentForm'
import CommentList from './components/CommentList/CommentList'

function App() {
  return (
    <Container>
      <Movie />
      <CommentForm />
      <CommentList />
    </Container>
  )
}

export default App
