import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(64)
    .required('Name is required')
    .matches(nameRegex, {
      message:
        "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
    }),

  number: yup
    .string()
    .trim()
    .required('Number is required')
    .min(5)
    .matches(numberRegex, {
      message:
        'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
    }),
});

function ContactForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          placeholder="Enter a contact name"
          autoComplete="off"
          {...register('name')}
        />
        {errors.name && <div>{errors.name?.message}</div>}
      </StyledLabel>

      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          placeholder="Enter a contact number"
          autoComplete="off"
          {...register('number')}
        />
        {errors.number && <div>{errors.number?.message}</div>}
      </StyledLabel>

      <StyledButton type="submit" />
    </StyledForm>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
