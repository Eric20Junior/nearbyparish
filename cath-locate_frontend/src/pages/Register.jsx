import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../utilis/axiosinstance';
import logo from '../assets/images.png'

export const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value)
  }

  const registerUser = async (e) => {
    e.preventDefault()

    try {
      const response = await axiosInstance.post('/account/register/', {
        username,
        email,
        password,
        password2,
      })

      const { access, refresh } = response.data

      //Save the token to local storage
      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)

      console.log('Registration successfull', response.data)

      //clear the input fields
      setUsername('')
      setEmail('')
      setPassword('')
      setPassword2('')

      navigate('/dashboard')
    } catch (error) {
      console.error('Error registering user', error)
      navigate('/register')
    }
  }


  return (
    <>
        <div className='lg:flex xs:font-[sora] '>
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
          <form onSubmit={registerUser}>
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

              <div className='xs:mx-10 xs:mt-6'>
                <input type="email" 
                name="email" 
                placeholder='Email' 
                value={email}
                onChange={handleEmailChange}
                className='xs:w-[300px] lg:w-[400px] xs:h-[50px] xs:rounded-md xs:pl-5 xs:text-xl ' />
              </div>

                
              <div className='xs:mx-10 xs:mt-6 xs:space-y-2'>
                <input type="password" 
                name="password" 
                placeholder='Password'
                value={password} 
                onChange={handlePasswordChange}
                className='xs:w-[300px] lg:w-[400px] xs:h-[50px] xs:rounded-md xs:pl-5 xs:text-xl ' />
              </div>

              <div className='xs:mx-10 xs:mt-6 xs:space-y-2'>
                <input type="password" 
                name="password2" 
                placeholder='Comfirm Password'
                value={password2} 
                onChange={handlePassword2Change}
                className='xs:w-[300px] lg:w-[400px] xs:h-[50px] xs:rounded-md xs:pl-5 xs:text-xl ' />
              </div>

              <div className='xs:mt-6 xs:pl-[60px] sx:pr-[170px] sd:pr-[170px] xm:pl-[60px] lg:pr-[270px] xl:pr-[290px]'>
                <span className='xs:text-[#048950]'>Forgot your password?</span>
                </div>

              <div className='xs:mx-10 xs:mt-6 xs:w-[300px] lg:w-[400px] xs:h-[50px] xs:rounded-md sx:mx-auto sd:mx-auto sg:mx-auto xs:text-center xs:py-3 xs:text-white xs: xs:bg-[#048950] '>
                <button type="submit">Join Now</button>
              </div>

              <div className='xs:text-center xs:mt-4 xs:text-base xs:pb-4'>
                <p>Have an Account? 
                  <Link to={'/login'}>
                    <span className='xs:text-[#048950]'>Login</span>
                  </Link>
                  </p>
              </div>
          </form>
        </div>

    </div>
    </>
  )
}
