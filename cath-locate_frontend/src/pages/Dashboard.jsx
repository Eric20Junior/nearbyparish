import React, { useContext, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext'
import axiosinstance from '../utilis/axiosinstance'

export const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [churches, setChurches] = useState()

  useEffect(() => {
    const fetchChurches = async () => {
      try {

        //get the access token stored in the localstorage
        const accessToken = localStorage.getItem('accessToken')

        const response = await axiosinstance.get('/api/churches/', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setChurches(response.data);
        console.log(response.data)
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchChurches();
  }, [setChurches]);
  return (
    <>
      <div className='flex justify-evenly sm:justify-between sm:mx-4'>
        <div className='flex space-x-1 sm:space-x-5 bg-[#2F80ED] text-white px-4 py-1 rounded w-[130px] h-[35px]'>
          <Link to={'/create'}>
            Create Profile
          </Link>
        </div>

        <div className='flex space-x-1 sm:space-x-5'>
            <p>Welcome {user?.username}</p>
        </div>
      </div>

      <div className='shadow-lg h-[450px] lg:w-[800px] mx-auto'>
        {churches?.map((church) => (
          <div key={church.id} className='shadow-lg h-[150px] w-[300px] sm:w-[400px] mx-auto text-center'>
            <h1>Church Name: {church.church_name}</h1>
            <h1>Parish Priest: {church.parish_priest}</h1>
            <h1>Established date: {church.established_date}</h1>

            <Link to={`/detailpage/${church.id}/`} 
            className='space-x-1 sm:space-x-5 bg-[#2F80ED] text-white px-4 py-1 rounded w-[130px] h-[35px]'
            >Read More</Link>
          </div>
        ))}
      </div>
      
    </>
  )
}
