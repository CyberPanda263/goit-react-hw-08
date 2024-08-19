import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openModal } from '../../../redux/contacts/slice';
import css from './Contact.module.css';
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleOpenModal = (type) => {
    dispatch(openModal({ id, name, number, type }));
    
  };

  return (
    <>
      <div className={css.contact}>
        <p><BsFillPersonFill /> {name}</p>
        <p><BsFillTelephoneFill /> {number}</p>
      </div>
      <div className={css.contactButtons}>
        <button onClick={() => handleOpenModal('change')}>Change</button>
        <button onClick={() => handleOpenModal('delete')}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
