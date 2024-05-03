import React, { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password
      });
      console.log(response.data);
      setIsLoggedIn(true);
      navigateTo('/test')
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-20 h-20 mr-2" src="data:image/jpeg;base64,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" alt='logo'/>
                     
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email"  value={email}
                                  onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" value={password}
                                  onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button onClick={handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to={`/addClient`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default LoginPage;