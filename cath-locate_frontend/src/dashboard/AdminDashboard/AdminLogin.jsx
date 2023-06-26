import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

export const AdminLogin = () => {
  
  const { adminLogin } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const isAdmin = await adminLogin(username, password);
console.log(isAdmin)
      // Clear the input fields (optional)
      setUsername('');
      setPassword('');

      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error you are not allowed here:', error);
    }
  };

  
  return (
    <div>
        <div className='pt-4 mx-10 sm:mx-auto sm:my-10 sm:px-10 sm:border sm:border-[#048950] sm:w-[400px] sm:h-[400px] sm:rounded-[20px] text-[#333333]'>
        <div className='space-y-2'>

          <h1 className='font-bold w-60'>Welcome Back</h1>
          <p className='xs:text-xs'>Login to manage platform</p>

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

            <div className='w-[300px] h-[35px] rounded xs:bg-[#048950] mt-4 text-white text-center py-1.5 text-sm font-bold'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
