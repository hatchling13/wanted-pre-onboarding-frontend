import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts';

function Todo() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === '') {
      navigate('/signin');
    }
  }, [token]);

  return <h1>Todo</h1>;
}

export default Todo;
