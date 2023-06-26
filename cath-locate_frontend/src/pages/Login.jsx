import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/images.png'

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
    <div className='lg:flex lg:h-screen xs:font-[sora] '>
        <div className='lg:w-[1000px] xs:bg-slate-200 xs:text-center xs:pt-[160px] lg:pt-[250px] xs:space-y-4 '>
          <div>
            <img src={logo} alt="logo" className='xs:mx-auto xs:rounded-md' />
          </div>

          <div className='xs:space-y-4 xs:px-2 xs:pb-6'>
            <h1 className='xs:font-semibold xs:text-2xl lg:text-4xl lg:w-[500px] xs:mx-auto'>Join thousands of <span className='xs:text-[#048950]'>catholic churches</span> from around the world</h1>
            <p className=' lg:text-xl lg:w-[400px] xs:mx-auto'>With a click of a button get the closest catholic church near you.</p>
          </div>
        </div>

        <div className='lg:w-[600px] sx:text-center sd:text-center sg:text-center'>
          <form onSubmit={handleFormSubmit}>
              <div className='xs:pl-10 xs:mt-28 xs:space-y-4'>
                <h1 className='xs:font-semibold xs:text-3xl'>Login with your Username</h1>
                <p className='xs:text-xl xs:text-slate-500'>Access your account with your username</p>
              </div>

              <div className='xs:mx-10 xs:mt-16'>
                <input type="text" 
                name="username" 
                placeholder='Username' 
                value={username}
                onChange={handleUsernameChange}
                className='xs:w-[300px] lg:w-[400px] xs:h-[50px] xs:rounded-md xs:pl-5 xs:text-xl ' />
              </div>

                <div className='xs:mt-6 xs:pl-[60px] sx:pr-[170px] sd:pr-[170px] xm:pl-[60px] lg:pr-[270px] xl:pr-[300px]'>
                <span className='xs:text-[#048950]'>Forgot your password?</span>
                </div>
              <div className='xs:mx-10 xs:space-y-2'>
                <input type="password" 
                name="password" 
                placeholder='Password'
                value={password} 
                onChange={handlePasswordChange}
                className='xs:w-[300px] lg:w-[400px] xs:h-[50px] xs:rounded-md xs:pl-5 xs:text-xl ' />
              </div>

              <div className='xs:mx-10 xs:mt-6 xs:w-[300px] lg:w-[400px] xs:h-[50px] xs:rounded-md sx:mx-auto sd:mx-auto sg:mx-auto xs:text-center xs:py-3 xs:text-white xs: xs:bg-[#048950] '>
                <button type="submit">Login</button>
              </div>

              <div className='xs:text-center xs:mt-4 xs:text-base xs:pb-4'>
                <p>No Account? 
                  <Link to={'/register'}>
                    <span className='xs:text-[#048950]'>Sign Up</span>
                  </Link>
                  </p>
              </div>
          </form>
        </div>

    </div>
  )
}
