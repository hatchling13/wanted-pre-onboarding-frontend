import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts';

function Todo() {
  const { isTokenLoaded } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenLoaded) {
      navigate('/signin');
    }
  }, [isTokenLoaded]);

  return <h1>Todo</h1>;
}

export default Todo;
