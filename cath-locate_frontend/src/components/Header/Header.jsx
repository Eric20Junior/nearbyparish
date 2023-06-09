import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
import logo from '../../assets/wetland_n 1.png'

export const Header = () => {

  const {user, logoutUser} = useContext(AuthContext)
  
  return (
    <>
      <div className='xs:flex xs:justify-between xs:shadow xs:w-full xs:h-13 xs:pl-[50px] xs:pr-[10px] lg:px-[50px] mb-6 font-[sora]'>
        <Link to='/'>
          <img src={logo} alt='logo' className='h-[60px]' />
        </Link>
        <div className='xs:hidden lg:flex xs:space-x-4 lg:space-x-10 text-sm font-medium lg:pt-5'>
          <div>
            <a href="#">Home</a>
          </div>

          <div>
            <a href="#">About</a>
          </div>

          <div>
            <a href="#">Products and Services</a>
          </div>

          <div>
            <a href="#">E-banking</a>
          </div>

          <div>
            <a href="#">Portfolio</a>
          </div>

          <div>
            <a href="#">Contact us</a>
          </div>

          <div>
            <a href="#">Staff Email</a>
          </div>
        </div>

        <div class="xs:block xs:pt-4 lg:hidden cursor-pointer">
          <div class="space-y-2">
            <span class="block w-6 lg:w-8 h-0.5 bg-green-500 pulse"></span>
            <span class="block w-6 lg:w-8 h-0.5 bg-green-500 pulse"></span>
            <span class="block w-6 lg:w-8 h-0.5 bg-green-500 pulse"></span>
          </div>
      </div>
      </div>
    </>
  )
}
