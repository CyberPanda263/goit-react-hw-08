import css from './AppBar.module.css'
import UserMenu from '../UserMenu/UserMenu'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <>
          <header className={css.header}>
            <nav className={css.nav}>
            <Navigation />
            {!isLoggedIn &&
              <AuthNav />
              }
            </nav>
            <UserMenu />
        </header>
        </>
    )
}

export default AppBar