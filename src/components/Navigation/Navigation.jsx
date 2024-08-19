import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'

const Navigation = () => {
    return (
        <>
            <NavLink to="/" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`} >
              Home
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`} >
              PhoneBook
            </NavLink>
        </>
    )
}

export default Navigation