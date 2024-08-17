import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { selectFilteredContactsMemo } from '../../../redux/filter/selectors'
import { useSelector } from 'react-redux';

const ContactList = () => {

    const filterContacts = useSelector(selectFilteredContactsMemo);


    return (
        <div className= {css.contactsListBox}>
            <ul className={css.contactsList}>
                {filterContacts.map((contact) => (
                    <li className={css.contactCard} key={contact.id}>
                        <Contact
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList