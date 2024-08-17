import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css';
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};


const ContactForm = () => {

  const dispath = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispath(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
     initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className= {css.form} >
        <div className= {css.formItem}>
          <label>name</label>
          <Field className= {css.formInput} type="text" name="name" />
          <ErrorMessage className= {css.error} name="name" component="span" />
        </div>

        <div className= {css.formItem}>
          <label>number</label>
          <Field className= {css.formInput} type="text" name="number"/>
          <ErrorMessage className= {css.error} name="number" component="span" />
        </div>

        <button type="submit" className= {css.formButton}>Add contact</button>
      </Form>
    </Formik>
  );
};

  export default ContactForm