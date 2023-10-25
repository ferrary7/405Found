import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../api";
import { useState } from "react";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

function SignUp() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Register</h2>
      {message && <div>{message}</div>}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          register(values)
            .then((response) => {
              if (response.id) {
                setMessage("Registration successful! Please login.");
              } else {
                setMessage("Registration failed.");
              }
              actions.setSubmitting(false);
            })
            .catch((error) => {
              setMessage(`An error occurred: ${error.message}`);
              actions.setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />

            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
