import { maodalIsClose, modalIsOpen } from "../../../redux/contacts/slice";
import Modal from 'react-modal';

const ModalChengeContact = () => {
    const isOpen = {modalIsOpen};
    const isClose = {maodalIsClose};

    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={isClose}
          className={"css.modal"}
          overlayClassName={"css.overlay"}
        >
          <div>
            <button onClick={isClose}>Закрити</button>
            <form>
              <label htmlFor="sectionName">Назва розділу</label>
              <input id="sectionName" name="sectionName" type="text" />
              <button type="button">Додати</button>
            </form>
          </div>
        </Modal>
      );
};

export default ModalChengeContact

/*
<button onClick={() => dispath(changeContact(id))}>Change</button>
                    <button onClick={() => dispath(deleteContact(id))}>Delet</button>
 */