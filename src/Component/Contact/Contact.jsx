import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/operations';
import { RiFileUserFill } from 'react-icons/ri';
import { FaSquarePhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    setModalIsOpen(false);
  };

  return (
    <li className={css.contact} key={id}>
      <div className={css.info}>
        <div className={css.user}>
          <RiFileUserFill />
          <p className={css.item}>{name}</p>
        </div>
        <div className={css.user}>
          <FaSquarePhone />
          <p className={css.item}>{number}</p>
        </div>
      </div>

      <button className={css.button} type="button" onClick={() => setModalIsOpen(true)}>
        Delete
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={css.modal}
      >
        <h2>Are you sure you want to delete this contact?</h2>
        <div className={css.containerButton}>
          <button className={css.modalButton} onClick={handleDeleteContact}>Yes</button>
          <button className={css.modalButton} onClick={() => setModalIsOpen(false)}>No</button>
        </div>
      </Modal>
    </li>
  );
};
