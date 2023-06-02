import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  
  const { loginUser } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginUser(username, password);

      // Clear the input fields (optional)
      setUsername('');
      setPassword('');

    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  
  return (
    <div>
        <div className='pt-4 mx-10 sm:mx-auto sm:my-10 sm:px-10 sm:border sm:border-[#BDBDBD] sm:w-[400px] sm:h-[400px] sm:rounded-[20px] text-[#333333]'>
        <div className='space-y-4'>

          <h1 className='font-bold w-60'>Login</h1>

        </div>

        <div className='mt-9'>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input type="text" 
              name="username" 
              placeholder='Username' 
              value={username}
              onChange={handleUsernameChange}
              className='border border-[#BDBDBD] rounded h-[40px] w-[300px] p-2 text-[#828282] text-sm' />
            </div>
            <div>
              <input type="password" 
              name="password" 
              placeholder='Password'
              value={password} 
              onChange={handlePasswordChange}
              className='border border-[#BDBDBD] rounded h-[40px] w-[300px] mt-4 p-2 text-[#828282] text-sm' />
            </div>

            <div className='w-[300px] h-[35px] rounded bg-[#2F80ED] mt-4 text-white text-center py-1.5 text-sm font-bold'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <div className=' mt-8 text-center text-[#828282] text-sm space-y-6'>

          <p>Don’t have an account yet? 
            <Link to={'/register'}><span className='text-[#2D9CDB]'> Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
