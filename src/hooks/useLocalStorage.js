import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/operations';
import { setFilter } from '../redux/contactSlice';

export default function useLocalStorage() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.contacts.filter);
  const status = useSelector(state => state.contacts.status);

  const handleAddContact = newContact => dispatch(addContact(newContact));
  const handleDeleteContact = id => dispatch(deleteContact(id));
  const handleSetFilter = value => dispatch(setFilter(value));

  return {
    dispatch,
    contacts,
    filter,
    status,
    addContact: handleAddContact,
    deleteContact: handleDeleteContact,
    setFilter: handleSetFilter,
  };
}
