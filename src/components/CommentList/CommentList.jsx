import React from 'react'
import { useSelector } from 'react-redux'
import { selectComments } from '../../redux/selectors';
import Comment from '../Comment/Comment';

function CommentList() {
  const comments = useSelector(selectComments);

  if(comments.length == 0) return <div className='alert alert-primary mt-3' role="alert">Aucun commentaire pour le moment.</div>

  return (
    <>
      {comments.map((comment) => <Comment id={comment.id} message={comment.message} rating={comment.rating} />)}
    </>
  )
}

export default CommentList