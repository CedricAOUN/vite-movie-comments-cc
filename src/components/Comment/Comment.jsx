import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteComment } from '../../redux/commentSlice';
import { Button, Card } from 'react-bootstrap';
import './comment.css'

function Comment({ id, message, rating }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteComment(id));
  }

  return (
    <Card className='mt-3'>
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='fw-bold'>Note : {rating}/5</Card.Title>
        <Card.Text>
          {message}
        </Card.Text>
        <Button variant="danger align-self-end" onClick={() => handleDelete(id)}>Supprimer</Button>
      </Card.Body>
    </Card>
  )
}

export default Comment