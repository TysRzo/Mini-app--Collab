import { useState } from 'react';
import H1 from '../../atoms/H1';
import FormInputEmail from '../../atoms/FormInputs/FormInputEmail';
import Header from '../../layouts/Header';
import FormInputPassword from '../../atoms/FormInputs/FormInputPassword';
import Main from '../../layouts/Main';
import Footer from '../../layouts/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Ici, vous pouvez ajouter la logique d'authentification
  };

  return (
    <>
      <Header />
      
      <Main>
        <H1 pageTitle="Login" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <FormInputEmail inputName="email" inputId="email" handleEmailChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <FormInputPassword inputName="password" inputId="password" handlePasswordChange={handlePasswordChange} />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Se connecter
          </button>
        </form>
      </Main>

      <Footer />
    </>
  );
};

export default Login;
