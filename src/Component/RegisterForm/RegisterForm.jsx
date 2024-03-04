import { useDispatch } from "react-redux";
import { register } from "../../redux/Auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(3, "Minimum 3 characters")
        .max(50, "Maximum 50 characters"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password should be at least 8 characters long"),
});

const initialValues = {
    name: "",
    email: "",
    password: ""
}

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, formikBag) => {
        try {
            await dispatch(
                register({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                })
            ).unwrap();
            console.log('Регистрация прошла успешно');
            formikBag.resetForm();
        } catch (error) {
            console.log('Ошибка при регистрации', error);
        }
    };
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={handleSubmit}
        >
            <Form autoComplete="off">
                <div>
                    <label>Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="span" />
                </div>
                <div>
                    <label>Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="span" />
                </div>
                <div>
                    <label>Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="span" />
                </div>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}
