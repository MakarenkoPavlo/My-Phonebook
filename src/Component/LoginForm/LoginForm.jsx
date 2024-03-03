import { useDispatch } from "react-redux"
import { logIn } from "../../redux/Auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password should be at least 8 characters long"),
});

const initialValues = {
    email: "",
    password: ""
}

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, formikBag) => {
        dispatch(
            logIn({
                email: values.email,
                password: values.password,
            })
        )
        .unwrap()
        .then(() => {
            console.log('login success');
        })
        .catch(() => {
            console.log('login error');
        });

        formikBag.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={handleSubmit}>
            <Form autoComplete="on">
                <div>
                    <label>Email</label>
                    <Field type="email" name="email" autoComplete="username"/>
                    <ErrorMessage name="email" component="span"/>
                </div>
                <div>
                    <label>Password</label>
                    <Field type="password" name="password" autoComplete="current-password"/>
                    <ErrorMessage name="password" component="span"/>
                </div>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    )
}
