import { NavLink } from "react-router-dom"
import css from '../Navigation/Navigation.module.css'

const AuthNav = () => {
    return (
        <>
            <NavLink to="/login" className={css.link} >
                Login
            </NavLink>
            <NavLink to="/register" className={css.link} >
                Register
            </NavLink>
        </>
    )
}

export default AuthNav
