import { ActionFunctionArgs, json } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import { isLoggedIn, loginWithEmailPassword, registerWithEmailPassword } from '../ulties/firebase';

const AuthPage = () => {
  return <AuthForm />;
};

export default AuthPage;

export async function action(args: ActionFunctionArgs) {
  const { request } = args

  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get('mode')

  if (mode !== 'login' && mode !== 'signup')
    throw json({ message: 'Unsupport mode!' }, { status: 422 })

  const fd = await request.formData()
  const emailVal = fd.get('email')!.toString()
  const passwordVal = fd.get('password')!.toString()

  try {
    if (mode === 'login')
      await loginWithEmailPassword(emailVal, passwordVal)
    else if (mode === 'signup')
      await registerWithEmailPassword(emailVal, passwordVal)
  }
  catch (err) {
    return err
  }
  isLoggedIn() && console.log('login ');
  !isLoggedIn() && console.log('logout ');


  return null

}
