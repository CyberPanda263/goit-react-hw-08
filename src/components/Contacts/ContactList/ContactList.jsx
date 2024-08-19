import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { selectFilteredContactsMemo } from '../../../redux/filter/selectors'
import { useSelector } from 'react-redux';
import { selectContacts } from '../../../redux/contacts/selectors';

const ContactList = () => {

    const filterContacts = useSelector(selectFilteredContactsMemo);
    const contacts = useSelector(selectContacts);

    return (
        <div className= {css.contactsListBox}>
            <div className={css.contactListTitle}>
            <h2>Contacts</h2>
            </div>
            <ul className={css.contactsList}>
                {filterContacts.length !== 0 ? (filterContacts.map((contact) => (
                    <li className={css.contactCard} key={contact.id}>
                        <Contact
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />
                    </li>
                    ))) : (
                        contacts.length === 0 
                        ?
                        <h3 className={css.noContacs}>You have not added any contact yet</h3>
                        :
                        <h3 className={css.noContacs}>No contacts were found according to the parameters you specified</h3>
                    )
                }
            </ul>
        </div>
    )
}

export default ContactList