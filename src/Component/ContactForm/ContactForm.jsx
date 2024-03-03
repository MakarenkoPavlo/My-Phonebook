import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/Contacts/operations";
import { useDispatch } from "react-redux";

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
        <Form autoComplete="off">
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field
              type="text"
              name="name"
              id={nameId}
            />
             <ErrorMessage
              name="name"
              component="span"
              />
           </div>

          <div>
            <label htmlFor={NumberId}>number</label>
            <Field
              type="tel"
              name="number"
              id={NumberId}
            />       
            <ErrorMessage
              name="number"
              component="span"
            />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
