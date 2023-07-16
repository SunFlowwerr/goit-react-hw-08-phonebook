import { useDispatch } from 'react-redux';
import { getName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const navigation = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
      }}
    >
      <span style={{ fontSize: 18, color: '#38B2AC' }}>
        You are welcome, {name}{' '}
      </span>
      <Button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 6,
          fontSize: 25,
          color: '#38B2AC',
        }}
        colorScheme="teal"
        variant="ghost"
        type="button"
        onClick={() => {
          dispatch(logOut());
          navigation('/');
        }}
      >
        <BiLogOut width={24} height={24}></BiLogOut>
        Log out
      </Button>
    </div>
  );
};
