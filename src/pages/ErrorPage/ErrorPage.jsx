import css from './ErrorPage.module.css'
import image from '../../assets/images/500.png'

const ErrorPage = () =>{
    return (
        <div className={css.errorPageBox}>
            <h1 className={css.errorPagetitle}>Whoops, looks like someone broke everything! Try to come back later</h1>
            <img className={css.errorPageImage} src={image} alt='Error 500'></img>
        </div>
    )
}

export default ErrorPage