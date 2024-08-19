import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { LogoutThunk } from "../../redux/auth/operations";
import css from './UserMenu.module.css'

const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <>
                <div className={css.nameBox}>
                    <h3 className={css.nameTitle}>Welcom, {user.name}</h3>
                    <button onClick={() => dispatch(LogoutThunk())}>Loguout</button>
                </div>
        </>
    )
}

export default UserMenu