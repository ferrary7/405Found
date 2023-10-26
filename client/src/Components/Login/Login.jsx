import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h2>Login</h2>
      {message && <div>{message}</div>}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          login(values)
            .then((response) => {
              console.log(response);
              if (response.access_token) {
                console.log(response.access_token);
                localStorage.setItem("name", response.name);
                localStorage.setItem("token", response.access_token);
                navigate("/", { replace: true });
                setMessage("Login successful!");
              } else {
                setMessage("Login failed."); // display error message
              }
              actions.setSubmitting(false);
            })
            .catch((error) => {
              setMessage(`An error occurred: ${error.message}`); // use the error message
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
