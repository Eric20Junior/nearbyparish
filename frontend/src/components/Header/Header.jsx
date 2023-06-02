import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'

export const Header = () => {

  const {user, logoutUser} = useContext(AuthContext)
  
  return (
    <>
      <div className='flex justify-between shadow-lg w-full h-13 p-4 mb-6'>
        <Link to='/'>
          logo here
          <img src="" alt='' />
        </Link>
        <div className='flex space-x-5'>
          {user ? (
            <>
              
                <div className='flex space-x-1 sm:space-x-5'>
                    <Link to={'/dashboard'}>
                      Dashboard
                    </Link>
                </div>

                <div className='flex space-x-1 sm:space-x-5'>
                    <button onClick={logoutUser}>logout</button>
                </div>
            </>
          ) : (
            <div className='flex space-x-1 sm:space-x-5 bg-[#2F80ED] text-white px-4 py-1 rounded w-[80px] h-[35px]'>
                <Link to={'/login'}>
                  Login
                </Link>
            </div>
          )}

            
        </div>
      </div>
    </>
  )
}
