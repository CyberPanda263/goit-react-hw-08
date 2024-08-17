import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { changeContact, deleteContact } from "../../../redux/contacts/operations";
import ModalChengeContact from "../Modal/modalChengeContact";
import ModalDeleteContact from "../Modal/modalDeleteContact";

const Contact = ({id, name, number}) => {

    const dispath = useDispatch();
   
        return (
            <>
                <div>
                    <p><BsFillPersonFill /> {name}</p>
                    <p><BsFillTelephoneFill /> {number}</p>
                </div>
                <div>
                <button onClick={() => ModalChengeContact()}>Change</button>
                    <button onClick={() => ModalDeleteContact()}>Delet</button>
                </div>
            </>
        )
    }


export default Contact