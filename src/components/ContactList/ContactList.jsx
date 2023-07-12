import useLocalStorage from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const { dispatch, contacts, filter, deleteContact } = useLocalStorage();

  const normalizedFilter = filter ? filter.toLowerCase() : '';

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  function handleDeleteContact(id) {
    deleteContact(id);
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '40px',
        gap: '15px',
        width: '100%',
        padding: '0px',
        listStyle: 'inside',
      }}
    >
      <h2
        style={{
          margin: '0px',
        }}
      >
        Contacts:
      </h2>
      {visibleContacts.map(({ id, name, number }) => (
        <li
          key={id}
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px',
            fontSize: '18px',
            margin: '0px',
          }}
        >
          <p
            style={{
              margin: '0px',
            }}
          >
            {name}:{' '}
          </p>
          <p
            style={{
              paddingLeft: '7px',
              margin: '0px',
            }}
          >
            {number}
          </p>
          <button
            style={{
              width: '70px',
              height: '30px',
              backgroundColor: '#00BFFF',
              border: '1px solid #00BFFF',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '16px',
              marginLeft: '15px',
            }}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
