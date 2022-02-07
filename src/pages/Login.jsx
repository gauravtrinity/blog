import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label, Input, Container } from "reactstrap";

import useAuth from "../hooks/useAuth";

import { StyledErrorMessage } from "../common";
import { LoginSchema } from "../validations";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();

  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || "/blog-list");
    });
  };

  return (
    <section className="min-vh-75">
      <Container>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            handleLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="login-form">
              <h3 className="text-center mb-5">Login Page</h3>

              <FormGroup>
                <Label>Email</Label>
                <Field
                  name="email"
                  type="email"
                  render={({ field }) => (
                    <Input
                      type="email"
                      placeholder="Email"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                />
              </FormGroup>

              {errors.email && touched.email ? (
                <StyledErrorMessage error={errors.email} />
              ) : null}

              <FormGroup>
                <Label>Password</Label>
                <Field
                  name="password"
                  render={({ field }) => (
                    <Input type="password" placeholder="Password" {...field} />
                  )}
                />
              </FormGroup>

              {errors.password && touched.password ? (
                <StyledErrorMessage error={errors.password} />
              ) : null}

              <Button type="submit">Login</Button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default Login;
