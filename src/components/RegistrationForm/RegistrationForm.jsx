import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

export const RegistartionForm = () => {
  const distpach = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <h2>Registration</h2>
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
            type="email"
            name="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
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
          Username:
          <input
            type="text"
            name="username"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={name}
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
            type="password"
            name="password"
            pattern="(?=.*\d).{7,}"
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
          Register
        </button>
      </form>
    </div>
  );
};
