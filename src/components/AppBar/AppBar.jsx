import { NavLink } from 'react-router-dom'
import css from './AppBar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'
import { LoguotThunk } from '../../redux/auth/operations'

const AppBar = () => {

    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();

    return (
        <header className={css.header}>
            <h3>Welcom, {user.name}</h3>
            <nav className={css.nav}>
            <NavLink to="/" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`} >
              Home
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`} >
              PhoneBook
            </NavLink>
            {!isLoggedIn ? (
              <>
                <NavLink to="/login" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`} >
                  Login
                </NavLink>
                <NavLink to="/register" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`} >
                  Register
                </NavLink>
              </>
              ) : ( 
                  <li>
                    <button onClick={() => dispatch(LoguotThunk())}>exit</button>
                  </li>
                )}
            </nav>
        </header>
    )
}

export default AppBar