import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/Auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from './LoginForm.module.css'
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from 'react-hot-toast';


const userSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters long'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = async (values, formikBag) => {
    try {
      await dispatch(logIn(values));
      formikBag.resetForm();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Invalid credentials. Please check your email and password.');
      } else {
        setError(error.message);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={handleSubmit}>
      <div className={css.container}>
        <h2 className={css.header}>Log In</h2>
        <Form autoComplete="on">
          <div className={css.group}>
            <label>
              <MdAttachEmail className={css.icon} /> Email
            </label>
            <Field type="email" name="email" autoComplete="username" />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.group}>
            <label>
              <RiLockPasswordFill />Password
            </label>
            <Field type="password" name="password" autoComplete="current-password" />
            <ErrorMessage name="password" component="span" className={css.error} />
          </div>
          <button type="submit" className={css.button}>
            Log In
          </button>
          {error && <div className={css.error}>{error}</div>}
        </Form>
      </div>
    </Formik>
  );
};
