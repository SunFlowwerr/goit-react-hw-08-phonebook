import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { BiLogIn } from 'react-icons/bi';
import { UserMenu } from '../UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 150,
        paddingRight: 150,
        backgroundColor: 'pink',
        width: '100%',
        height: 90,
      }}
    >
      <nav
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <Link to="/" style={{ fontSize: 35, color: '#38B2AC' }}>
          Home
        </Link>
        {isLoggedIn ? (
          <div
            style={{
              position: 'absolute',
              right: 0,
              display: 'flex',
              gap: 100,
            }}
          >
            <Link to="/contacts" style={{ fontSize: 25, color: '#38B2AC' }}>
              Contacts
            </Link>
            <UserMenu></UserMenu>
          </div>
        ) : (
          <div
            style={{
              position: 'absolute',
              right: 0,
              display: 'flex',
              gap: 100,
            }}
          >
            <Link to="/registartion" style={{ fontSize: 25, color: '#38B2AC' }}>
              Registartion
            </Link>
            <Link
              to="/login"
              style={{
                fontSize: 25,
                color: '#38B2AC',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 7,
              }}
            >
              <BiLogIn></BiLogIn>
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
