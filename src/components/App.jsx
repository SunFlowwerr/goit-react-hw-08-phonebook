import { RegistartionForm } from './RegistrationForm';
import { getIsRefreshing } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { ContactList } from './ContactList';
import { Header } from './Header';
import { Home } from './Home';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginForm } from './LoginForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/auth-operations';

export function App() {
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  };

  const theme = extendTheme({ colors });

  return (
    !isRefreshing && (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          paddingTop: '140px',
        }}
      >
        <ChakraProvider theme={theme}>
          <Header></Header>
          <div>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route
                path="/registartion"
                element={
                  <PublicRoute restricted>
                    <RegistartionForm></RegistartionForm>
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <LoginForm></LoginForm>
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactList></ContactList>
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </ChakraProvider>
      </div>
    )
  );
}
