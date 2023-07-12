import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

export const RegistartionForm = () => {
  const distpach = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '40px',
          gap: '15px',
          width: '250px',
        }}
      >
        <h2>Login</h2>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontSize: '20px',
          }}
        >
          Email:
          <input
            type="text"
            name="email"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={email}
            onChange={handleChange}
            style={{
              width: '250px',
              height: '20px',
            }}
          ></input>
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontSize: '20px',
          }}
        >
          Password:
          <input
            type="text"
            name="password"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={password}
            onChange={handleChange}
            style={{
              width: '250px',
              height: '20px',
            }}
          ></input>
        </label>
        <button
          type="submit"
          style={{
            width: '120px',
            height: '40px',
            margin: 'auto',
            marginTop: '10px',
            backgroundColor: '#00BFFF',
            border: '1px solid #00BFFF',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '16px',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
