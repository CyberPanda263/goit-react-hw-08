import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsError, selectIsLoading } from '../../redux/contacts/selectors';

function Contacts() {
    const title = "PhoneBook";
    const isLoading = useSelector(selectIsLoading)
    const isError = useSelector(selectIsError);
    const dispatch = useDispatch();
   
    useEffect(() => {
       dispatch(fetchContacts());
    }, [dispatch])
   
     return (
       <div>
         <h1>{title}</h1>
         <ContactForm
         />
         <SearchBox 
         />
         <ContactList
         />
         {isLoading && <h1>Loading...</h1>}
         {isError && 
         <div>
           <h1>Error: </h1>
           <p>there is no connection with the server</p>
         </div>
         }
       </div>
     )
   }
   
   export default Contacts