import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../utilis/axiosinstance';

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
        <div className='pt-4 mx-10 sm:mx-auto sm:my-10 sm:px-10 sm:border sm:border-[#BDBDBD] sm:w-[400px] sm:h-[500px] sm:rounded-[20px] text-[#333333]'>
        <div className='space-y-4'>

          <h1 className='font-bold w-60'>Join thousands of catholic churches from around the world </h1>

          <p className='w-72 text-sm '>With a click of a button get the closest catholic church near you.</p>
        </div>

        <div className='mt-9'>
          <form onSubmit={registerUser}>
            <div>
              <input type="text" 
              name="username" 
              placeholder='Username' 
              value={username}
              onChange={handleUsernameChange}
              className='border border-[#BDBDBD] rounded h-[40px] w-[300px] p-2 text-[#828282] text-sm mb-4' />
            </div>

            <div>
              <input type="email" 
              name="email" 
              placeholder='Email' 
              value={email}
              onChange={handleEmailChange}
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

            <div>
              <input type="password" 
              name="password2" 
              placeholder='Comfirm Password' 
              value={password2}
              onChange={handlePassword2Change}
              className='border border-[#BDBDBD] rounded h-[40px] w-[300px] mt-4 p-2 text-[#828282] text-sm' />
            </div>

            <div className='w-[300px] h-[35px] rounded bg-[#2F80ED] mt-4 text-white text-center py-1.5 text-sm font-bold'>
              <button type="submit">Join Now</button>
            </div>
          </form>
        </div>

        <div className=' mt-8 text-center text-[#828282] text-sm space-y-6'>

          <p>Adready a member? 
          <Link to={'/login'}>
            <span className='text-[#2D9CDB]'> Login</span>
          </Link>
            </p>
        </div>
      </div>
    </>
  )
}
