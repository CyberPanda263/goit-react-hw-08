import { Field, Formik, Form, ErrorMessage } from "formik"
import css from "../LoginPage/LoginPage.module.css"
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationPage = () => {

    const dispatch = useDispatch();

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short name!").max(50, "Too Long!").required("Required"),
        email: Yup.string().email('must be a valid email').required("Required"),
        password: Yup.string().min(6, "must have at least 6 characters!").max(50, "Too Long!").required("Required"),
      });

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };


    const handlSubmit = (values, options) => {
        dispatch(registerThunk(values));
        options.resetForm();
    }

    return (
        <div className={css.loginContainer}>
            <Formik initialValues={initialValues} validationSchema={FeedbackSchema} onSubmit={handlSubmit}>
                <Form className={css.loginForm}>
                    <h1 className={css.loginFormTitle}>Registration</h1>
                    <div className={css.loginFormImput}>
                        <label>Name:</label>
                        <Field name='name' placeholder='Enter your name' />
                        <ErrorMessage className= {css.error} name="name" component="span" />
                    </div>
                    <div className={css.loginFormImput}>
                        <label>Email:</label>
                        <Field name='email' placeholder='Enter your email' />
                        <ErrorMessage className= {css.error} name="email" component="span" />
                    </div>
                    <div className={css.loginFormImput}>
                        <label>Password:</label>
                        <Field name='password' placeholder='Enter you password' />
                        <ErrorMessage className= {css.error} name="password" component="span" />
                    </div>
                    <button type="submit">Sign up</button>
                    <div className={css.loginFormLink}>
                        <p>You already nave account?</p>
                        <Link to='/login'>Sign in</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationPage