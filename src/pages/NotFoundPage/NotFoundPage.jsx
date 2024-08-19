import { Link } from 'react-router-dom'
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={css.notFoundBox}>
            <h1 className={css.notFoundTitle}>404</h1>
            <div className={css.notFoundContent}>
                <p>Whoops, it seems that the page you are looking for is not there</p>
                <Link className={css.notFoundLink} to='/'>Go to home</Link>
            </div>
        </div>
    )
}

export default NotFoundPage