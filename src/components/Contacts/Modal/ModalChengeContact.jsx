import Modal from 'react-modal';
import css from './ModalChengeContact.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/contacts/slice';
import { selectCurrentContactId, selectCurrentName, selectCurrentNumber, selectIsErrorContacts, selectisModalOpen, selectModalType } from '../../../redux/contacts/selectors';
import * as Yup from "yup";
import { changeContact } from '../../../redux/contacts/operations';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { deleteContact } from '../../../redux/contacts/operations'
import toast from 'react-hot-toast';

const ModalChengeContact = () => {

  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectisModalOpen);
  const modalType = useSelector(selectModalType);
  const contactName = useSelector(selectCurrentName);
  const contactNumber = useSelector(selectCurrentNumber);
  const id = useSelector(selectCurrentContactId);
  const isError = useSelector(selectIsErrorContacts);


  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const initialValues = {
    name: contactName,
    number: contactNumber,
  }

  const isClose = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (values) => {
    const chegedContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(changeContact({id, body: chegedContact}))
        .unwrap()
        .then(() => {
          toast.success('contact changed successfully');
          isClose();
        })
        .catch(() => {
          toast.error('Failed to changed contact');
          isClose();
        });
  }

  const handleSubmitDelete = (id) => {
    dispatch(deleteContact(id))
    .unwrap()
        .then(() => {
          toast.success('contact deleted successfully');
          isClose();
        })
        .catch(() => {
          toast.error('Failed to deleted contact');
          isClose();
        })
  }

  return ( 
    <>
    <Modal
      isOpen={isModalOpen}
      onRequestClose={isClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div>
        {modalType === 'change' && (
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
              >
                <Form className= {css.ModalForm} >
                  <div className={css.modalClosebtn}>
                    <button onClick={isClose}>X</button>
                  </div>
                  <div className={css.ModalContetBox}>
                    <div className= {css.ModalFormItemBox}>
                      <BsFillPersonFill />
                      <div 
                        className={css.ModalFormItem}><label>name</label> 
                        <Field className= {css.ModalFormInput} type="text" name="name" />
                        <ErrorMessage className= {css.error} name="name" component="span" />
                      </div>
                    </div>
         
                    <div className= {css.ModalFormItemBox}>
                      <BsFillTelephoneFill />
                      <div 
                        className={css.ModalFormItem}><label>number</label> 
                        <Field className= {css.ModalFormInput} type="text" name="number"/>
                        <ErrorMessage className= {css.error} name="number" component="span" />
                      </div>
                    </div>

                    <button type="submit" className= {css.ModalFormButton}>Change contact</button>
                  </div>
                </Form>
             </Formik>
        )}
        {modalType === 'delete' && (
          <div className={css.modalDeleteBox}>
            <p>Are you sure you want to delete this contact?</p>
            <div className={css.ModalDeleteButons}>
            <button onClick={() => handleSubmitDelete(id)}>Yes</button>
            <button onClick={isClose}>No</button>
            </div>
          </div>
        )}
      </div>
    </Modal>
    </>
  );
};

export default ModalChengeContact;
