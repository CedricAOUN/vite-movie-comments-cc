import { Container } from 'react-bootstrap'
import './App.css'
import Movie from './components/Movie/Movie'
import CommentForm from './components/CommentForm/CommentForm'
import CommentList from './components/CommentList/CommentList'
import { useEffect, useState } from 'react'

function App() {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [randomMovie, setRandomMovie] = useState(null);

  const fetchMovie = async () => {
    try {
      const response = await fetch("https://jsonfakery.com/movies/random/1");

      if(!response.ok) {
        throw new Error(`HTTP Error: ${response.status} with message: ${response.statusText}`);
      }

      const data = await response.json();
      setRandomMovie(data);
    } catch (err) {
      setErrorMsg('An error occured while choosing a random movie');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  if(errorMsg) return <p className="text-danger text-center">{errorMsg}</p>

  if(isLoading) return <p className="text-primary text-center">Loading...</p>

  return (
    <Container>
      <Movie movie={randomMovie[0]} />
      <CommentForm />
      <CommentList />
    </Container>
  )
}

export default App
