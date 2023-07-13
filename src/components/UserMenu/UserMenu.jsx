import { useDispatch, useSelector } from 'react-redux';
import { getName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);

  return (
    <div>
      <span>You are welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}></button>
    </div>
  );
};
