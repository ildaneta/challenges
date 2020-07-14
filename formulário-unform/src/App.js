import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Input from './components/Form/Input';

function App() {
  const formRef = useRef(null);

  const initialData = {
    email: 'ildaemanoely@hotmail.com',
    address: {
      city: 'Aparecida de Goiânia'
    }
  };

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido!')
          .required('O e-mail é obrigatório'),
        address: Yup.object().shape({
          city: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('A cidade é obrigatória')
        })
      });

      await schema.validate(data, {
        abortEarly: false
      });

      reset();

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }

    // if (data.name === '') {
    //   /* returning error for one field
    //   formRef.current.setFieldError('name', 'O nome é obrigatório!'); */

    //   // returning errors for more of one fields
    //   formRef.current.setErrors({
    //     address: {
    //       street: 'A rua é obrigatória',
    //       number: 'O número é obrigatório'
    //     }
    //   });
    // }
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} initialData={initialData} ref={formRef}>
        <Input name="name" />
        <Input name="email" type="email" />

        <Scope path="address">
          <Input name="street" />
          <Input name="number" />
          <Input name="city" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
