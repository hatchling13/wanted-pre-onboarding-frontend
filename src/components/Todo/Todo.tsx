import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts';
import { TodoForm } from '../TodoForm';
import { todoGet } from '../../api';

function Todo() {
  const { isTokenLoaded, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenLoaded) {
      navigate('/signin');
    }
  }, [isTokenLoaded]);

  useEffect(() => {
    const apiCall = async () => {
      const result = await todoGet(token);

      console.log(result);
    };

    if (isTokenLoaded) {
      apiCall();
    }
  }, [isTokenLoaded]);

  return (
    <main>
      <h1>Todo</h1>
      <TodoForm />
    </main>
  );
}

export default Todo;
