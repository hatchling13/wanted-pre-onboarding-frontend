import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Root, SignIn, SignUp, Todo } from './components';
import { signInAction, signUpAction } from './actions';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="signup" element={<SignUp />} action={signUpAction} />
      <Route path="signin" element={<SignIn />} action={signInAction} />
      <Route path="todo" element={<Todo />} />
    </Route>
  )
);

export default router;
