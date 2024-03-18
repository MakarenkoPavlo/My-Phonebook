import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/Contacts/operations";
import { useDispatch } from "react-redux";
import css from './ContactForm.module.css'

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: Yup.string()
    .required("number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .matches(/^\+?[0-9\s-]+$/, "Invalid number number"),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm () {
  const nameId = useId();
  const NumberId = useId();
  const dispatch = useDispatch();

  const handleAddContact = (values, { resetForm }) => {
  const newContact = {
    id: nanoid(),
    name: values.name,
    number: values.number,
  };
  dispatch(addContact(newContact)).then(() => resetForm());
};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleAddContact}
      >
        <div className={css.container}>
          <h2 className={css.header}>Add contact</h2>
          <Form autoComplete="off">
          <div className={css.group}>
            <label htmlFor={nameId}>Name</label>
            <Field
              type="text"
              name="name"
              id={nameId}
            />
             <ErrorMessage
              name="name"
                component="span"
                className={css.error}
              />
           </div>

          <div className={css.group}>
            <label htmlFor={NumberId}>number</label>
            <Field
              type="tel"
              name="number"
              id={NumberId}
            />       
            <ErrorMessage
              name="number"
                component="span"
                className={css.error}
            />
          </div>

          <button type="submit" className={css.button}>Add contact</button>
        </Form>
        </div>
        
      </Formik>
    </div>
  );
}



