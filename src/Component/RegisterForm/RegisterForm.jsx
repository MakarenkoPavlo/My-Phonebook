import { useDispatch } from "react-redux";
import { register } from "../../redux/Auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from './RegisterForm.module.css'
import { FaUser } from 'react-icons/fa';
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

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
            <div className={css.container}>
                <h2 className={css.header}>Register</h2>
                <Form autoComplete="off">
                <div className={css.group}>
                    <label> <FaUser className={css.icon} /> Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="span" className={css.error}/>
                </div>
                <div className={css.group}>
                        <label><MdAttachEmail className={css.icon} /> Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="span" className={css.error}/>
                </div>
                <div className={css.group}>
                    <label><RiLockPasswordFill />Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="span" className={css.error}/>
                </div>
                    <button type="submit" className={css.button}>Register</button>
            </Form>
            </div>
            
        </Formik>
    )
}
