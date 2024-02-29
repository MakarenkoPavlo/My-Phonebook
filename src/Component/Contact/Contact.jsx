import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const Contact = ({ contact }) => {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
     <li key={id}>
      <div>
        <div>          
          <p>{name}</p>
        </div>
        <div>
           <p>{phone}</p>
        </div>
      </div>

      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
}
