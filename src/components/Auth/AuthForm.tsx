import classes from './AuthForm.module.css';
import { Form, Link, useSearchParams } from 'react-router-dom';

const AuthForm = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const [params] = useSearchParams()
  const mode = params.get('mode')

  const isLogin = mode === 'login' ? true : false


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <Form method='post'>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' name='password' required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <Link
            to={`?mode=${isLogin ? 'signup' : 'login'}`}
            className={classes.toggle}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default AuthForm;
