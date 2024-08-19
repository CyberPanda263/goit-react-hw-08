import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink to="/" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`} >
        Home
      </NavLink>
      {isLoggedIn && 
      <NavLink to="/contacts" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`} >
        PhoneBook
      </NavLink>
      }
    </>
    )
}

export default Navigation
