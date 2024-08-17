import { Field, Formik, Form, ErrorMessage } from "formik"
import css from "./LoginPage.module.css"
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginPage = () => {

    const dispatch = useDispatch();

    const FeedbackSchema = Yup.object().shape({
        email: Yup.string().email('must be a valid email').required("Required"),
        password: Yup.string().min(6, "must have at least 6 characters!").max(50, "Too Long!").required("Required"),
      });

    const initialValues = {
        email: '',
        password: '',
    };

    const handlSubmit = (values, options) => {
        dispatch(loginThunk(values))
        options.resetForm();
    }

    return (
        <div className={css.loginContainer}>
            <Formik initialValues={initialValues} validationSchema={FeedbackSchema} onSubmit={handlSubmit}>
                <Form className={css.loginForm}>
                    <h1 className={css.loginFormTitle}>Login</h1>
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
                    <button type="submit">Sign in</button>
                    <div className={css.loginFormLink}>
                        <p>You don't have an account?</p>
                        <Link to='/register'>Sign up</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginPage
