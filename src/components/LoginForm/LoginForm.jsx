import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import {
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const distpach = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    distpach(logIn({ email, password }));
    setEmail('');
    setPassword('');
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
          type="text"
          name="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={email}
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
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          Log in
        </Button>
      </Stack>
    </form>
    // <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    //   <form
    //     onSubmit={handleSubmit}
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       margin: '40px',
    //       gap: '15px',
    //       width: '250px',
    //     }}
    //   >
    //     <h2>Login</h2>
    //     <label
    //       style={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         gap: '10px',
    //         fontSize: '20px',
    //       }}
    //     >
    //       Email:
    //       <input
    //         type="text"
    //         name="email"
    //         pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
    //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //         required
    //         value={email}
    //         onChange={handleChange}
    //         style={{
    //           width: '250px',
    //           height: '20px',
    //         }}
    //       ></input>
    //     </label>
    //     <label
    //       style={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         gap: '10px',
    //         fontSize: '20px',
    //       }}
    //     >
    //       Password:
    //       <input
    //         type="text"
    //         name="email"
    //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //         required
    //         value={password}
    //         onChange={handleChange}
    //         style={{
    //           width: '250px',
    //           height: '20px',
    //         }}
    //       ></input>
    //     </label>
    //     <button
    //       type="submit"
    //       style={{
    //         width: '120px',
    //         height: '40px',
    //         margin: 'auto',
    //         marginTop: '10px',
    //         backgroundColor: '#00BFFF',
    //         border: '1px solid #00BFFF',
    //         borderRadius: '4px',
    //         color: '#fff',
    //         fontSize: '16px',
    //       }}
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>
  );
};
