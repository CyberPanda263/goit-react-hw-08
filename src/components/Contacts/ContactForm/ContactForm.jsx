import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../redux/contacts/operations";
import toast from "react-hot-toast";
import { selectContacts } from "../../../redux/contacts/selectors";
import { changeFilter } from "../../../redux/filter/slice";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {

  const dispatch = useDispatch();
  const existingContacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const isContactExists = () => {
        const contactExists = existingContacts.filter(contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() || contact.number.toLowerCase() === newContact.number.toLowerCase(),
        )

        if(contactExists.length !== 0) {
          console.log(contactExists[0].name)
          if(contactExists[0].name === newContact.name) {
            toast.error('A contact with that name already exists');
            dispatch(changeFilter(newContact.name))
            return true;
          }
          console.log(contactExists[0].number)
          toast.error('A contact with this number already exists');
          dispatch(changeFilter(newContact.number))
          return true;
        }

        return false;
      }

    if (isContactExists()) {
      actions.resetForm();
    } else {
      dispatch(addContact(newContact))
        .unwrap()
        .then(() => {
          toast.success('Contact successfully added');
          actions.resetForm();
        })
        .catch(() => {
          toast.error('Failed to add contact');
        });
    }
  };

  return (
    <Formik
     initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className= {css.form} >
        <h3>Add Contact</h3>
        <div className= {css.formBox}>
        <div className= {css.formItemBox}>
            <label>name</label> 
            <Field className= {css.formInput} type="text" name="name" placeholder="Enter contact name" />
            <ErrorMessage className= {css.error} name="name" component="span" />
        </div>

        <div className= {css.formItemBox}>
            <label>number</label>
            <Field className= {css.formInput} type="text" name="number" placeholder="Enter contact number" />
            <ErrorMessage className= {css.error} name="number" component="span" />
        </div>

        <button type="submit" className= {css.formButton}>Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

  export default ContactForm