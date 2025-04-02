import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/commentSlice';

const schema = yup.object().shape({
  message: yup
    .string()
    .required('Votre message est vide!')
    .max(500, 'Votre message ne doit pas depasser 500 char.'),
  rating: yup
    .string()
    .oneOf(['1', '2', '3', '4', '5'], 'Veuillez sélectionner une note valide'),
  acceptConditions: yup
    .boolean()
    .oneOf([true], 'Vous devez accepter les conditions générales'),
});

function CommentForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: '',
      rating: 'Selectionnez une note',
      acceptConditions: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const { message, rating } = data;
    dispatch(addComment({ message, rating }))
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
      <h3>Commentaires</h3>
      <Form.Group className='mb-3' controlId='message'>
        <Form.Label>Ajouter un commentaire</Form.Label>
        <Form.Control type='text' as='textarea' rows={3} {...register('message')} />
        <p className='text-danger'>{errors?.message?.message}</p>
      </Form.Group>
      <Form.Group className='my-3' controlId='rating' >
        <Form.Label>Note</Form.Label>
        <Form.Select {...register('rating')} >
          <option value='Selectionnez une note' disabled>Selectionnez une note</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </Form.Select>
        <p className='text-danger'>{errors?.rating?.message}</p>
      </Form.Group>
      <Form.Group
        className='my-3'
        controlId='acceptConditions'
      >
        <Form.Check type='checkbox' label='Accepter les conditions générales' {...register('acceptConditions')}/>
        <p className='text-danger'>{errors?.acceptConditions?.message}</p>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add comment
      </Button>
    </Form>
  );
}

export default CommentForm;
