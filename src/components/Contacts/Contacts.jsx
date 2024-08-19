import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
import ModalChengeContact from './Modal/ModalChengeContact'
import Loader from '../Loader/Loader';
import css from './Contacts.module.css'

function Contacts() {
    const title = "Phonebook";
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(fetchContacts());
    }, [dispatch])
   
     return (
       <div className={css.contacts}>
        {isLoading && <Loader />}
         <h1 className={css.contactsTitle}>{title}</h1>
         <div className={css.optionsFeid}>
          <ContactForm />
          <SearchBox />
         </div>
         <ContactList />
         <ModalChengeContact />
       </div>
     )
   }
   
   export default Contacts