import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import {
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

export const RegistartionForm = () => {
  const distpach = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    distpach(register({ name, email, password }));
    setEmail('');
    setPassword('');
    setName('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: 'absolute',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        spacing={4}
        style={{
          width: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <Input
          borderColor="#38B2AC"
          focusBorderColor="#2C7A7B"
          _placeholder={{ opacity: 1, color: '#2C7A7B' }}
          placeholder="Email"
          size="md"
          variant="outline"
          type="email"
          name="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          required
          value={email}
          onChange={handleChange}
        />
        <Input
          borderColor="#38B2AC"
          focusBorderColor="#2C7A7B"
          _placeholder={{ opacity: 1, color: '#2C7A7B' }}
          placeholder="Username"
          size="md"
          variant="outline"
          type="text"
          name="username"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={name}
          onChange={handleChange}
        />
        <InputGroup>
          <Input
            borderColor="#38B2AC"
            focusBorderColor="#2C7A7B"
            _placeholder={{ opacity: 1, color: '#2C7A7B' }}
            placeholder="Password"
            size="md"
            variant="outline"
            type={showPassword ? 'text' : 'password'}
            name="password"
            pattern="(?=.*\d).{7,}"
            required
            value={password}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={toggleVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="teal" variant="solid" type="submit">
          Register
        </Button>
      </Stack>
    </form>
  );
};
