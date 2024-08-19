import css from './HomePage.module.css';
import phoneBook from '../../assets/images/phonebook.png';

const HomePage = () => {
    return (
        <div className={css.homePageBox}>
            <h1 className={css.homePageTitle}>
            Welcome to the phonebook application
            </h1>
            <div className={css.homePageContent}>
                <div>
                    <img className={css.homePageContentImage} src={phoneBook} alt='phonbook whith old phone'></img>
                </div>
                <div>
                    <p className={css.homePageContentText}>It is a desktop multi-user application for saving phone contacts.</p>
                     
                    <p className={css.homePageContentText}>Each user has access only to their notes, which guarantees the safety of your data.</p>
                    <p className={css.homePageContentText}>
                    why is the application only desktop and not multi-platform? 
                    It іs too lazy to adapt to all devices, and I dont have time, 
                    to be honest. Perhaps one day thіs application will become multi-platform
                    </p>
                </div>
            </div>
        </div>
    )
};
export default HomePage