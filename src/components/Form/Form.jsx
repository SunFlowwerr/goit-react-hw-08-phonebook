import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { Input, Stack, Button } from '@chakra-ui/react';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts, addContact } = useLocalStorage();

  function formSubmitHandler(formData) {
    const newContact = {
      name: formData.name,
      number: formData.number,
    };

    if (
      !contacts.some(
        existingContact => existingContact.name === newContact.name
      )
    ) {
      addContact(newContact);
    } else {
      alert(newContact.name + ' is already in contacts!');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    formSubmitHandler({ name: name, number: number });
    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <h2 style={{ fontSize: 27, color: '#38B2AC' }}>Add new contact</h2>
      <Stack spacing={4} style={{ width: 500 }}>
        <Input
          borderColor="#38B2AC"
          focusBorderColor="#2C7A7B"
          _placeholder={{ opacity: 1, color: '#2C7A7B' }}
          placeholder="Name"
          size="md"
          variant="outline"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <Input
          borderColor="#38B2AC"
          focusBorderColor="#2C7A7B"
          _placeholder={{ opacity: 1, color: '#2C7A7B' }}
          placeholder="Number"
          size="md"
          variant="outline"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Stack>
      <Button colorScheme="teal" variant="solid" type="submit">
        Add to contacts
      </Button>
    </form>
  );
}
