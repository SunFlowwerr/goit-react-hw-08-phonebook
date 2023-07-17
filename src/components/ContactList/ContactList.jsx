import useLocalStorage from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Form } from '../Form';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const { contacts, filter, deleteContact } = useLocalStorage();
  const dispatch = useDispatch();

  const normalizedFilter = filter ? filter.toLowerCase() : '';

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  // function handleDeleteContact(id) {
  //   deleteContact(id);
  // }

  // async function handleDeleteContact(id, name) {
  //   try {
  //     await deleteContact(id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Form></Form>
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
            fontSize: 27,
            color: '#38B2AC',
          }}
        >
          Contacts:
        </h2>
        {visibleContacts.map(({ id, name, number }) => (
          <li
            key={id}
            id={id}
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
            <Button
              style={{
                width: '70px',
                height: '30px',
                marginLeft: '15px',
              }}
              colorScheme="teal"
              variant="solid"
              type="button"
              // onClick={() => handleDeleteContact(id)}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
