import { Field, Formik, Form, ErrorMessage } from "formik"
import css from "./LoginForm.module.css"
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoginError } from "../../redux/auth/selectors";
import toast from "react-hot-toast";

const LoginForm = () => {

    const dispatch = useDispatch();
    const isError = useSelector(selectIsLoginError);

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
        .unwrap()
        .then(() => {
          options.resetForm();
        })
        .catch(() => {
          toast.error('Failed to Sign in');
          options.resetForm();
        });
    }

    return (
        <div className={css.loginContainer}>
            <Formik initialValues={initialValues} validationSchema={FeedbackSchema} onSubmit={handlSubmit}>
                <Form className={css.loginForm}>
                    <h1 className={css.loginFormTitle}>Login</h1>
                    {isError === '400' && <p className={css.error}>Wrong Email or Password</p>}
                    <div className={css.loginFormImput}>
                        <label>Email:</label>
                        <Field className={css.loginFormField} name='email' placeholder='Enter your email' />
                        <ErrorMessage className= {css.error} name="email" component="span" />
                    </div>
                    <div className={css.loginFormImput}>
                        <label>Password:</label>
                        <Field className={css.loginFormField} name='password' placeholder='Enter you password' />
                        <ErrorMessage className= {css.error} name="password" component="span" />
                    </div>
                    <button type="submit">Sign in</button>
                    <div className={css.loginFormLink}>
                        <p>You dont have an account?</p>
                        <Link className={css.loginFormLinkA} to='/register'>Sign up</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm
