import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../api'; 
import { useState } from 'react';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

function Login() {
  const [message, setMessage] = useState('');
  return (
    <div>
      <h2>Login</h2>
      {message && <div>{message}</div>}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          console.log(values.email)
          login(values).then(response => {
            if (response.access_token) {
              setMessage('Login successful!'); 
            } else {
              setMessage('Login failed.');  // display error message
            }
            actions.setSubmitting(false);
          }).catch((error) => {
            setMessage(`An error occurred: ${error.message}`);  // use the error message
            actions.setSubmitting(false);
        });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
