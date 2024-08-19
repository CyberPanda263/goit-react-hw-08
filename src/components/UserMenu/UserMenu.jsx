import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { LoguotThunk } from "../../redux/auth/operations";
import css from './UserMenu.module.css'

const UserMenu = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();

    return (
        <>
            {isLoggedIn &&
                <div className={css.nameBox}>
                    <h3 className={css.nameTitle}>Welcom, {user.name}</h3>
                    <button onClick={() => dispatch(LoguotThunk())}>Loguout</button>
                </div>
          }
        </>
    )
}

export default UserMenu