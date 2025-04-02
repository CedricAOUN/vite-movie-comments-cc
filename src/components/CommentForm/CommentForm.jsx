import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/commentSlice';

const optionAmount = 5;
let options = []

for(let i = 0; i < optionAmount; i++) {
  options.push((i + 1).toString());
}

const schema = yup.object().shape({
  message: yup
    .string()
    .required('Le commentaire est obligatoire')
    .max(500, 'Votre message ne doit pas depasser 500 char.'),
  rating: yup
    .string()
    .oneOf(options, 'Veuillez sélectionner une note'),
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
        <Form.Control 
          type='text' 
          as='textarea' 
          rows={3} 
          {...register('message')} 
          isInvalid={!!errors?.message} 
        />
        <Form.Control.Feedback type='invalid'>
          {errors?.message?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='my-3' controlId='rating'>
        <Form.Label>Note</Form.Label>
        <Form.Select {...register('rating')} isInvalid={!!errors?.rating}>
          <option value='Selectionnez une note' disabled>Selectionnez une note</option>
          {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </Form.Select>
        <Form.Control.Feedback type='invalid'>
          {errors?.rating?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='my-3' controlId='acceptConditions'>
        <Form.Check 
          type='checkbox' 
          label="J'accepte les conditions générales" 
          {...register('acceptConditions')} 
          isInvalid={!!errors?.acceptConditions} 
        />
        <Form.Control.Feedback type='invalid'>
          {errors?.acceptConditions?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Ajouter
      </Button>
    </Form>
  );
}

export default CommentForm;
