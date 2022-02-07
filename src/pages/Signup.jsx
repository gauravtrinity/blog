import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label, Input } from "reactstrap";

import useAuth from "../hooks/useAuth";

import { StyledErrorMessage } from "../common";
import { SignupSchema } from "../validations";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();

  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || "/dashboard");
    });
  };

  return (
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        handleLogin(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="login-form">
          <h3 className="text-center mb-5">Signup Page</h3>

          <FormGroup>
            <Label>First Name</Label>
            <Field
              name="fname"
              type="fname"
              render={({ field }) => (
                <Input
                  type="fname"
                  placeholder="fname"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </FormGroup>
          {errors.fname && touched.fname ? (
            <StyledErrorMessage error={errors.fname} />
          ) : null}

          <FormGroup>
            <Label>Last Name</Label>
            <Field
              name="lname"
              type="lname"
              render={({ field }) => (
                <Input
                  type="lname"
                  placeholder="lname"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </FormGroup>
          {errors.lname && touched.lname ? (
            <StyledErrorMessage error={errors.lname} />
          ) : null}

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

          <FormGroup>
            <Label>Confirm Password</Label>
            <Field
              name="confirmPassword"
              render={({ field }) => (
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...field}
                />
              )}
            />
          </FormGroup>
          {errors.confirmPassword && touched.confirmPassword ? (
            <StyledErrorMessage error={errors.confirmPassword} />
          ) : null}

          <Button type="submit">Signup</Button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
