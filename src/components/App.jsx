import { RegistartionForm } from './RegistrationForm';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
// import { Form } from './Form';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';

export function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <RegistartionForm></RegistartionForm>
      {isLoggedIn && <UserMenu></UserMenu>}
      {/* <Form />
      <Filter />
      <ContactList /> */}
    </div>
  );
}
