import { useState } from 'react';

const TodoForm = () => {
  const [todo, setTodo] = useState('');

  return (
    <form>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
