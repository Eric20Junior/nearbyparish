import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axiosinstance from '../utilis/axiosinstance'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()


    const adminLogin = async (username, password) => {
      try {
        const response = await axiosinstance.post('/account/login/', {
          username,
          password,
        })

        const { access, refresh, user } = response.data
        console.log(user)

        //save the token to local storage
        localStorage.setItem('accessToken', access)
        localStorage.setItem('refreshToken', refresh)

        return user || false;
      } catch (error) {
        console.log('Error you are not allowed here', error)
      }
    }


    const loginUser = async (username, password) => {
      try {
        const response = await axiosinstance.post('/account/api/token/', {
          username,
          password,
        })

        const { access, refresh } = response.data

        //save the token to local storage
        localStorage.setItem('accessToken', access)
        localStorage.setItem('refreshToken', refresh)

        const accessToken = localStorage.getItem('accessToken')

        if (accessToken) {
          const decodedToken = jwt_decode(accessToken);
          setUser(decodedToken);
        }

        navigate('/')
      } catch (error) {
        console.log('Error loggin in', error)
      }
    }
    

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken')

        if (accessToken) {
          const decodedToken = jwt_decode(accessToken);
          setUser(decodedToken);
        }
    }, [])

     // Function to refresh the access token
    const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');

      if (!refreshToken) {
        // Handle the case when the refresh token is not available

        console.error('Refresh token not found');
        return;
      }

    const response = await axiosinstance.post(
        '/account/api/token/refresh/',
        { refresh: refreshToken }
      );

    const { access } = response.data;

      // Update the access token in the local storage or state
      localStorage.setItem('accessToken', access);
    } catch (error) {
      // Handle the error when refreshing the token fails
      console.error('Error refreshing access token:', error);
    }
  };

    useEffect(() => {
        // Check if access token is expired
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const accessTokenExp = JSON.parse(atob(accessToken.split('.')[1])).exp;
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (accessTokenExp < currentTimestamp) {
            // Access token is expired, try to refresh it
            refreshAccessToken();
            }
        }

  }, []);

  const logoutUser = () => {
    setUser(null)
    localStorage.removeItem('accessToken')
    navigate('login')
  }

  const logoutAdmin = () => {
    setUser(null)
    localStorage.removeItem('accessToken')
    navigate('/admin/login')
  }


    const contextData = {
        user:user,
        loginUser:loginUser,
        adminLogin:adminLogin,
        logoutUser:logoutUser,
        logoutAdmin:logoutAdmin,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}