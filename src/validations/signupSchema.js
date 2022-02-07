import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .required("No first name provided.")
    .matches(/^[a-z0-9]+$/i, { message: "Must be Alphanumeric" }),
  lname: Yup.string()
    .required("No last name provided.")
    .matches(/^[a-z0-9]+$/i, { message: "Must be Alphanumeric" }),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPassword: Yup.string()
    .required("No confirm password provided.")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default SignupSchema;
